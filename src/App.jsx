import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div id="top" className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <Contact />
      <footer className="border-t border-white/10 py-10 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} SEO Expert • Privacy • Terms
      </footer>
    </div>
  )
}

export default App
