import { useState } from 'react';
import { supabase } from '../lib/supabase';

// Inline SVG Sparkles Icon
const SparklesIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

export default function Hero() {
  const [formData, setFormData] = useState({
    brandName: '',
    websiteUrl: '',
    email: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateUrl = (url) => {
    try {
      const urlToTest = url.startsWith('http') ? url : `https://${url}`;
      new URL(urlToTest);
      return true;
    } catch {
      return false;
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!formData.brandName.trim()) {
      setStatus({ type: 'error', message: 'Please enter your brand name' });
      return;
    }

    if (!formData.websiteUrl.trim()) {
      setStatus({ type: 'error', message: 'Please enter your website URL' });
      return;
    }

    if (!validateUrl(formData.websiteUrl)) {
      setStatus({ type: 'error', message: 'Please enter a valid website URL (e.g., example.com)' });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }

    setIsSubmitting(true);

    try {
      const websiteUrl = formData.websiteUrl.startsWith('http') 
        ? formData.websiteUrl 
        : `https://${formData.websiteUrl}`;

      const { error } = await supabase
        .from('free_report_requests')
        .insert([
          {
            brand_name: formData.brandName.trim(),
            website_url: websiteUrl,
            email: formData.email.trim().toLowerCase()
          }
        ]);

      if (error) throw error;

      setStatus({ 
        type: 'success', 
        message: 'Success! Check your email for your free AI visibility report.' 
      });
      setFormData({ brandName: '', websiteUrl: '', email: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again or contact support.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-citara-purple/5 via-transparent to-citara-pink/5 animate-gradient" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-citara-purple/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-citara-pink/10 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-citara-gradient text-white rounded-full text-sm font-semibold mb-6 animate-fade-in shadow-lg">
            <SparklesIcon />
            Free AI Visibility Analysis
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            Get Your Free AI Visibility Report
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-12 animate-slide-up-delayed">
            See how often your brand appears in ChatGPT, Claude, and Perplexity responses.
            Discover your AI search visibility in minutes.
          </p>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 animate-fade-in-up backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="group">
                <input
                  type="text"
                  placeholder="Your Brand Name"
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-citara-purple focus:border-transparent outline-none text-gray-900 placeholder-gray-500 transition-all duration-300 hover:border-citara-purple/50"
                  disabled={isSubmitting}
                />
              </div>

              <div className="group">
                <input
                  type="text"
                  placeholder="Your Website (e.g., example.com)"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-citara-purple focus:border-transparent outline-none text-gray-900 placeholder-gray-500 transition-all duration-300 hover:border-citara-purple/50"
                  disabled={isSubmitting}
                />
              </div>

              <div className="group">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-citara-purple focus:border-transparent outline-none text-gray-900 placeholder-gray-500 transition-all duration-300 hover:border-citara-purple/50"
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-citara-gradient text-white font-semibold py-4 px-8 rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Get My Free Report'
                )}
              </button>

              {status.message && (
                <div className={`p-4 rounded-xl animate-slide-down ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-800 border-2 border-green-200' 
                    : 'bg-red-50 text-red-800 border-2 border-red-200'
                }`}>
                  {status.message}
                </div>
              )}
            </form>

            <p className="text-sm text-gray-500 mt-6">
              We'll send you a one-time report. No spam, unsubscribe anytime.
            </p>
          </div>

          <p className="text-gray-600 mt-8 animate-fade-in-delayed">
            Join growth-stage B2B companies tracking their AI visibility
          </p>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gradient { animation: gradient 8s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: floatDelayed 8s ease-in-out infinite; }
        .animate-fade-in { animation: fadeInUp 0.6s ease-out; }
        .animate-slide-up { animation: slideUp 0.6s ease-out; }
        .animate-slide-up-delayed { animation: slideUp 0.6s ease-out 0.1s both; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out 0.2s both; }
        .animate-fade-in-delayed { animation: fadeInUp 0.6s ease-out 0.3s both; }
        .animate-slide-down { animation: slideDown 0.3s ease-out; }
      `}</style>
    </div>
  );
}
