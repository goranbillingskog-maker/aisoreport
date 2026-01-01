export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">aisoreport.com</h3>
            <p className="text-gray-400 leading-relaxed">
              Free AI visibility reports to help you understand your brand's presence across AI search engines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Learn More</h4>
            <ul className="space-y-2">
              <li>
                <a href="/resources" className="text-gray-400 hover:text-white transition-colors">
                  GEO Resources
                </a>
              </li>
              <li>
                <a href="https://citara.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Citara.ai Platform
                </a>
              </li>
            </ul>
          </div>

          {/* Powered By */}
          <div>
            <h4 className="font-semibold mb-4">Powered By</h4>
            <a 
              href="https://citara.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="bg-citara-gradient text-white font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Citara.ai
              </div>
            </a>
            <p className="text-gray-400 text-sm mt-3">
              Weekly AI visibility monitoring for B2B SaaS companies
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} aisoreport.com. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="mailto:hello@citara.ai" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
            <a href="https://citara.ai/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
