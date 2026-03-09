import Section from '../components/Section';

export default function Services() {
  const services = [
    {
      title: 'Workflow Automation',
      desc: 'Connect disparate systems into a unified, intelligent pipeline. Eliminate manual data entry and drastically reduce operational friction.',
      features: ['API Integrations', 'RPA', 'Event-driven triggers']
    },
    {
      title: 'Agentic Frameworks',
      desc: 'Deploy autonomous AI agents that can reason, plan, and execute complex multi-step tasks across your enterprise toolstack.',
      features: ['LLM Orchestration', 'Multi-Agent Systems', 'Tool Calling']
    },
    {
      title: 'Predictive Analytics',
      desc: 'Harness the power of machine learning to forecast trends, optimize resource allocation, and detect anomalies in real-time.',
      features: ['Time-series forecasting', 'Anomaly detection', 'Data pipelines']
    }
  ];

  return (
    <main className="pt-24">
      {/* Page Header */}
      <Section className="bg-[#0F0E17] min-h-[60vh]" bgColor="#0F0E17" animationType="fade-in">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-display tracking-tighter uppercase mb-6 leading-[0.85] text-[#EAEAEA]">
            Our <span className="text-transparent [-webkit-text-stroke:2px_#00FFE7] glow-accent mix-blend-screen">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-body max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions engineered to transform your operational capacity.
          </p>
        </div>
      </Section>

      {/* Detailed Services */}
      <Section className="bg-[#1A1A2E]" bgColor="#1A1A2E" animationType="fade-up">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-white/10 pt-16">
                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="text-[#00FFE7] font-display font-black text-2xl mb-4">0{index + 1}</div>
                  <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tighter text-[#EAEAEA] mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-400 font-body leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4 text-[#EAEAEA] font-body uppercase tracking-wider text-sm font-bold">
                        <span className="w-2 h-2 bg-[#FF6F61] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Graphic Placeholder */}
                <div className={`h-[400px] border border-white/10 bg-[#0F0E17]/50 relative overflow-hidden flex items-center justify-center ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  <div className={`w-48 h-48 border-4 ${index % 2 === 0 ? 'border-[#00FFE7]' : 'border-[#FF6F61] rounded-full'} opacity-50 blur-[2px]`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Use Cases Grid */}
      <Section className="bg-[#0F0E17]" bgColor="#0F0E17" animationType="slide-right">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-5xl md:text-7xl font-black font-display tracking-tighter text-[#EAEAEA] uppercase mb-16 text-center">
            Industry <span className="text-[#FF6F61] glow-secondary">Use Cases</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { industry: 'Finance', desc: 'Automated compliance checks and fraud detection.', color: '#00FFE7' },
              { industry: 'Healthcare', desc: 'Patient record summarization and predictive diagnostics.', color: '#FF6F61' },
              { industry: 'E-commerce', desc: 'Dynamic pricing and inventory forecasting.', color: '#EAEAEA' },
              { industry: 'Logistics', desc: 'Route optimization and supply chain monitoring.', color: '#00FFE7' }
            ].map((useCase, i) => (
              <div key={i} className="border border-white/10 p-8 hover:bg-white/5 transition-colors group">
                <h3 className="text-2xl font-black font-display uppercase tracking-tight mb-4" style={{ color: useCase.color }}>
                  {useCase.industry}
                </h3>
                <p className="text-sm text-gray-400 font-body leading-relaxed">
                  {useCase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing Tiers */}
      <Section className="bg-[#1A1A2E]" bgColor="#1A1A2E" animationType="scale-up">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
           <h2 className="text-5xl md:text-7xl font-black font-display tracking-tighter text-[#EAEAEA] uppercase mb-6 leading-[0.9]">
              Transparent <br/><span className="text-transparent [-webkit-text-stroke:2px_#00FFE7]">Pricing</span>
            </h2>
            <p className="text-xl text-gray-400 font-body leading-relaxed mb-20 max-w-2xl mx-auto">
              Scalable solutions tailored to your enterprise needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* Tier 1 */}
              <div className="border border-white/20 p-10 bg-[#0F0E17]/80 hover:border-[#00FFE7] transition-all duration-300 relative">
                <h3 className="text-3xl font-black font-display uppercase tracking-tighter text-[#EAEAEA] mb-2">Pilot</h3>
                <div className="text-sm font-bold tracking-widest text-[#00FFE7] uppercase mb-6">Discovery & Mapping</div>
                <div className="text-5xl font-black font-display mb-8">$5k <span className="text-xl text-gray-500 font-body">/mo</span></div>
                <ul className="space-y-4 mb-10 text-gray-400 font-body text-sm">
                  <li className="flex items-center gap-3"><span className="text-[#00FFE7]">✓</span> 1 Core Workflow Automation</li>
                  <li className="flex items-center gap-3"><span className="text-[#00FFE7]">✓</span> Basic API Integrations</li>
                  <li className="flex items-center gap-3"><span className="text-[#00FFE7]">✓</span> Weekly Consultation</li>
                </ul>
                <button className="w-full py-4 border border-[#00FFE7] text-[#00FFE7] font-bold font-display uppercase tracking-widest text-sm hover:bg-[#00FFE7] hover:text-[#0F0E17] transition-all duration-300">
                  Select Plan
                </button>
              </div>

              {/* Tier 2 (Highlighted) */}
              <div className="border-2 border-[#FF6F61] p-10 bg-[#0F0E17] relative shadow-[0_0_30px_rgba(255,111,97,0.2)] transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-[#FF6F61] text-[#0F0E17] text-xs font-bold uppercase tracking-widest px-4 py-1">Popular</div>
                <h3 className="text-3xl font-black font-display uppercase tracking-tighter text-[#EAEAEA] mb-2">Scale</h3>
                <div className="text-sm font-bold tracking-widest text-[#FF6F61] uppercase mb-6">Agentic Orchestration</div>
                <div className="text-5xl font-black font-display mb-8">$15k <span className="text-xl text-gray-500 font-body">/mo</span></div>
                <ul className="space-y-4 mb-10 text-gray-300 font-body text-sm">
                  <li className="flex items-center gap-3"><span className="text-[#FF6F61]">✓</span> Up to 5 Agentic Workflows</li>
                  <li className="flex items-center gap-3"><span className="text-[#FF6F61]">✓</span> Custom LLM Fine-tuning</li>
                  <li className="flex items-center gap-3"><span className="text-[#FF6F61]">✓</span> Dedicated Slack Channel</li>
                  <li className="flex items-center gap-3"><span className="text-[#FF6F61]">✓</span> Predictive Analytics Dashboard</li>
                </ul>
                <button className="w-full py-4 bg-[#FF6F61] text-[#0F0E17] font-bold font-display uppercase tracking-widest text-sm hover:bg-white hover:text-[#0F0E17] transition-all duration-300">
                  Select Plan
                </button>
              </div>

              {/* Tier 3 */}
              <div className="border border-white/20 p-10 bg-[#0F0E17]/80 hover:border-[#EAEAEA] transition-all duration-300 relative">
                <h3 className="text-3xl font-black font-display uppercase tracking-tighter text-[#EAEAEA] mb-2">Enterprise</h3>
                <div className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6">Full Architecture</div>
                <div className="text-5xl font-black font-display mb-8">Custom</div>
                <ul className="space-y-4 mb-10 text-gray-400 font-body text-sm">
                  <li className="flex items-center gap-3"><span className="text-gray-300">✓</span> Unlimited Workflows</li>
                  <li className="flex items-center gap-3"><span className="text-gray-300">✓</span> On-premise Deployment</li>
                  <li className="flex items-center gap-3"><span className="text-gray-300">✓</span> 24/7 Priority Support</li>
                  <li className="flex items-center gap-3"><span className="text-gray-300">✓</span> Custom Model Training</li>
                </ul>
                <button className="w-full py-4 border border-white/50 text-[#EAEAEA] font-bold font-display uppercase tracking-widest text-sm hover:bg-white hover:text-[#0F0E17] transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
        </div>
      </Section>

    </main>
  );
}
