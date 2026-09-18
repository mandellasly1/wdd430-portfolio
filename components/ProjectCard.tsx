import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  link?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="text-xl font-bold mb-2 text-blue-500">
        {title}
      </h3>

      <p className="text-gray-700">
        {description}
      </p>

      <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      {link && (
        <Link
          href={link}
          className="mt-3 inline-block text-blue-600 hover:text-blue-800 font-medium"
        >
          View Product
        </Link>
      )}
    </div>
  )
}