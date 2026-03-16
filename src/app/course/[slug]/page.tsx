import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import ChatInterface from "@/components/ChatInterface";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return { title: "Module niet gevonden" };
  return {
    title: `${course.name} — Herontwerp Assistent`,
    description: `Herontwerp assistent voor ${course.name}`,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return <ChatInterface course={course} />;
}
