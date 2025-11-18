import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Specializations from './components/Specializations'
import Differentiators from './components/Differentiators'
import Process from './components/Process'
import SceneShowcase from './components/SceneShowcase'
import Contact from './components/Contact'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const sectionsRef = useRef([])

  useEffect(() => {
    const sections = sectionsRef.current

    sections.forEach((el) => {
      if (!el) return
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <div ref={(el) => (sectionsRef.current[0] = el)}>
        <Hero />
      </div>

      <div ref={(el) => (sectionsRef.current[1] = el)} id="about">
        <About />
      </div>

      <div ref={(el) => (sectionsRef.current[2] = el)} id="specializations">
        <Specializations />
      </div>

      <div ref={(el) => (sectionsRef.current[3] = el)} id="differentiators">
        <Differentiators />
      </div>

      <div ref={(el) => (sectionsRef.current[4] = el)} id="process">
        <Process />
      </div>

      <div ref={(el) => (sectionsRef.current[5] = el)}>
        <SceneShowcase />
      </div>

      <div ref={(el) => (sectionsRef.current[6] = el)} id="contact">
        <Contact />
      </div>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-600 text-sm">© {new Date().getFullYear()} Mudrik. All rights reserved.</div>
          <div className="text-gray-500 text-sm">Empowering Saudi businesses with next-generation AI.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
