import React from 'react'

function About() {
  return (
    <section id="about" className="relative bg-white">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">About Us</h2>
          <p className="mt-5 text-gray-700 leading-relaxed">
            Mudrik is a Saudi-based AI innovation company dedicated to helping organizations harness the full potential of artificial intelligence. Our philosophy is simple: AI is not just a tool—it's a strategic advantage. We work closely with each client to understand their operations, challenges, and goals, then develop AI systems that integrate seamlessly into their workflows.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            With a highly skilled team of machine learning, computer vision, and automation engineers, we don’t just plug AI into your infrastructure. Instead, we craft customized models and intelligent systems built to perform exceptionally for your unique use case.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
