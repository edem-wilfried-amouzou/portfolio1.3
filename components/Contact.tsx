'use client'

import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)      // pour le formulaire
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        'service_m3g5cur',
        'template_g3mgup4',
        formRef.current!,
        'NDyRTBUaF5at89lnm'
      )
      setStatus('sent')
    } catch (err: any) {
      setStatus('error')
      console.error(err)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(255,107,74,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-2"
            style={{ color: 'var(--coral)' }}
          >
            Entrer en contact avec moi
          </p>
          <h2 className="text-4xl font-extrabold mb-4">
            Vous avez un projet?{' '}
            <span className="gradient-text">Discutons</span>
          </h2>
          <p className="text-white/40 text-sm max-w-lg mx-auto">

            Je suis toujours ouvert à de nouvelles opportunités et à des projets intéressants. N'hésitez pas à m'envoyer un message et je vous répondrai dans les 24 heures.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left — contact info */}
          <div className="md:col-span-2">
            <div className="reveal flex flex-col gap-4" style={{ transitionDelay: '0.1s' }}>
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'edemwilfriedamouzou@gmail.com',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                  label: 'Téléphone',
                  value: '+228 70 91 40 05',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  label: 'Localisation',
                  value: 'Lomé, Togo',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glow-border rounded-xl p-4 flex items-center gap-4"
                  style={{ background: 'var(--dark-800)' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,107,74,0.12)', color: 'var(--coral)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-mono mb-0.5">{item.label}</p>
                    <p className="text-sm text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Socials */}
              <div
                className="glow-border rounded-xl p-4"
                style={{ background: 'var(--dark-800)' }}
              >
                <p className="text-xs text-white/40 font-mono mb-3">Suivez-moi</p>
                <div className="flex items-center gap-3">
                  {[
                    { label: 'GitHub', href: '#' },
                    { label: 'LinkedIn', href: '#' },
                    { label: 'Twitter', href: '#' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="text-xs px-3 py-1.5 rounded font-mono text-white/60 hover:text-white transition-colors"
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-3">
            <div
              className="reveal glow-border rounded-2xl p-6"
              style={{ background: 'var(--dark-800)', transitionDelay: '0.2s' }}
            >
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl"
                    style={{ background: 'rgba(255,107,74,0.15)' }}
                  >
                    ✓
                  </div>
                  <h3 className="font-bold text-xl mb-2">Message envoyé!</h3>
                  <p className="text-white/40 text-sm">
                    Merci de m'avoir contacté. Je vous répondrai dans les 24 heures.
                  </p>
                </div>
                
              ) : status === 'error' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-red-500/15 flex items-center justify-center mb-4 text-2xl text-red-400">
                      ✗
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-white">Échec de l'envoi</h3>
                    <p className="text-white/40 text-sm mb-6">
                      Une erreur s'est produite. Veuillez réessayer.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="bg-coral hover:bg-coral-dark text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-all duration-200"
                    >
                      Réessayer
                    </button>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col gap-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-white/40 mb-2 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        name='name'
                        required
                        placeholder="Votre nom"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none focus:ring-1 transition-all"
                        style={{
                          background: 'var(--dark-700)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(255,107,74,0.5)'
                          e.target.style.boxShadow = '0 0 0 3px rgba(255,107,74,0.08)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                          e.target.style.boxShadow = 'none'
                        }}
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-white/40 mb-2 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        name='email'
                        required
                        placeholder="Votre email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all"
                        style={{
                          background: 'var(--dark-700)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(255,107,74,0.5)'
                          e.target.style.boxShadow = '0 0 0 3px rgba(255,107,74,0.08)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                          e.target.style.boxShadow = 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-white/40 mb-2 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      name='subject'
                      placeholder="Motif du contact"
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all"
                      style={{
                        background: 'var(--dark-700)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(255,107,74,0.5)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(255,107,74,0.08)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-white/40 mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      name='message'
                      placeholder="Votre message..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none resize-none transition-all"
                      style={{
                        background: 'var(--dark-700)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(255,107,74,0.5)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(255,107,74,0.08)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-coral w-full flex items-center justify-center gap-2 py-3"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
