import { useState, useEffect } from 'react';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-bg');
      if (heroSection) {
        const heroHeight = heroSection.clientHeight;
        const scrollPosition = window.scrollY;
        
        // Mostrar navbar cuando se pasa la sección hero
        if (scrollPosition > heroHeight - 100) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-fuchsia-900/50 transition-all duration-300 ${
        showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-fuchsia-100">Tamara</h3>
        
        <ul className="flex gap-8 text-fuchsia-200">
          <li>
            <button
              onClick={() => handleNavClick('hero')}
              className="hover:text-fuchsia-100 transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-fuchsia-100 transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('projects')}
              className="hover:text-fuchsia-100 transition-colors"
            >
              Projects
            </button>
          </li>
      
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
