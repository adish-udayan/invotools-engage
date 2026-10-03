"use client"

import { useState } from "react"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  // Animation disabled - all text animations removed from landing page

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div>
            <h2 className="font-serif text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#122A45] mb-8">
              Choose one customer journey to improve first.
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Evaluate the portal against a real customer task, your existing workflow, and an agreed measure of
              success.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Bring one customer task you want to improve, the systems involved, and your success measure. We will
              discuss how your branded customer portal could support that task, demonstrate available capabilities,
              and identify the integration, operating, and measurement requirements.
            </p>
            <button className="rounded-full bg-[#122A45] text-white text-sm font-medium px-8 py-3 hover:bg-[#1a3a5c] transition-colors">
              Explore the Customer Journey
            </button>
          </div>

          {/* Right form */}
          <div className="bg-white border border-slate-900/8 rounded-3xl p-8 lg:p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#122A45]"
                  placeholder=""
                  required
                />
              </div>

              {/* Work email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                  Work email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#122A45]"
                  placeholder=""
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-900 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#122A45]"
                  placeholder=""
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#122A45] resize-none"
                  placeholder=""
                  required
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#122A45] text-white text-sm font-medium py-3 hover:bg-[#1a3a5c] transition-colors mt-8"
              >
                Book a Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
