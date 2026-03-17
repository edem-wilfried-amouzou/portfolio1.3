'use client'

import { useEffect, useRef } from 'react'

const projects = [
  {
    id: 1,
    title: 'Interface de gestion d\'employés',
    category: 'Django & DTL',
    description:
      'Une application web de gestion d\'employés développée avec Django et le Django Template Language (DTL). Permet aux utilisateurs de créer, lire, mettre à jour et supprimer des enregistrements d\'employés, avec une interface utilisateur simple et réactive.',
    tags: ['Django', 'Django Template Language', 'Python', 'SQLite', 'CRUD', 'Tailwind CSS'],
    status: 'Live',
    link: '#',
    previewBg: 'from-blue-900/30 to-purple-900/20',
    icon: '🎬',
  },
  {
    id: 2,
    title: 'Gestion de restaurant',
    category: 'JAVA & JAVA SWING',
    description:
      'Une application de gestion de restaurant développée en Java avec une interface graphique Swing. Permet aux utilisateurs de gérer les réservations, les commandes, les menus et les employés, offrant une solution complète pour les opérations quotidiennes d\'un restaurant.',
    tags: ['Java', 'Java Swing', 'SQL', 'CRUD'],
    status: 'Live',
    link: '#',
    previewBg: 'from-green-900/30 to-teal-900/20',
    icon: '🧮',
  },
  {
    id: 3,
    title: 'Gestion de Patrimoine',
    category: 'Django & DTL',
    description:
      'Une application de gestion de patrimoine développée avec Django et le Django Template Language (DTL). Permet aux utilisateurs de gérer leur patrimoine de manière efficace et intuitive.',
    tags: ['Django', 'Django Template Language', 'Python', 'REST API', 'JWT', 'OAuth2', 'Tailwind CSS'],
    status: 'Live',
    link: '#',
    previewBg: 'from-orange-900/30 to-red-900/20',
    icon: '🚀',
    featured: true,
  },
]

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export default function Projects() {
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
      { threshold: 0.05 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 50%, var(--coral) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
           
            <p className="text-4xl font-extrabold">
              Mes <span className="gradient-text">Projets</span>
            </p>
          </div>
          <a
            href="https://github.com/edem-wilfried-amouzou?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn-outline flex items-center gap-2 text-xs w-fit"
          >
            <GithubIcon />
            Voir tous les projets sur GitHub
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="reveal project-card glow-border rounded-2xl overflow-hidden"
              style={{
                background: 'var(--dark-800)',
                transitionDelay: `${0.1 + i * 0.1}s`,
              }}
            >
              {/* Preview area */}
              <div
                className={`h-36 bg-gradient-to-br ${project.previewBg} flex items-center justify-center relative`}
              >
                
                <span
                  className={`absolute top-3 left-3 text-xs font-mono px-2 py-1 rounded ${
                    project.status === 'Live'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}
                >
                  ● {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p
                  className="font-mono text-xs tracking-wider uppercase mb-1"
                  style={{ color: 'var(--coral)' }}
                >
                  {project.category}
                </p>
                <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-white transition-colors"
                  >
                    <ExternalLinkIcon />
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-white transition-colors"
                  >
                    <GithubIcon />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
