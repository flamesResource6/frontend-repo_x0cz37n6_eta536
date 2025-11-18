import React from 'react'

function Contact() {
  return (
    <section id="contact" className="relative bg-white">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="rounded-2xl border border-gray-200 p-8 bg-white">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Let’s build with AI</h2>
          <p className="mt-2 text-gray-600">Tell us about your challenge and we’ll come back with a tailored plan.</p>
          <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="col-span-1 rounded-lg border-gray-300 focus:ring-[#006C35] focus:border-[#006C35]" placeholder="Name" />
            <input className="col-span-1 rounded-lg border-gray-300 focus:ring-[#006C35] focus:border-[#006C35]" placeholder="Company" />
            <input className="sm:col-span-2 rounded-lg border-gray-300 focus:ring-[#006C35] focus:border-[#006C35]" placeholder="Email" />
            <textarea className="sm:col-span-2 rounded-lg border-gray-300 focus:ring-[#006C35] focus:border-[#006C35]" placeholder="Tell us about your project" rows={5} />
            <div className="sm:col-span-2">
              <button type="button" className="inline-flex items-center rounded-lg bg-[#006C35] text-white px-5 py-3 font-semibold hover:opacity-90">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
