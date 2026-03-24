import { createAnthropic } from "@ai-sdk/anthropic";
import { streamText, convertToModelMessages, UIMessage } from "ai";
import { courses } from "@/data/courses";
import { buildSystemPrompt } from "@/lib/system-prompt";
import { readFileSync } from "fs";
import { join } from "path";

export const maxDuration = 60;

function getApiKey(): string | undefined {
  // process.env may have an empty string from the shell; prefer .env.local value
  const envKey = process.env.ANTHROPIC_API_KEY;
  if (envKey && envKey.length > 0) return envKey;

  // Fallback: try reading .env.local directly (for local dev when shell overrides)
  try {
    const envFile = readFileSync(join(process.cwd(), ".env.local"), "utf-8");
    const match = envFile.match(/^ANTHROPIC_API_KEY=(.+)$/m);
    if (match?.[1]?.trim()) return match[1].trim();
  } catch {
    // .env.local doesn't exist (e.g., on Vercel)
  }

  return undefined;
}

export async function POST(req: Request) {
  const apiKey = getApiKey();
  if (!apiKey) {
    return new Response("ANTHROPIC_API_KEY is not configured", { status: 500 });
  }

  const anthropic = createAnthropic({ apiKey });

  const body = await req.json();
  const { courseSlug } = body;
  const rawMessages: UIMessage[] = body.messages ?? [];

  const course = courses.find((c) => c.slug === courseSlug);
  if (!course) {
    return new Response(`Module niet gevonden: ${courseSlug}`, { status: 404 });
  }

  const systemPrompt = buildSystemPrompt(course);
  const messages = await convertToModelMessages(rawMessages);

  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: systemPrompt,
    messages,
  });

  return result.toUIMessageStreamResponse();
}
