import { Link } from 'react-router-dom';
import Section from '../components/Section';

export default function About() {
  const team = [
    { name: 'Dr. Evelyn Thorne', role: 'Chief AI Architect', image: 'bg-[#0F0E17] border-[#00FFE7]' },
    { name: 'Marcus Vance', role: 'Head of Engineering', image: 'bg-[#1A1A2E] border-[#FF6F61]' },
    { name: 'Sarah Jenkins', role: 'Director of Applied ML', image: 'bg-[#0F0E17] border-[#EAEAEA]' },
    { name: 'David Chen', role: 'Lead Automation Strategist', image: 'bg-[#1A1A2E] border-[#00FFE7]' }
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <Section className="bg-[#0F0E17] min-h-[70vh]" bgColor="#0F0E17" animationType="fade-in">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-16 relative">
          <div className="md:w-1/2 z-10">
            <h1 className="text-6xl md:text-8xl font-black font-display tracking-tighter uppercase mb-6 leading-[0.85] text-[#EAEAEA]">
              Beyond <br /> <span className="text-[#00FFE7] glow-accent">Human</span> <br /> Limits
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-body leading-relaxed mb-8 max-w-lg">
              We are a collective of ex-FAANG engineers and ML researchers dedicated to pushing the boundaries of what is possible with autonomous systems.
            </p>
            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-[#FF6F61]">
              <span className="w-12 h-px bg-[#FF6F61]"></span>
              Est. 2021
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F0E17] to-transparent z-10"></div>
            <div className="w-full aspect-square md:aspect-auto md:h-[600px] border border-white/10 relative overflow-hidden flex items-center justify-center bg-[#1A1A2E]">
              <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
              {/* Abstract Brand Graphic */}
              <div className="w-64 h-64 border-2 border-[#00FFE7] rounded-full absolute mix-blend-screen opacity-50 blur-[1px]"></div>
              <div className="w-48 h-48 border-2 border-[#FF6F61] absolute transform translate-x-8 translate-y-8 mix-blend-screen opacity-50 blur-[1px]"></div>
              <div className="text-9xl font-black font-display text-white/5 absolute font-outline-2 select-none tracking-tighter">THE LAST LINE</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy/Mission */}
      <Section className="bg-[#1A1A2E]" bgColor="#1A1A2E" animationType="slide-right">
        <div className="max-w-4xl mx-auto px-6 w-full text-center">
          <h2 className="text-3xl md:text-5xl font-black font-display tracking-tighter text-[#EAEAEA] uppercase mb-10 leading-tight">
            "Our mission is to architect systems that <span className="text-[#FF6F61]">outperform</span> and <span className="text-[#00FFE7]">outlast</span> conventional paradigms."
          </h2>
          <p className="text-lg text-gray-400 font-body leading-relaxed max-w-2xl mx-auto">
            We do not believe in superficial AI wrappers. We build foundational architectures designed to integrate deeply into your operational core, executing complex reasoning tasks with deterministic precision.
          </p>
        </div>
      </Section>

      {/* Team Bios */}
      <Section className="bg-[#0F0E17]" bgColor="#0F0E17" animationType="fade-up">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="text-5xl md:text-7xl font-black font-display tracking-tighter text-[#EAEAEA] uppercase">
              The <span className="text-transparent [-webkit-text-stroke:2px_#00FFE7]">Architects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group cursor-pointer">
                {/* Image Placeholder */}
                <div className={`w-full aspect-[3/4] mb-6 border ${member.image} relative overflow-hidden transition-all duration-500 group-hover:border-white`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#00FFE7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/50">
                    <span className="text-white font-bold uppercase tracking-widest text-sm border border-white px-4 py-2 bg-black/80">View Dossier</span>
                  </div>
                </div>

                <h3 className="text-2xl font-black font-display tracking-tight text-[#EAEAEA] mb-1 group-hover:text-[#00FFE7] transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Information (Terminal Style) */}
      <Section className="bg-[#1A1A2E]" bgColor="#1A1A2E" animationType="scale-up">
        <div className="max-w-4xl mx-auto px-6 w-full">
          <div className="bg-[#0F0E17] border border-white/20 font-mono shadow-[0_0_30px_rgba(0,255,231,0.1)] relative overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs text-gray-500">connection_established.sh</div>
            </div>

            {/* Terminal Body */}
            <div className="p-8 text-sm md:text-base text-[#00FFE7] leading-relaxed">
              <p className="mb-4 text-gray-400">$ ping global_hq</p>
              <p className="mb-2"><span className="text-white">STATUS:</span> Active</p>
              <p className="mb-2"><span className="text-white">COORDINATES:</span> 37.7749° N, 122.4194° W</p>
              <p className="mb-6"><span className="text-white">LOCALE:</span> San Francisco, CA</p>

              <p className="mb-4 text-gray-400">$ cat communication_channels.json</p>
              <div className="pl-4 border-l border-white/10 mb-6">
                <p className="mb-2">"primary": <a href="mailto:hello@thelastline.ai" className="text-white hover:underline">"hello@thelastline.ai"</a>,</p>
                <p className="mb-2">"support": <a href="mailto:ops@thelastline.ai" className="text-white hover:underline">"ops@thelastline.ai"</a>,</p>
                <p className="mb-2">"phone": <span className="text-white">"+1 (800) 555-0199"</span></p>
              </div>

              <p className="text-gray-400 mb-2">$ initialize_transmission <span className="animate-pulse">_</span></p>
              <Link to="/book-appointment" className="inline-block mt-4 px-6 py-2 bg-[#00FFE7]/10 border border-[#00FFE7] text-[#00FFE7] hover:bg-[#00FFE7] hover:text-[#0F0E17] transition-colors uppercase tracking-widest font-bold font-sans">
                Open Channel
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
