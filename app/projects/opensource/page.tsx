import { getProjects } from '../../lib/projects-db';

export default function OpenSourceProjects() {
  const projects = getProjects('opensource');

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-600">
        Open Source Projects
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