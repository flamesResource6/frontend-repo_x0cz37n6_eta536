import React, { useEffect, useMemo, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'

// Enhanced showcase with premium card styling, hover tilt, and graceful fallbacks
const SAUDI_GREEN = '#006C35'

const scenes = [
  {
    url: 'https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode',
    title: 'Fluid Geometry',
    tag: 'Interactive',
  },
  {
    url: 'https://prod.spline.design/0R5D7X7QyY4bj2Ff/scene.splinecode',
    title: 'Kinetic Orbit',
    tag: 'Realtime 3D',
  },
  {
    url: 'https://prod.spline.design/i8cJ2qvGkA7nV1Jk/scene.splinecode',
    title: 'Light & Material',
    tag: 'Design Study',
  },
]

function FallbackInner({ url, title, tag }) {
  return (
    <div className="relative h-full w-full rounded-xl overflow-hidden bg-white flex items-center justify-center">
      <div className="absolute inset-0 opacity-70" style={{
        backgroundImage:
          `radial-gradient(60% 60% at 20% 20%, rgba(0,108,53,0.08) 0%, transparent 60%),` +
          `radial-gradient(50% 50% at 80% 70%, rgba(0,108,53,0.06) 0%, transparent 55%)`,
      }} />
      <div className="relative z-10 text-center px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: SAUDI_GREEN }} />
          {tag || '3D'}
        </span>
        <h3 className="mt-3 text-base font-semibold text-gray-900">{title || '3D Scene'}</h3>
        <p className="mt-1 text-xs leading-5 text-gray-500 max-w-sm">
          Scene unavailable (403). It may be private or blocked for this domain.
        </p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm hover:text-gray-900 hover:border-gray-300"
          >
            Open original
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </a>
        )}
      </div>
    </div>
  )
}

function GradientFrame({ children }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#006C35] via-[#00a858] to-transparent opacity-30 blur-sm transition duration-500 group-hover:opacity-60" />
      <div className="relative rounded-2xl bg-white p-[1px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <div className="rounded-2xl bg-white">
          {children}
        </div>
      </div>
    </div>
  )
}

function usePrefersReducedMotion() {
  return useMemo(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])
}

function SceneCard({ url, title, tag }) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [transform, setTransform] = useState('')
  const reduceMotion = usePrefersReducedMotion()

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            obs.disconnect()
          }
        })
      },
      { rootMargin: '200px 0px', threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const onMouseMove = (e) => {
    if (reduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rx = ((y / rect.height) - 0.5) * -6 // tilt X
    const ry = ((x / rect.width) - 0.5) * 6  // tilt Y
    setTransform(`rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`)
  }
  const onLeave = () => setTransform('')

  return (
    <GradientFrame>
      <div
        ref={containerRef}
        className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border border-gray-100 bg-white group"
        onMouseMove={onMouseMove}
        onMouseLeave={onLeave}
        style={{ transform, transformStyle: 'preserve-3d', transition: 'transform 300ms ease' }}
      >
        {/* Accent blob */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-20 blur-2xl" style={{ background: `radial-gradient(circle, ${SAUDI_GREEN} 0%, transparent 60%)` }} />

        {/* Content */}
        {!isVisible ? (
          <div className="w-full h-full bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_1.6s_infinite]" />
            <style>{`@keyframes shimmer { 100% { transform: translateX(100%); } }`}</style>
          </div>
        ) : hasError ? (
          <FallbackInner url={url} title={title} tag={tag} />
        ) : (
          <Spline
            scene={url}
            onLoad={() => { /* loaded */ }}
            onError={(e) => {
              console.warn('Spline failed to load:', url, e)
              setHasError(true)
            }}
            style={{ width: '100%', height: '100%' }}
          />
        )}

        {/* Bottom glass info bar */}
        <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-xl border border-white/50 bg-white/60 px-3 py-2 backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: SAUDI_GREEN }} />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-gray-900">{title}</div>
              <div className="text-[11px] text-gray-600">{tag}</div>
            </div>
          </div>
          <div className="pointer-events-auto">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-md bg-[#006C35] px-2.5 py-1.5 text-xs font-semibold text-white shadow hover:brightness-110 active:translate-y-px"
            >
              Interact
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </a>
          </div>
        </div>

        {/* Shine effect */}
        <div className="pointer-events-none absolute -inset-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.5) 30%, transparent 40%)' }} />
      </div>
    </GradientFrame>
  )
}

export default function SceneShowcase() {
  return (
    <section className="relative bg-white" id="scenes">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">3D Showcase</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">Polished, interactive Spline scenes with motion, material, and light explorations.</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenes.map((s, i) => (
            <SceneCard key={i} url={s.url} title={s.title} tag={s.tag} />
          ))}
        </div>
      </div>
    </section>
  )
}
