import Link from "next/link";
import { courses } from "@/data/courses";

const programLabel = {
  BIT: "MBA Business & IT",
  PP: "MBA Public & Private",
  BST: "MBA Business & Sustainable Transitions",
  Elective: "Keuzemodules / Electives",
};

const programColor = {
  BIT: "bg-blue-100 text-blue-800",
  PP: "bg-emerald-100 text-emerald-800",
  BST: "bg-amber-100 text-amber-800",
  Elective: "bg-purple-100 text-purple-800",
};

export default function HomePage() {
  const programs = ["BIT", "PP", "BST", "Elective"] as const;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Module Herontwerp Assistent
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Nyenrode MBA — Curriculumherziening Learning Outcomes
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Het MMBA-curriculum wijzigt van 77 naar 68 ECTS — elke module gaat
            van 7,5 naar 6 ECTS. Kies je module om te starten met het
            herontwerpgesprek. De AI-assistent begeleidt je stap voor stap:
            leerdoelen herzien en afstemmen op de nieuwe MBA Program Learning
            Outcomes, toetsing afstemmen, leeractiviteiten ontwerpen met blended
            learning, en het nieuwe blokschema invullen.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {programs.map((prog) => {
          const progCourses = courses.filter((c) => c.program === prog);
          if (progCourses.length === 0) return null;

          return (
            <section key={prog} className="mb-10">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                {programLabel[prog]}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {progCourses.map((course) => (
                  <Link
                    key={course.slug}
                    href={`/course/${course.slug}`}
                    className="block bg-white rounded-lg border border-gray-200 p-5 hover:border-blue-400 hover:shadow-md transition-all duration-150"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-base font-semibold text-gray-900 leading-tight pr-2">
                        {course.name}
                      </h3>
                      <span
                        className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded ${programColor[course.program]}`}
                      >
                        {programLabel[course.program]}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <span className="font-medium text-gray-700">ECTS:</span>
                        <span className="line-through text-gray-400">{course.ects}</span>
                        <span>→ {course.newEcts}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium text-gray-700">
                          Blokken:
                        </span>
                        <span>{course.blocks}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium text-gray-700">
                          {course.language === "en" ? "Lang:" : "Taal:"}
                        </span>
                        <span>{course.language === "en" ? "EN" : "NL"}</span>
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 line-clamp-2">
                      {course.courseDescription}
                    </p>

                    <div className="mt-3 flex items-center text-sm text-blue-600 font-medium">
                      Start herontwerp →
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <footer className="border-t border-gray-200 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          Nyenrode Business Universiteit — Curriculumherziening MBA 2025/2026
        </div>
      </footer>
    </div>
  );
}
