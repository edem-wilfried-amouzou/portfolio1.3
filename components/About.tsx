'use client'

import { useEffect, useRef } from 'react'

const skills = [
  { name: 'Website Development', level: 70 },
  { name: 'Graphic Design', level: 60 },
  // { name: 'Linux Administration', level: 65 },
]

const stats = [
  { value: '120+', label: 'Projects\nCompleted' },
  { value: '95%', label: 'Client\nSatisfaction' },
  { value: '10+', label: 'Awards\nWon' },
]

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: 'Dévelopment Web',
    desc: 'Sites web modernes et réactifs avec des designs élégants et des performances optimales.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Graphic Design',
    desc: 'Conception de logos, bannières et visuels captivants pour renforcer votre identité de marque.',
  },
  // {
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
  //       <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  //     </svg>
  //   ),
  //   title: 'Linux Administration',
  //   desc: 'A laise avec les sys',
  // },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Animate skill bars
            const bars = entry.target.querySelectorAll<HTMLElement>('.skill-bar-fill')
            bars.forEach((bar) => {
              const level = bar.getAttribute('data-level') || '0'
              bar.style.width = level + '%'
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16" style={{ transitionDelay: '0.1s' }}>
          <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--coral)' }}>
            Qui Suis-Je?
          </p>
          <h2 className="text-4xl font-extrabold">
            A propos <span className="gradient-text">de moi</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — services & skills */}
          <div>
            {/* Services */}
            <div className="reveal mb-10" style={{ transitionDelay: '0.2s' }}>
              <div className="flex flex-col gap-4">
                {services.map((svc) => (
                  <div
                    key={svc.title}
                    className="flex items-start gap-4 glow-border rounded-xl p-4"
                    style={{ background: 'var(--dark-800)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(255,107,74,0.12)',
                        color: 'var(--coral)',
                      }}
                    >
                      {svc.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-white mb-1">{svc.title}</h3>
                      <p className="text-white/40 text-xs leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="reveal" style={{ transitionDelay: '0.3s' }}>
              <h3 className="font-semibold text-sm text-white/60 mb-4 uppercase tracking-wider font-mono">
                Proficiency
              </h3>
              <div className="flex flex-col gap-5">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white/80 font-medium">{skill.name}</span>
                      <span className="font-mono text-xs" style={{ color: 'var(--coral)' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        data-level={skill.level}
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — bio & stats */}
          <div>
            <div className="reveal mb-8" style={{ transitionDelay: '0.2s' }}>
              <p className="text-white/50 leading-relaxed text-sm mb-4">
              Etant en deuxieme année de licence en informatique, je suis passionné par le développement web et la création d'expériences numériques captivantes.
              </p>
              <p className="text-white/50 leading-relaxed text-sm">
              Je suis à l'aise avec une variété de technologies et de langages de programmation, et j'aime relever les défis techniques pour créer des solutions innovantes. Mon objectif est de continuer à apprendre et à évoluer en tant que développeur, tout en contribuant à des projets qui ont un impact positif sur les utilisateurs.
              </p>
            </div>

            {/* Stats */}
            {/* <div
              className="reveal grid grid-cols-3 gap-4 mb-8"
              style={{ transitionDelay: '0.3s' }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glow-border rounded-xl p-4 text-center"
                  style={{ background: 'var(--dark-800)' }}
                >
                  <p
                    className="text-2xl font-extrabold mb-1"
                    style={{ color: 'var(--coral)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/40 text-xs leading-snug whitespace-pre-line font-mono">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div> */}

            {/* Tech stack */}
            <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <h3 className="font-semibold text-sm text-white/60 mb-4 uppercase tracking-wider font-mono">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python', 'JavaScript', 'React', 'Django',
                   'MySQL', 'PostgreSQL',
                  'Tailwind CSS', 'REST APIs', 'Git', 'Linux'
                ].map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
