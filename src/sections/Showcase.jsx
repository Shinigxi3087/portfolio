import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import projects from "../constants/index";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const ctx = gsap.context(() => {
        gsap.from(".showcase-header", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: ".showcase-header", start: "top 85%" },
        });

        gsap.from(".project-card", {
          opacity: 0,
          y: 24,
          scale: 0.98,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ".projects-grid", start: "top 80%" },
        });

        gsap.to(".projects-grid", {
          y: -12,
          ease: "none",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.4,
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      className="app-showcase bg-black text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <header className="showcase-header max-w-7xl mx-auto text-center mb-12">
        <p className="text-white/60 text-sm sm:text-base tracking-wider uppercase">
          Selected Works
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
          Project Showcase
        </h2>
        <p className="text-white/60 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          A mix of live apps and in-progress builds—optimized, accessible, and fun.
        </p>
      </header>

      <div
        className="projects-grid max-w-7xl mx-auto grid gap-6 sm:gap-8
                    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, idx) => {
          const isClickable = Boolean(project.link);

          const Card = ({ children }) => (
            <div
              className={`project-card relative group rounded-xl 
                          bg-[rgb(30,30,30)]/95 ring-1 ring-white/5 
                          shadow-md transition-transform duration-300 
                          will-change-transform ${
                            isClickable ? "hover:-translate-y-1" : ""
                          }`}
            >
              {children}
            </div>
          );

          const Inner = (
            <>
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className={`w-full aspect-[16/10] object-cover
                             transition-transform duration-500
                             ${isClickable ? "group-hover:scale-[1.03]" : ""}`}
                />
                {isClickable && (
                  <span className="absolute top-3 right-3 text-[10px] sm:text-xs bg-blue-600/90 backdrop-blur px-2 py-0.5 rounded tracking-wide">
                    Live
                  </span>
                )}
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                  {project.name}
                  {project.status === "In Progress" && (
                    <span className="text-[10px] sm:text-xs bg-yellow-400 text-black px-2 py-0.5 rounded">
                      {project.status}
                    </span>
                  )}
                </h3>
                <p className="text-white/60 text-sm sm:text-[15px] mt-2 leading-relaxed">
                  {project.description}
                </p>

                {Array.isArray(project.tags) && project.tags.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <li
                        key={t}
                        className="text-xs sm:text-[13px] px-2 py-0.5 rounded bg-white/5 text-white/70 ring-1 ring-white/10"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          );

          return isClickable ? (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} – open live project`}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
            >
              <Card>{Inner}</Card>
            </a>
          ) : (
            <Card key={idx}>{Inner}</Card>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/Shinigxi3087?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Visit My Repos →
        </a>
      </div>
    </section>
  );
};

export default Showcase;
