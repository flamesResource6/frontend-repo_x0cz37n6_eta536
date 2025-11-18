import React from 'react'
import Spline from '@splinetool/react-spline'

// A strip that showcases multiple 3D scenes. You can add more scene URLs as needed.
const scenes = [
  'https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode',
  'https://prod.spline.design/0R5D7X7QyY4bj2Ff/scene.splinecode',
  'https://prod.spline.design/i8cJ2qvGkA7nV1Jk/scene.splinecode',
]

function SceneCard({ url }) {
  return (
    <div className="relative h-56 sm:h-64 lg:h-72 rounded-xl overflow-hidden border border-gray-200 bg-white">
      <Spline scene={url} style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
    </div>
  )
}

function SceneShowcase() {
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

export default SceneShowcase
