import React, { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'

// Public Spline scenes must be accessible from your domain. If a scene returns 403,
// we gracefully fall back to a placeholder so the page never crashes.
const scenes = [
  'https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode',
  'https://prod.spline.design/0R5D7X7QyY4bj2Ff/scene.splinecode',
  'https://prod.spline.design/i8cJ2qvGkA7nV1Jk/scene.splinecode',
]

function FallbackCard({ url }) {
  return (
    <div className="relative h-56 sm:h-64 lg:h-72 rounded-xl overflow-hidden border border-gray-200 bg-white flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,108,53,0.08),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(0,108,53,0.06),transparent_55%)]" />
      <div className="relative z-10 text-center px-6">
        <p className="text-sm font-medium text-gray-700">3D scene unavailable</p>
        <p className="mt-1 text-xs text-gray-500">The scene host returned 403 (Forbidden). The file may be private or blocked for this domain.</p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 text-xs font-semibold text-[#006C35] hover:underline"
          >
            Open scene URL
          </a>
        )}
      </div>
    </div>
  )
}

class CardErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error) {
    console.warn('Spline component crashed in card:', error)
  }
  render() {
    if (this.state.hasError) {
      return <FallbackCard url={this.props.url} />
    }
    return this.props.children
  }
}

function SceneCard({ url }) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasError, setHasError] = useState(false)

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

  return (
    <div ref={containerRef} className="relative h-56 sm:h-64 lg:h-72 rounded-xl overflow-hidden border border-gray-200 bg-white">
      {!isVisible ? (
        <div className="w-full h-full animate-pulse bg-gray-50" />
      ) : hasError ? (
        <FallbackCard url={url} />
      ) : (
        <CardErrorBoundary url={url}>
          <Spline
            scene={url}
            onLoad={(_) => {
              // Loaded successfully
            }}
            onError={(e) => {
              console.warn('Spline failed to load:', url, e)
              setHasError(true)
            }}
            style={{ width: '100%', height: '100%' }}
          />
        </CardErrorBoundary>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
    </div>
  )
}

export default function SceneShowcase() {
  return (
    <section className="relative bg-white" id="scenes">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">3D Showcase</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">Explore a selection of interactive 3D objects that bring our brand to life.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenes.map((s, i) => (
            <SceneCard key={i} url={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
