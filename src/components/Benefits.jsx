import { Target, Search, BarChart3, Rocket } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Target,
      title: "Understand Your AI Visibility",
      description: "See exactly how often your brand appears when AI engines answer questions in your category."
    },
    {
      icon: Search,
      title: "Competitive Intelligence",
      description: "Discover which competitors are dominating AI-generated recommendations and why."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Get concrete data on your positioning across ChatGPT, Claude, and Perplexity."
    },
    {
      icon: Rocket,
      title: "Identify Opportunities",
      description: "Find gaps in your AI presence and learn what actions could improve your visibility."
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Get Your AI Visibility Report?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The search landscape has fundamentally changed. Are you showing up in AI-generated answers?
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="flex gap-4 p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-citara-purple to-citara-pink flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-citara-purple transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Box */}
        <div 
          className="bg-gradient-to-r from-citara-purple to-citara-pink rounded-2xl p-8 md:p-12 text-center shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          style={{
            animation: 'fadeInUp 0.6s ease-out 0.4s both'
          }}
        >
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
            className="inline-block bg-white text-citara-purple font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Learn About Citara.ai
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
