// Inline SVG Icons
const TargetIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const BarChartIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <line x1="12" x2="12" y1="20" y2="10" />
    <line x1="18" x2="18" y1="20" y2="4" />
    <line x1="6" x2="6" y1="20" y2="16" />
  </svg>
);

const RocketIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

export default function Benefits() {
  const benefits = [
    {
      icon: TargetIcon,
      title: "Understand Your AI Visibility",
      description: "See exactly how often your brand appears when AI engines answer questions in your category."
    },
    {
      icon: SearchIcon,
      title: "Competitive Intelligence",
      description: "Discover which competitors are dominating AI-generated recommendations and why."
    },
    {
      icon: BarChartIcon,
      title: "Data-Driven Insights",
      description: "Get concrete data on your positioning across ChatGPT, Claude, and Perplexity."
    },
    {
      icon: RocketIcon,
      title: "Identify Opportunities",
      description: "Find gaps in your AI presence and learn what actions could improve your visibility."
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Get Your AI Visibility Report?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The search landscape has fundamentally changed. Are you showing up in AI-generated answers?
          </p>
        </div>

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
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-citara-purple to-citara-pink flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                </div>
                
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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
