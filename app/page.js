import SemesterCard from "@/components/SemesterCard";
import { semesterList } from "@/data/semesterList";

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 px-5 py-20 text-center text-white">
        <h1 className="mx-auto max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
          Free BCA notes, simple and exam-ready
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-blue-100">
          Notes, code examples and PDFs for every semester.
        </p>
        <input
          type="text"
          placeholder="Search a subject, e.g. DBMS, Java"
          className="mt-8 w-full max-w-md rounded-full px-5 py-3 text-gray-900 outline-none"
        />
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <h2 className="text-2xl font-bold">Choose your semester</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
          {semesterList.map((semester) => (
            <SemesterCard
              key={semester.semesterNumber}
              semesterNumber={semester.semesterNumber}
              subjectCount={semester.subjectCount}
              emoji={semester.emoji}
            />
          ))}
        </div>
      </section>
    </main>
  );
}