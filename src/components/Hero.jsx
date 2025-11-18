import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Accent radial glow behind the Spline */}
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute left-1/2 top-40 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(168,85,247,0.10) 35%, rgba(59,130,246,0.08) 60%, transparent 70%)'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 sm:pt-28 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400" />
              Saudi-Based AI Innovation
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Mudrik — Saudi-Based AI Innovation for Every Sector
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              We believe that artificial intelligence can elevate any industry. At Mudrik, we transform businesses by designing intelligent systems that enhance efficiency, accuracy, and decision-making. Whether you're just starting your AI journey or ready to scale, our team of AI engineers delivers tailored solutions built specifically for your business needs.
            </p>
            <p className="mt-4 text-slate-200 font-medium">
              Empowering Saudi businesses with next-generation AI.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition">
                About Us
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Spline Scene */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />

            {/* Soft gradient overlay to blend with page (non-blocking) */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/20" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
