'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
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
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background glows */}
      <div className="hero-glow" style={{ top: '-150px', right: '-100px' }} />
      <div
        className="hero-glow"
        style={{
          bottom: '-200px',
          left: '-100px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255,107,74,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div
              className="reveal inline-flex items-center gap-2 mb-6"
              style={{ transitionDelay: '0.1s' }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: 'var(--coral)' }}
              />
              <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                Disponible pour de nouveaux projets
              </span>
            </div>

            {/* Greeting */}
            <p
              className="reveal font-mono text-sm mb-2 tracking-wider"
              style={{ color: 'var(--coral)', transitionDelay: '0.2s' }}
            >
              Salut,
            </p>

            <h1
              className="reveal text-5xl md:text-3xl font-extrabold leading-tight mb-2"
              style={{ transitionDelay: '0.3s' }}
            >
              Je suis Edem Wilfried AMOUZOU
            </h1>

            <h2
              className="reveal text-3xl md:text-4xl font-bold mb-6 text-white/70"
              style={{ transitionDelay: '0.4s' }}
            >
              <span className="gradient-text">Développeur</span> Web
            </h2>

            <p
              className="reveal text-white/50 leading-relaxed max-w-md mb-8 text-sm"
              style={{ transitionDelay: '0.5s' }}
            >
              Passionné par la création d'expériences numériques élégantes et performantes, je transforme les idées en réalité grâce au code.
            </p>

            {/* Tags */}
            <div
              className="reveal flex flex-wrap gap-2 mb-8"
              style={{ transitionDelay: '0.55s' }}
            >
              {['Python', 'JavaScript', 'Tailwind CSS', 'DaisyUI'].map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="reveal flex flex-wrap gap-3"
              style={{ transitionDelay: '0.6s' }}
            >
              <a href="#projects" className="btn-coral">
                Mes Projets
              </a>
              <a href="#contact" className="btn-outline">
                Me Contacter
              </a>
            </div>
          </div>

          {/* Right — Avatar */}
          <div className="flex justify-center md:justify-end">
            <div
              className="reveal relative"
              style={{ transitionDelay: '0.4s', animation: 'float 6s ease-in-out infinite' }}
            >
              {/* Outer ring */}
              <div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center"
                style={{
                  background:
                    'conic-gradient(from 0deg, var(--coral) 0%, transparent 30%, var(--coral) 60%, transparent 90%)',
                  padding: '3px',
                  animation: 'spin 6s linear infinite',
                }}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center"
                  style={{ background: 'var(--dark-900)' }}
                >
                  {/* Inner avatar placeholder */}
                  <div
                    className="w-[90%] h-[90%] rounded-full flex items-center justify-center text-white/20 text-5xl font-bold"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--dark-700) 0%, var(--dark-800) 100%)',
                      border: '1px solid rgba(255,255,255,0.05)',
                          animation: 'spin 6s linear infinite reverse', 
                    }}
                  >
                    <Image src="/hero.png" alt="Edem Wilfried AMOUZOU" width={320} height={320} className="rounded-full object-cover w-full h-full" />                
                  </div>
                </div>
              </div>

              {/* Floating badge — experience */}
              {/* <div
                className="absolute -bottom-4 -left-4 glow-border rounded-lg px-4 py-3"
                style={{ background: 'var(--dark-700)' }}
              >
                <p className="font-mono text-xs text-white/40 mb-0.5">Experience</p>
                <p className="font-bold text-white text-sm">
                  3+ <span style={{ color: 'var(--coral)' }}>Years</span>
                </p>
              </div> */}

              {/* Floating badge — projects */}
              {/* <div
                className="absolute -top-2 -right-4 glow-border rounded-lg px-4 py-3"
                style={{ background: 'var(--dark-700)' }}
              >
                <p className="font-mono text-xs text-white/40 mb-0.5">Projects</p>
                <p className="font-bold text-white text-sm">
                  120+ <span style={{ color: 'var(--coral)' }}>Done</span>
                </p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a href="#about" className="flex flex-col items-center gap-2 group">
            <span className="text-white/30 text-xs font-mono tracking-widest uppercase group-hover:text-white/60 transition-colors">
              Scroll
            </span>
            <div
              className="w-0.5 h-8 rounded-full"
              style={{
                background: 'linear-gradient(to bottom, var(--coral), transparent)',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
