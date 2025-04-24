// import React from 'react'
// import { ProjectCard } from '../components/ProjectCard'

export const Projects = () => {
  const projects = [
    {
      title: "Weather-Driven Travel Planner",
      description: "Suggests travel destinations based on live weather data.",
      tech: "React, Node.js",
      github: "https://github.com/PriyankaCSEC/Weather-driven-travel-planner",
      image: "/api/placeholder/600/300"
    },
    {
      title: "ArtBlog",
      description: "Modern blog platform to showcase and discuss digital art.",
      tech: "React, Tailwind, MongoDB",
      github: "https://github.com/PriyankaCSEC/artistic_aura",
      image: "/api/placeholder/600/300"
    },
    {
      title: "Linux Command Bot",
      description: "Solved the problem faced by linux beginners. This is a CLI tool which can run in parallel terminals and worked.",
      tech: "Python, Google generative api, Rich",
      github: "https://github.com/PriyankaCSEC/LinuxCommandBot",
      image: "/api/placeholder/600/300"
    }
  ]

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-black opacity-60 z-0"></div>
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDU2IDAgTCAwIDAgTCAwIDEwMCBMIDU2IDEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10 z-0"></div>
      
      {/* Blobs for decorative effects */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>
      
      {/* Content section */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500">
          My Projects
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Explore my portfolio of AI/ML projects and applications that solve real-world problems
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
            >
              <div className="h-48 bg-gray-700 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  index % 3 === 0 ? 'from-teal-500 to-purple-600' : 
                  index % 3 === 1 ? 'from-indigo-500 to-pink-600' : 
                  'from-yellow-500 to-red-500'
                } opacity-90`}>
                  <div className="flex items-center justify-center h-full">
                    <svg className="w-20 h-20 text-white opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-gray-400 mb-5">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  {project.tech}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                  <button 
                    className={`px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r ${
                      index % 3 === 0 ? 'from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700' : 
                      index % 3 === 1 ? 'from-indigo-500 to-pink-600 hover:from-indigo-600 hover:to-pink-700' : 
                      'from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600'
                    } shadow-md hover:shadow-lg transition-all`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Add project button */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              More Projects Coming Soon
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}