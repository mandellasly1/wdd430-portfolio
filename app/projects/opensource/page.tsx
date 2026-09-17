export default async function OpenSourceProjects() {
  const res = await fetch('/api/projects?type=opensource');
  const projects = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-600">Open Source Projects</h1>
      <ul>
        {projects.map((p: any) => (
          <li key={p.id}>{p.title} - {p.description}</li>
        ))}
      </ul>
    </div>
  );
}
