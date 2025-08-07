import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Showcase = () => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    )
  }, [])

  return (
     <section id="work" className="app-showcase py-20 px-4" ref={sectionRef}>
      <h2 className="text-4xl font-bold text-center mb-12">Project Showcase</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#1e1e1e] p-4 rounded-lg shadow-md hover:scale-105 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-white text-xl font-semibold mt-4">{project.name}</h3>
            <p className="text-white-50 text-sm mt-2">{project.description}</p>
          </div>
        ))}
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
