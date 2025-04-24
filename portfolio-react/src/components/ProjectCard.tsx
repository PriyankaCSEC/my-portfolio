import React from 'react'

type ProjectCardProps = {
  title: string
  description: string
  tech: string
  github?: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  github
}) => {
  return (
    <div className="rounded-lg shadow-md bg-gray-800 border border-cyan-500 p-4 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl text-fuchsia-400 font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-2">{description}</p>
        <p className="text-sm text-cyan-200">Tech: {tech}</p>
      </div>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-fuchsia-300 underline mt-4 inline-block"
        >
          View on GitHub
        </a>
      )}
    </div>
  )
}
