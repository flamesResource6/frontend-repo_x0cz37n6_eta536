import React from 'react'

const points = [
  {
    title: 'Tailored AI, Not Generic Integrations',
    desc: 'Many companies rush to “add AI” without a clear strategy. We take a different approach. We deeply analyze your business model, workflow, and challenges to train AI systems designed specifically for you.'
  },
  {
    title: 'A Team of Expert AI Engineers',
    desc: 'Our engineers are ready to build specialized solutions that solve your unique problems. We treat every project as a custom engineering challenge—not a one-size-fits-all integration.'
  },
  {
    title: 'End-to-End Delivery: From Model to Deployment',
    desc: 'AI doesn’t end with training a model. We handle the full lifecycle, including deployment, optimization, monitoring, and user-friendly interfaces. The final output matters—and we ensure it is delivered in a way that is usable, efficient, and impactful for your team.'
  }
]

function Differentiators() {
  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">What Makes Mudrik Different</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentiators
