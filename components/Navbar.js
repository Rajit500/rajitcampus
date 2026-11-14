import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-xl font-bold text-blue-700">
           Rajit’s Campus
        </Link>
        <Link href="/privacy">Privacy</Link>
        <nav className="flex gap-5 text-sm text-gray-600">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}