import Link from "next/link";
import { notFound } from "next/navigation";
import { semesterList } from "@/data/semesterList";

export default async function SemesterPage({ params }) {
   const allParams = await params;
   const semesterNumber = allParams["1"];

  const foundSemester = semesterList.find(
    (semester) => semester.semesterNumber === Number(semesterNumber)
  );

  if (!foundSemester) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <Link href="/" className="text-sm text-blue-600">← Home</Link>
      <h1 className="mt-3 text-3xl font-bold">
        Semester {foundSemester.semesterNumber} notes
      </h1>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {foundSemester.subjectList.map((subject) => (
          <Link
            key={subject.subjectId}
            href={`/notes/${subject.subjectId}`}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-md"
          >
            <h2 className="font-semibold">{subject.subjectTitle}</h2>
            <p className="mt-1 text-sm text-gray-500">Read notes →</p>
          </Link>
        ))}
      </div>
    </main>
  );
}