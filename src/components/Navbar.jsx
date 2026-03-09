import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Resources', path: '/resources' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1A1A2E] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-display tracking-tighter">
          <span className="text-[#EAEAEA]">THE LAST</span>
          <span className="text-[#00FFE7] glow-accent"> LINE</span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-[#00FFE7] glow-accent'
                  : 'text-[#EAEAEA] hover:text-[#FF6F61]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book-appointment"
            className="px-6 py-2 border border-[#00FFE7] text-[#00FFE7] uppercase text-sm font-bold tracking-widest hover:bg-[#00FFE7] hover:text-[#0F0E17] transition-all duration-300 hover-glow-accent"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
