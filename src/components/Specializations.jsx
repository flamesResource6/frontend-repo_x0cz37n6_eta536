import React from 'react'

const items = [
  {
    title: 'LLMs & Intelligent Chatbots',
    desc: 'We build advanced language models and conversational agents that automate support, enhance internal communication, and deliver instant, accurate responses. Whether you need a customer-facing chatbot or an internal knowledge assistant, we tailor each model to your business.',
  },
  {
    title: 'Computer Vision Solutions',
    desc: 'From quality inspection to object detection and video analytics, our computer vision systems unlock new levels of insight and automation. We develop and train models that understand visual data with precision and reliability.',
  },
  {
    title: 'Process Automation & AI Agents',
    desc: 'We create end-to-end automation systems that streamline operations, eliminate repetitive tasks, and free your team to focus on what matters most. Our AI-powered agents integrate seamlessly into your ecosystem to optimize efficiency across departments.',
  }
]

function Specializations() {
  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">Our Specializations</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#006C35]/40 transition">
              <div className="h-10 w-10 rounded-lg bg-[#006C35]/15 border border-[#006C35]/20" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specializations
