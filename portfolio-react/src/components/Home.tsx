import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  const projectsRef = useRef(null)
  const certificationsRef = useRef(null)

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollToCertifications = () => {
    certificationsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const projects = [
    {
      title: "Linux Command Bot",
      description: "Solved the problem faced by linux beginners. This is a CLI tool which can run in parallel terminals and worked.",
      tech: "Python, Google generative api, Rich",
      github: "https://github.com/PriyankaCSEC/LinuxCommandBot"
    },
    {
      title: "ArtBlog",
      description: "Modern blog platform to showcase and discuss digital art.",
      tech: "React , Tailwind , MongoDB",
      github: "https://github.com/PriyankaCSEC/artistic_aura"
    },
   
    {
      title: "Weather-Driven Travel Planner",
      description: "Suggests travel destinations based on live weather data.",
      tech: "React, Node.js , Tailwind CSS , Cloudflare",
      github: "https://github.com/PriyankaCSEC/Weather-driven-travel-planner"
    }
  ]
  const certifications = [
    {
      title: "Machine Learning using python",
      // provider: "Coursera - Stanford University",
      // date: "April 2024",
      link: "https://drive.google.com/file/d/1m2ZJEAgxjPxELJoL0TSImYoSOonRfYvI/view?usp=drive_link",
      // skills: "Supervised Learning, Deep Learning, ML Algorithms"
    },
    {
      title: "SQL INTERMEDIATE",
      // provider: "Udemy",
      // date: "February 2024",
      link: "https://drive.google.com/file/d/1allVS35TRLYPpbWPhr6UvxU6mNQZuWwS/view?usp=drive_link",
      // skills: "React, Node.js, MongoDB, Express"
    },
    {
      title: "Programming in JAVA",
      // provider: "Google Cloud",
      // date: "December 2023",
      link: "https://www.cloudskillsboost.google/public_profiles/123456/badges/123456",
      // skills: "TensorFlow, AI Ethics, Neural Networks"
    },
    {
      title: "Machine Learning with Tensorflow",
      // provider: "Amazon Web Services",
      // date: "October 2023",
      // link: "https://www.credly.com/badges/123456",
      // skills: "Cloud Computing, AWS Services, Cloud Security"
    }
  ]

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-x-hidden">
      {/* Fixed background elements */}
      <div className="fixed inset-0 bg-violet-950 "></div>
      {/* <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDU2IDAgTCAwIDAgTCAwIDEwMCBMIDU2IDEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10 z-0"></div> */}
      
      {/* Blobs for decorative effects */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>
      <div className="fixed top-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>
      <div className="fixed bottom-0 right-0 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>
      
      {/* Main content sections */}
      <div className="relative z-10">
        {/* Hero Section */}
        {/* <div className="font-white text-xl ">Hey I'm</div> */}
        <section className="flex items-center justify-center min-h-screen py-10 relative bg-black bg-opacity-30">
          {/* <div className="text-xl">Hey i'm</div> */}
          <div className="text-center py-10 px-4 w-full max-w-6xl mx-auto text-white"> 
            <div className="text-gray-300 font-bold text-4xl">Hey I'm</div>       
            <h1 className="text-6xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-00 via-purple-500 to-yellow-500">
              Priyanka B
            </h1>
            <p className="text-xl md:text-2xl mt-3 md:mt-4 text-gray-200">AIML Enthusiast | Building Smart, Functional Projects</p>
            {/* <p className="mt-4 md:mt-6 max-w-lg md:max-w-2xl mx-auto text-gray-300 text-sm md:text-base">
              Passionate about Artificial Intelligence and creating real-world solutions using technology.
            </p> */}

            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <button
                onClick={scrollToProjects}
                className="relative overflow-hidden font-bold bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white px-5 md:px-8 py-2 md:py-3 rounded-lg transition-all transform hover:scale-105 text-sm md:text-base mb-3 sm:mb-0 shadow-lg"
              >
                <span className="relative z-10">View Projects</span>
              </button>
              <button
                onClick={scrollToCertifications}
                className="font-bold relative overflow-hidden bg-gradient-to-r from-indigo-500 to-pink-600 hover:from-indigo-600 hover:to-pink-700 text-white px-5 md:px-8 py-2 md:py-3 rounded-lg transition-all transform hover:scale-105 text-sm md:text-base mb-3 sm:mb-0 shadow-lg"
              >
                <span className="relative z-10">Certifications</span>
              </button>
              <button
                onClick={() => navigate('/Resume')}
                className=" font-bold relative overflow-hidden bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white px-5 md:px-8 py-2 md:py-3 rounded-lg transition-all transform hover:scale-105 text-sm md:text-base mb-3 sm:mb-0 shadow-lg"
              >
                <span className="relative z-10">Achievments</span>
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="relative overflow-hidden font-bold bg-gradient-to-r from-indigo-500 to-pink-600 hover:from-indigo-600 hover:to-pink-700 text-white px-5 md:px-8 py-2 md:py-3 rounded-lg transition-all transform hover:scale-105 text-sm md:text-base shadow-lg"
              >
                <span className="relative z-10">Skills </span>
              </button>
            </div>
            
            <div className="mt-12 md:mt-20">
              <div className="flex justify-center space-x-4 md:space-x-8">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-300 hover:text-teal-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-300 hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
                <a href="mailto:contact@example.com" className="transform hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-300 hover:text-pink-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Scroll down indicator */}
            <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="py-20 relative bg-black bg-opacity-30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500">
              My Projects
            </h2>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              {/* Explore my portfolio of AI/ML projects and applications that solve real-world problems */}
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
            {/* <div className="mt-16 text-center">
              <button className="px-8 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  More Projects Coming Soon
                </span>
              </button>
            </div> */}
          </div>
        </section>
        {/* Certifications Section */}
        <section ref={certificationsRef} className="py-20 relative bg-black bg-opacity-30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
              My Certifications
            </h2>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Professional credentials that showcase my expertise and continuous learning
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 p-6"
                >
                  <div className="flex items-start">
                    <div className={`text-4xl mr-5 ${
                      index % 4 === 0 ? 'text-teal-400' : 
                      index % 4 === 1 ? 'text-indigo-400' : 
                      index % 4 === 2 ? 'text-pink-400' :
                      'text-yellow-400'
                    }`}>
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                      {/* <p className="text-gray-300 text-sm mb-2">{cert.provider}</p>
                      <p className="text-gray-400 text-sm mb-3">{cert.date}</p> */}
                      
                      <div className="mb-4">
                        {/* <span className="text-xs font-medium text-gray-400">Skills: {cert.skills}</span> */}
                      </div>
                      
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`inline-flex items-center text-sm px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r ${
                          index % 4 === 0 ? 'from-teal-500 to-teal-700' : 
                          index % 4 === 1 ? 'from-indigo-500 to-indigo-700' : 
                          index % 4 === 2 ? 'from-pink-500 to-pink-700' :
                          'from-yellow-500 to-yellow-700'
                        } hover:opacity-90 transition-opacity`}
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        View Certificate
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}