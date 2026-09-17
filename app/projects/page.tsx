// app/projects/page.tsx
export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`);

  const projects = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-600">Projects Overview</h1>
      <ul>
        {projects.map((p: any) => (
          <li key={p.id}>
            {p.title} - {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
