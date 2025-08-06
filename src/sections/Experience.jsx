import { expCards } from '../constants/index.js';
import TitleHeader from '../components/TitleHeader';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray('.exp-item').forEach((item) => {
      gsap.from(item, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
        },
      });
    });

    gsap.utils.toArray('.experience-card').forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
          duration: 0.3
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.2)',
          duration: 0.3
        });
      });
    });
  }, []);

    useEffect(() => {
    const cards = document.querySelectorAll('.experience-card');
    
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    cards.forEach(card => {
        card.addEventListener('mousemove', handleMouseMove);
    });

    return () => {
        cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        });
    };
    }, []);

  return (
    <section id="experience" className="w-full md:mt-40 mt-20 section-padding">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Professional Work Experience" sub="My Career Overview" />

        <div className="experience-container mt-20">
          <div className="grid gap-16 max-w-4xl mx-auto">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-item">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Company Logo */}
                  <div className="company-logo w-32 h-32 flex-shrink-0 rounded-full bg-black-100 border border-black-50 flex items-center justify-center p-4">
                    <img src={card.imgPath} alt={card.company} className="w-full h-full object-contain" />
                  </div>

                  {/* Experience Card with Glow */}
                  <div className="experience-card relative bg-black-100 rounded-xl p-8 border border-black-50 transition-all duration-300 hover:border-blue-400 w-full">
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div className="glow-effect absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-start flex-wrap gap-4">
                        <div>
                          <h1 className="font-semibold text-2xl md:text-3xl">{card.title}</h1>
                          <h2 className="text-xl text-blue-50 mt-1">{card.company}</h2>
                          <p className="my-2 text-white-50">{card.date}</p>
                        </div>
                        <p className="text-white-50 text-sm">{card.location}</p>
                      </div>
                      <p className="text-blue-50 italic mt-4">Responsibilities</p>
                      <ul className="list-disc ms-5 mt-2 flex flex-col gap-3 text-white-50">
                        {card.responsibilities.map((responsibility) => (
                          <li key={responsibility} className="text-base md:text-lg">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;