export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "We Query AI Platforms",
      description: "We ask ChatGPT, Claude, and Perplexity dozens of relevant questions about your industry and use cases."
    },
    {
      number: "2",
      title: "AI Analysis",
      description: "Our system analyzes every response to detect when and how your brand is mentioned compared to competitors."
    },
    {
      number: "3",
      title: "Get Your Report",
      description: "Receive a detailed report showing your visibility, positioning, and competitive landscape across AI platforms."
    }
  ]

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get comprehensive AI visibility insights in three simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Step Card */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-citara-gradient text-white font-bold text-xl mb-6">
                  {step.number}
                </div>
                
                {/* Step Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow (desktop only) */}
              {step.number !== "3" && (
                <div className="hidden md:block absolute top-1/4 -right-4 text-citara-purple text-3xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
