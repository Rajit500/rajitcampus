import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Rajit’s Campus | Free BCA Notes",
  description: "Free BCA notes, code examples and PDFs for every semester, by Rajit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="flex min-h-screen flex-col bg-gray-50 text-gray-900 antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}