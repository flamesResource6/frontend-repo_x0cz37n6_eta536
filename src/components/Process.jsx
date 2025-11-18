import React from 'react'

const steps = [
  { n: 1, t: 'Business Understanding', d: 'We begin by learning your operations, pain points, and goals.' },
  { n: 2, t: 'Custom AI Design', d: 'Our engineers design the right algorithmic approach based on your needs.' },
  { n: 3, t: 'Model Development & Training', d: 'We build and train models using your real-world data for maximum accuracy.' },
  { n: 4, t: 'Deployment & Integration', d: 'We deploy the AI solution into your environment—securely, efficiently, and reliably.' },
  { n: 5, t: 'User Experience & Final Output', d: 'We ensure the final interface is intuitive, actionable, and easy for your team to use.' },
  { n: 6, t: 'Continuous Improvement', d: 'We monitor performance and optimize the solution as your business grows.' },
]

function Process() {
  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">Our Process</h2>

        <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="text-xs text-gray-600">Step {s.n}</div>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">{s.t}</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
