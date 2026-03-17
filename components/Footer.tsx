export default function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="font-mono text-xs text-white/30 hover:text-white/50 transition-colors">
          © {new Date().getFullYear()} Edem Wilfried AMOUZOU - Tout droit réservés
        </p>
        
      </div>
    </footer>
  )
}
