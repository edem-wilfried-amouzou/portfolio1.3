import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// export default function Home() {
//   return (
//     <main className="noise">
//       <Navbar />
//       <Hero />
//       <About />
//       <Projects />
//       <Contact />
//       <Footer />
//     </main>
//   )
// }

'use client'; // Indispensable pour useEffect et window

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = "https://portfolio-6872.onrender.com";
  }, []);

  return (
    <main className="noise">
      <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
        <p>Redirection vers le nouveau portfolio en cours...</p>
        <a href="https://portfolio-6872.onrender.com">Cliquez ici si vous n'êtes pas redirigé.</a>
      </div>
    </main>
  );
}
