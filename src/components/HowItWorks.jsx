import { MessageSquare, Brain, FileText } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: MessageSquare,
      title: "We Query AI Platforms",
      description: "We ask ChatGPT, Claude, and Perplexity dozens of relevant questions about your industry and use cases."
    },
    {
      number: "2",
      icon: Brain,
      title: "AI Analysis",
      description: "Our system analyzes every response to detect when and how your brand is mentioned compared to competitors."
    },
    {
      number: "3",
      icon: FileText,
      title: "Get Your Report",
      description: "Receive a detailed report showing your visibility, positioning, and competitive landscape across AI platforms."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get comprehensive AI visibility insights in three simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={step.number} 
                className="relative group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-transparent hover:border-citara-purple/20 group-hover:scale-105">
                  {/* Number Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-citara-gradient text-white font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-citara-purple/10 to-citara-pink/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-citara-purple" strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-citara-purple transition-colors">
                    {step.title}
                  </h3>
                  
                  {/* Step Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 z-10">
                    <svg className="w-8 h-8 text-citara-purple animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
