import { getProjects } from '../../lib/projects-db';

export default function SchoolProjects() {
  const projects = getProjects('school');

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-600">
        School Projects
      </h1>

      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            {p.title} - {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}