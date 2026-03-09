import Section from '../components/Section';

export default function Resources() {
  const blogPosts = [
    { title: 'The Rise of Multi-Agent Systems in Enterprise Software', category: 'Architecture', date: 'Oct 12, 2023', color: '#00FFE7' },
    { title: 'Fine-Tuning LLMs for Deterministic Outputs', category: 'Machine Learning', date: 'Sep 28, 2023', color: '#FF6F61' },
    { title: 'Navigating the Security Implications of Autonomous Agents', category: 'Security', date: 'Sep 15, 2023', color: '#EAEAEA' }
  ];

  return (
    <main className="pt-24">
      {/* Page Header */}
      <Section className="bg-[#0F0E17] min-h-[50vh]" bgColor="#0F0E17" animationType="fade-in">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-display tracking-tighter uppercase mb-6 leading-[0.85] text-[#EAEAEA]">
            Intel & <br/><span className="text-[#FF6F61] glow-secondary">Resources</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-body max-w-2xl leading-relaxed">
            Deep dives, technical whitepapers, and operational frameworks for the AI-native enterprise.
          </p>
        </div>
      </Section>

      {/* Blog Section */}
      <Section className="bg-[#1A1A2E]" bgColor="#1A1A2E" animationType="slide-right">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
            <h2 className="text-4xl md:text-5xl font-black font-display tracking-tighter text-[#EAEAEA] uppercase">Latest <span className="text-[#00FFE7]">Dispatches</span></h2>
            <button className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-[#00FFE7] transition-colors mt-4 md:mt-0">View All Posts &rarr;</button>
          </div>

          <div className="space-y-6">
            {blogPosts.map((post, i) => (
              <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between p-8 border border-white/5 bg-[#0F0E17]/40 hover:bg-[#0F0E17] transition-colors duration-300">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 border" style={{ borderColor: post.color, color: post.color }}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 font-body uppercase tracking-wider">{post.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-[#EAEAEA] group-hover:text-[#00FFE7] transition-colors">
                    {post.title}
                  </h3>
                </div>
                <div className="mt-6 md:mt-0 md:ml-8">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#00FFE7] group-hover:border-[#00FFE7] group-hover:text-[#0F0E17] transition-all duration-300 transform group-hover:scale-110">
                    <span className="text-xl">&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Whitepapers & Video Section (Split) */}
      <Section className="bg-[#0F0E17]" bgColor="#0F0E17" animationType="fade-up">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Whitepapers */}
          <div>
             <h2 className="text-4xl md:text-5xl font-black font-display tracking-tighter text-[#EAEAEA] uppercase mb-12">
               Technical <span className="text-[#FF6F61] glow-secondary">Whitepapers</span>
             </h2>
             <div className="space-y-6">
                {[
                  { title: "Agentic Frameworks v2", desc: "A comprehensive guide to scaling multi-agent systems.", pages: "48 Pages" },
                  { title: "Security in the Age of Autonomy", desc: "Best practices for securing LLM-powered applications.", pages: "32 Pages" }
                ].map((wp, i) => (
                  <div key={i} className="group relative border border-white/10 p-8 hover:bg-white/5 transition-all duration-300">
                     <div className="absolute top-4 right-4 text-xs font-bold uppercase tracking-widest text-[#FF6F61]">{wp.pages}</div>
                     <div className="w-10 h-10 bg-[#FF6F61]/10 rounded-full flex items-center justify-center mb-6 border border-[#FF6F61]/30 text-[#FF6F61]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                     </div>
                     <h3 className="text-2xl font-black font-display tracking-tight text-[#EAEAEA] mb-3">{wp.title}</h3>
                     <p className="text-sm text-gray-400 font-body mb-6">{wp.desc}</p>
                     <button className="text-[#EAEAEA] text-sm font-bold uppercase tracking-widest hover:text-[#00FFE7] transition-colors border-b border-[#00FFE7] pb-1 inline-flex items-center gap-2">
                        Download PDF <span className="text-lg">&rarr;</span>
                     </button>
                  </div>
                ))}
             </div>
          </div>

          {/* Video Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black font-display tracking-tighter text-[#EAEAEA] uppercase mb-12">
               Video <span className="text-[#00FFE7] glow-accent">Transmissions</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: 'Keynote: The Automation Event Horizon', duration: '45:20', thumb: 'border-[#00FFE7]' },
                { title: 'Tutorial: Building Custom RAG Pipelines', duration: '18:15', thumb: 'border-[#FF6F61]' }
              ].map((vid, i) => (
                <div key={i} className="flex gap-6 group cursor-pointer">
                  {/* Thumbnail Placeholder */}
                  <div className={`w-32 md:w-48 aspect-video bg-[#1A1A2E] border border-white/10 relative overflow-hidden flex-shrink-0 flex items-center justify-center group-hover:border-[#00FFE7] transition-colors duration-300`}>
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="w-10 h-10 rounded-full bg-[#EAEAEA] flex items-center justify-center pl-1">
                      <svg className="w-4 h-4 text-[#0F0E17]" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"></path></svg>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl font-bold font-display tracking-tight text-[#EAEAEA] mb-2 group-hover:text-[#00FFE7] transition-colors">{vid.title}</h3>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-500">{vid.duration}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 border border-white/10 bg-gradient-to-br from-[#1A1A2E] to-[#0F0E17] text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
               <h3 className="text-2xl font-black font-display tracking-tighter uppercase text-[#EAEAEA] mb-4">Subscribe for Updates</h3>
               <p className="text-sm text-gray-400 font-body mb-6">Receive our latest technical transmissions directly to your inbox.</p>
               <form className="flex gap-4" onSubmit={e => e.preventDefault()}>
                 <input type="email" placeholder="EMAIL ADDRESS" className="flex-1 bg-black/50 border border-white/20 px-4 py-3 text-sm font-display text-white focus:outline-none focus:border-[#00FFE7]" />
                 <button className="bg-[#00FFE7] text-[#0F0E17] font-bold uppercase tracking-widest px-6 py-3 text-sm hover:bg-white transition-colors">Join</button>
               </form>
            </div>
          </div>

        </div>
      </Section>

    </main>
  );
}
