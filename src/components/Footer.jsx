import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0F0E17] text-[#EAEAEA] border-t border-white/5 py-12 md:py-20 relative overflow-hidden">
      {/* Decorative Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-[#FF6F61] to-transparent opacity-50 blur-[2px]"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-bold font-display tracking-tighter mb-6 block">
            <span className="text-[#EAEAEA]">THE LAST</span>
            <span className="text-[#00FFE7] glow-accent"> LINE</span>
          </Link>
          <p className="max-w-md text-sm text-gray-400 font-body leading-relaxed mb-8">
            Pioneering AI automation and agentic workflow services. We automate the mundane so you can build the extraordinary.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <a key={social} href="#" className="text-xs uppercase tracking-widest text-[#FF6F61] hover:text-[#00FFE7] transition-colors duration-300">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6 text-[#EAEAEA]">Navigation</h4>
          <ul className="space-y-4">
            {['Services', 'Resources', 'About'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-[#00FFE7] hover:pl-2 transition-all duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6 text-[#EAEAEA]">Connect</h4>
          <ul className="space-y-4">
            <li>
              <Link to="/book-appointment" className="text-sm text-[#00FFE7] font-bold hover:text-[#FF6F61] transition-colors duration-300">
                Book Appointment &rarr;
              </Link>
            </li>
            <li>
              <a href="mailto:hello@thelastline.ai" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                hello@thelastline.ai
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} The Last Line. All rights reserved.</p>
        <div className="text-xs text-gray-500 space-x-4">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
