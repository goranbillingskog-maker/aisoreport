import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Hero() {
  const [formData, setFormData] = useState({
    brandName: '',
    websiteUrl: '',
    email: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateUrl = (url) => {
    try {
      // Add https:// if no protocol
      const urlToTest = url.startsWith('http') ? url : `https://${url}`
      new URL(urlToTest)
      return true
    } catch {
      return false
    }
  }

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', message: '' })

    // Validation
    if (!formData.brandName.trim()) {
      setStatus({ type: 'error', message: 'Please enter your brand name' })
      return
    }

    if (!formData.websiteUrl.trim()) {
      setStatus({ type: 'error', message: 'Please enter your website URL' })
      return
    }

    if (!validateUrl(formData.websiteUrl)) {
      setStatus({ type: 'error', message: 'Please enter a valid website URL (e.g., example.com)' })
      return
    }

    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' })
      return
    }

    setIsSubmitting(true)

    try {
      // Ensure URL has protocol
      const websiteUrl = formData.websiteUrl.startsWith('http') 
        ? formData.websiteUrl 
        : `https://${formData.websiteUrl}`

      const { error } = await supabase
        .from('free_report_requests')
        .insert([
          {
            brand_name: formData.brandName.trim(),
            website_url: websiteUrl,
            email: formData.email.trim().toLowerCase()
          }
        ])

      if (error) throw error

      setStatus({ 
        type: 'success', 
        message: 'Success! Check your email for your free AI visibility report.' 
      })
      setFormData({ brandName: '', websiteUrl: '', email: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again or contact support.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-citara-purple/5 via-transparent to-citara-pink/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center max-w-3xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get Your Free AI Visibility Report
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-12">
            See how often your brand appears in ChatGPT, Claude, and Perplexity responses.
            Discover your AI search visibility in minutes.
          </p>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Brand Name */}
              <div>
                <input
                  type="text"
                  placeholder="Your Brand Name"
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citara-purple focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                  disabled={isSubmitting}
                />
              </div>

              {/* Website URL */}
              <div>
                <input
                  type="text"
                  placeholder="Your Website (e.g., example.com)"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citara-purple focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citara-purple focus:border-transparent outline-none text-gray-900 placeholder-gray-500"
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-citara-gradient text-white font-semibold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {isSubmitting ? 'Sending...' : 'Get My Free Report'}
              </button>

              {/* Status Message */}
              {status.message && (
                <div className={`p-4 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {status.message}
                </div>
              )}
            </form>

            {/* Privacy Note */}
            <p className="text-sm text-gray-500 mt-6">
              We'll send you a one-time report. No spam, unsubscribe anytime.
            </p>
          </div>

          {/* Social Proof / Trust Badge */}
          <p className="text-gray-600 mt-8">
            Join growth-stage B2B companies tracking their AI visibility
          </p>
        </div>
      </div>
    </div>
  )
}
