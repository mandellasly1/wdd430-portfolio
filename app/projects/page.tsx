import Link from "next/link";
import { getProjects } from "../lib/projects-db";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-blue-600">
        Projects Overview
      </h1>

      <ul className="mb-8">
        {projects.map((p) => (
          <li key={p.id}>
            {p.title} - {p.description}
          </li>
        ))}
      </ul>

      <Link
        href="/projects/products"
        className="inline-block rounded bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
      >
        View Featured Products
      </Link>
    </div>
  );
}