import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Marquee from '../components/Marquee';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-[#0F0E17]" bgColor="#0F0E17" animationType="fade-in">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center h-full mt-20">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black font-display tracking-tighter leading-[0.85] mb-6 text-[#EAEAEA]">
            AUTOMATE <br />
            <span className="text-transparent [-webkit-text-stroke:2px_#00FFE7] glow-accent mix-blend-screen">THE MUNDANE</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 font-body max-w-2xl mx-auto mb-10 leading-relaxed">
            Pioneering AI automation and agentic workflow services. Build the extraordinary while we handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/book-appointment"
              className="px-10 py-4 bg-[#FF6F61] text-[#0F0E17] font-bold font-display uppercase tracking-widest text-lg hover:bg-[#EAEAEA] transition-colors duration-300 shadow-[0_0_30px_rgba(255,111,97,0.4)] hover:shadow-[0_0_40px_rgba(234,234,234,0.6)]"
            >
              Start Building
            </Link>
            <Link
              to="/services"
              className="px-10 py-4 border-2 border-[#00FFE7] text-[#00FFE7] font-bold font-display uppercase tracking-widest text-lg hover:bg-[#00FFE7] hover:text-[#0F0E17] transition-all duration-300 hover-glow-accent"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 hidden md:block w-32 h-32 border-l-2 border-b-2 border-[#FF6F61]/30"></div>
        <div className="absolute top-32 right-10 hidden md:block w-32 h-32 border-r-2 border-t-2 border-[#00FFE7]/30"></div>
      </Section>

      <Marquee text="AGENTIC WORKFLOWS • AI AUTOMATION • MACHINE LEARNING • NEURAL NETWORKS • " speed={1.5} />

      {/* Statistics Section */}
      <Section className="bg-[#1A1A2E]" bgColor="#1A1A2E" animationType="fade-up">
         <div className="max-w-7xl mx-auto px-6 w-full py-10 border-y border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
               <div>
                  <h4 className="text-[#00FFE7] font-bold uppercase tracking-widest text-sm mb-4">Workflows Automated</h4>
                  <AnimatedCounter endValue={12500} suffix="+" duration={2.5} className="text-5xl md:text-6xl font-black font-display text-[#EAEAEA] tracking-tighter" />
               </div>
               <div>
                  <h4 className="text-[#FF6F61] font-bold uppercase tracking-widest text-sm mb-4">Hours Saved</h4>
                  <AnimatedCounter endValue={2.4} suffix="M+" duration={3} className="text-5xl md:text-6xl font-black font-display text-[#EAEAEA] tracking-tighter" />
               </div>
               <div>
                  <h4 className="text-[#00FFE7] font-bold uppercase tracking-widest text-sm mb-4">Uptime Guarantee</h4>
                  <AnimatedCounter endValue={99.99} suffix="%" duration={2} className="text-5xl md:text-6xl font-black font-display text-[#EAEAEA] tracking-tighter" />
               </div>
               <div>
                  <h4 className="text-[#FF6F61] font-bold uppercase tracking-widest text-sm mb-4">Enterprise Clients</h4>
                  <AnimatedCounter endValue={150} suffix="+" duration={2.5} className="text-5xl md:text-6xl font-black font-display text-[#EAEAEA] tracking-tighter" />
               </div>
            </div>
         </div>
      </Section>

      {/* Services Overview */}
      <Section className="bg-[#0F0E17]" bgColor="#0F0E17" animationType="slide-right">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <h2 className="text-5xl md:text-7xl font-black font-display tracking-tighter text-[#EAEAEA] uppercase">
              Core <span className="text-[#FF6F61] glow-secondary">Capabilities</span>
            </h2>
            <Link to="/services" className="text-[#00FFE7] font-bold text-xl uppercase tracking-widest hover:text-[#FF6F61] transition-colors mt-6 md:mt-0 flex items-center gap-4">
              View All Services <span className="text-3xl leading-none">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Intelligent Automations', desc: 'Deploy multi-agent workflows that run your operations on autopilot.', color: '#00FFE7' },
              { title: 'Data Processing', desc: 'Transform unstructured data into actionable intelligence in real-time.', color: '#FF6F61' },
              { title: 'Custom AI Integrations', desc: 'Embed state-of-the-art LLMs seamlessly into your existing tech stack.', color: '#EAEAEA' }
            ].map((service, i) => (
              <div key={i} className="group border border-white/10 p-10 hover:border-white/30 transition-all duration-500 bg-[#0F0E17]/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-4xl font-display font-black mb-6 text-white/10 group-hover:text-white/20 transition-colors">0{i+1}</div>
                <h3 className="text-2xl font-bold font-display uppercase tracking-tight mb-4" style={{ color: service.color }}>{service.title}</h3>
                <p className="text-gray-400 font-body leading-relaxed">{service.desc}</p>
                <div className="mt-8 w-12 h-1 bg-white/20 group-hover:bg-white/60 group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials (Split Layout) */}
      <Section className="bg-[#0F0E17]" bgColor="#0F0E17" animationType="scale-up">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black font-display tracking-tighter text-[#EAEAEA] uppercase mb-8 leading-[0.9]">
              Built for <br/> <span className="text-transparent [-webkit-text-stroke:2px_#00FFE7]">Scale</span>
            </h2>
            <p className="text-xl text-gray-400 font-body leading-relaxed max-w-md">
              Do not take our word for it. See how industry leaders are leveraging our agentic architectures to dominate their markets.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { quote: "The workflow automations reduced our operational overhead by 70%. It feels like magic.", author: "Sarah Jenkins, CTO at NovaTech" },
              { quote: "Implementation was seamless, and the ROI was immediate. The Last Line lives up to its name.", author: "Marcus Thorne, VP Engineering" }
            ].map((test, i) => (
              <div key={i} className="pl-8 border-l-4 border-[#FF6F61] py-4">
                <p className="text-2xl font-display italic text-[#EAEAEA] mb-6 leading-relaxed">"{test.quote}"</p>
                <p className="text-[#00FFE7] font-bold uppercase tracking-widest text-sm">— {test.author}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Lead Capture CTA */}
      <Section className="bg-[#1A1A2E]" bgColor="#1A1A2E" animationType="fade-up">
         <div className="max-w-5xl mx-auto px-6 w-full text-center">
            <h2 className="text-6xl md:text-8xl font-black font-display tracking-tighter text-[#EAEAEA] uppercase mb-10 leading-[0.9]">
              Ready to <br/><span className="text-[#FF6F61] glow-secondary">Evolve?</span>
            </h2>
            <p className="text-xl text-gray-400 font-body leading-relaxed mb-12 max-w-2xl mx-auto">
              Join the waitlist for our next-gen agentic framework or book a consultation today.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="flex-1 bg-[#0F0E17] border border-white/20 px-8 py-5 text-lg font-display text-[#EAEAEA] focus:outline-none focus:border-[#00FFE7] transition-colors placeholder:text-gray-600 uppercase tracking-widest"
                required
              />
              <button
                type="submit"
                className="bg-[#00FFE7] text-[#0F0E17] font-bold font-display uppercase tracking-widest px-10 py-5 text-lg hover:bg-white transition-colors duration-300 hover-glow-accent"
              >
                Join Waitlist
              </button>
            </form>
         </div>
      </Section>

    </main>
  );
}
