import Link from "next/link";

export default function SemesterCard({ semesterNumber, subjectCount, emoji }) {
  return (
    <Link
      href={`/semester/${semesterNumber}`}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-md"
    >
      <div className="text-3xl">{emoji}</div>
      <h3 className="mt-3 text-lg font-semibold">Semester {semesterNumber}</h3>
      <p className="text-sm text-gray-500">{subjectCount} subjects</p>
    </Link>
  );
}