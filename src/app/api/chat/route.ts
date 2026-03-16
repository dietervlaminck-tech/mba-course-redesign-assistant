import { anthropic } from "@ai-sdk/anthropic";
import { streamText, convertToModelMessages } from "ai";
import { courses } from "@/data/courses";
import { buildSystemPrompt } from "@/lib/system-prompt";

export const maxDuration = 60;

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response("ANTHROPIC_API_KEY is not configured", { status: 500 });
  }

  const body = await req.json();
  const { courseSlug } = body;
  const rawMessages = body.messages ?? [];

  const course = courses.find((c) => c.slug === courseSlug);
  if (!course) {
    return new Response(`Module niet gevonden: ${courseSlug}`, { status: 404 });
  }

  const systemPrompt = buildSystemPrompt(course);

  // Convert UIMessages (from TextStreamChatTransport) to model messages
  const messages = await convertToModelMessages(rawMessages);

  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: systemPrompt,
    messages,
  });

  return result.toTextStreamResponse();
}
