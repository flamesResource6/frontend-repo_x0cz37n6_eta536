import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#specializations', label: 'Specializations' },
    { href: '#differentiators', label: 'Why Us' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[#006C35]" />
          <span className="font-semibold text-gray-900">Mudrik</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-[#006C35] transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-lg bg-[#006C35] text-white px-4 py-2 text-sm font-semibold hover:opacity-90 transition-colors">
            Get Started
          </a>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200 text-gray-700" aria-label="Toggle Menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 grid gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-[#006C35]" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-[#006C35] text-white px-4 py-2 text-sm font-semibold" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
