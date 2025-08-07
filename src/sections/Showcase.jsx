import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import projects from '../constants/index'

gsap.registerPlugin(ScrollTrigger)

const Showcase = () => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    )
  }, { scope: sectionRef })

  return (
    <section
      id="work"
      className="app-showcase py-20 px-4 bg-black text-white"
      ref={sectionRef}
    >
      <h2 className="text-4xl font-bold text-center mb-12">Project Showcase</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => {
          const isClickable = Boolean(project.link)

          return (
            <div
              key={idx}
              className={`relative group bg-[#1e1e1e] p-4 rounded-lg shadow-md transition duration-300 ${
                isClickable ? 'hover:scale-105 cursor-pointer' : ''
              }`}
            >
              {isClickable ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover rounded border-2 border-transparent group-hover:border-blue-400 transition"
                  />
                </a>
              ) : (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded"
                />
              )}

              <h3 className="text-xl font-semibold mt-4 flex items-center">
                {project.name}
                {project.status === "In Progress" && (
                  <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded">
                    {project.status}
                  </span>
                )}
              </h3>

              <p className="text-white/50 text-sm mt-2">{project.description}</p>

              {isClickable && (
                <span className="absolute top-2 right-2 text-xs bg-blue-600 px-2 py-0.5 rounded text-white">
                  Live
                </span>
              )}
            </div>
          )
        })}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/Shinigxi3087?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
        >
          Visit My Repos →
        </a>
      </div>
    </section>
  )
}

export default Showcase
