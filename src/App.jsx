import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Specializations from './components/Specializations'
import Differentiators from './components/Differentiators'
import Process from './components/Process'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero with Spline animation */}
      <Hero />

      {/* Content sections */}
      <About />
      <Specializations />
      <Differentiators />
      <Process />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/70 text-sm">© {new Date().getFullYear()} Mudrik. All rights reserved.</div>
          <div className="text-white/50 text-sm">Empowering Saudi businesses with next-generation AI.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
