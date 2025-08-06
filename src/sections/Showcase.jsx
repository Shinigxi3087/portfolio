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
    <section id="work" className="app-showcase" ref={sectionRef}>
      <div className="w-full flex flex-col md:flex-row gap-10">
        {/* Left Side: Static Showcase */}
        <div className="first-project-wrapper flex-1">
          <div className="image-wrapper">
            <img src="/images/project1.png" alt="CashCache" />
          </div>
          <div className="text-content mt-4">
            <h2>Empowering users with seamless banking and crypto tracking experiences</h2>
            <p className="text-white-50 md:text-xl">
              CashCache features a user-friendly interface with secure OTP login, real-time crypto tracking, smooth animations, and intuitive navigation—built for performance, scalability, and accessibility. Still in Process.
            </p>
          </div>
        </div>

        {/* Right Side: GitHub Projects + Link */}
        <div className="flex-1 flex flex-col justify-center items-center rounded p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Other Projects</h2>

          <div className="w-full max-w-md space-y-6">
            <div className="bg-[#2b2b2b] p-4 rounded shadow-md">
              <h3 className="text-xl font-semibold text-white">Rotom</h3>
              <p className="text-white-50 text-sm mt-1">
                Rotom is an AI-powered food freshness tracker that helps reduce waste and manage your fridge intelligently. It gives you expiry reminders, fridge insights, and a clean dashboard UI — right on your phone..
              </p>
            </div>
          </div>

          <a
            href="https://github.com/Shinigxi3087?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
          >
            Visit My Repos →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Showcase
