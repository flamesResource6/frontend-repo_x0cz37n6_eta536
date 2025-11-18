import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-40 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-30" style={{
          background: 'radial-gradient(circle, rgba(0,108,53,0.12) 0%, rgba(0,108,53,0.10) 35%, rgba(0,108,53,0.08) 60%, transparent 70%)'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#006C35]/20 bg-[#006C35]/5 px-3 py-1 text-xs text-[#006C35] font-medium">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#006C35]" />
              Saudi-Based AI Innovation
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Mudrik — AI built for Saudi businesses
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-700 leading-relaxed">
              We build intelligent systems that enhance efficiency, accuracy, and decision-making. Whether you're starting your AI journey or ready to scale, our engineers deliver solutions tailored to your needs.
            </p>
            <p className="mt-4 text-gray-900 font-medium">
              Empowering Saudi businesses with next-generation AI.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className="inline-flex items-center justify-center rounded-lg bg-[#006C35] text-white px-5 py-3 text-sm font-semibold hover:opacity-90 transition">
                About Us
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Spline Scene */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl overflow-hidden border border-gray-200 bg-white">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />

            {/* Soft gradient overlay to blend with page (non-blocking) */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
