export default function Benefits() {
  const benefits = [
    {
      icon: "🎯",
      title: "Understand Your AI Visibility",
      description: "See exactly how often your brand appears when AI engines answer questions in your category."
    },
    {
      icon: "🔍",
      title: "Competitive Intelligence",
      description: "Discover which competitors are dominating AI-generated recommendations and why."
    },
    {
      icon: "📊",
      title: "Data-Driven Insights",
      description: "Get concrete data on your positioning across ChatGPT, Claude, and Perplexity."
    },
    {
      icon: "🚀",
      title: "Identify Opportunities",
      description: "Find gaps in your AI presence and learn what actions could improve your visibility."
    }
  ]

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Get Your AI Visibility Report?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The search landscape has fundamentally changed. Are you showing up in AI-generated answers?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 text-4xl">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-citara-purple to-citara-pink rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want Ongoing Monitoring?
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            This free report is a one-time snapshot. For weekly AI visibility tracking, competitive benchmarking, and trend analysis, check out Citara.
          </p>
          <a
            href="https://citara.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-citara-purple font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Learn About Citara.ai
          </a>
        </div>
      </div>
    </div>
  )
}
