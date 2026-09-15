import Link from "next/link";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-6">
      <nav className="mb-4 space-x-4">
        <Link href="/projects" className="text-blue-500 hover:text-blue-600">Overview</Link>
        <Link href="/projects/opensource" className="text-blue-500 hover:text-blue-600">Open Source</Link>
        <Link href="/projects/school" className="text-blue-500 hover:text-blue-600">School</Link>
      </nav>
      {children}
    </section>
  );
}
