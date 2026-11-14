import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export default async function NotePage({ params }) {
   const allParams = await params;
   const subjectId = allParams.PST;

  const noteFilePath = path.join(process.cwd(), "content", `${subjectId}.md`);

  if (!fs.existsSync(noteFilePath)) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-12">
        <Link href="/" className="text-sm text-blue-600">← Home</Link>
        <h1 className="mt-3 text-3xl font-bold">Notes coming soon</h1>
        <p className="mt-2 text-gray-600">This subject is being written. Check back later.</p>
      </main>
    );
  }

  const fileText = fs.readFileSync(noteFilePath, "utf8");
  const { data: noteInfo, content: markdownText } = matter(fileText);
  const processedNote = await remark().use(remarkHtml).process(markdownText);
  const noteHtml = processedNote.toString();

  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <Link href="/" className="text-sm text-blue-600">← Home</Link>
      <h1 className="mt-3 text-3xl font-bold">{noteInfo.title}</h1>

      {noteInfo.pdfFileName && (
        <a
          href={`/pdfs/${noteInfo.pdfFileName}`}
          download
          className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          Download PDF
        </a>
      )}

      <div
        className="note-content mt-8"
        dangerouslySetInnerHTML={{ __html: noteHtml }}
      />
    </main>
  );
}