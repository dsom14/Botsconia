
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const navLinks = [
  { title: "Inicio", href: "#" },
  { title: "¿Quiénes Somos?", href: "#about" },
  { title: "Servicios", href: "#services" },
  { title: "Cómo Funciona", href: "#how" },
  { title: "Contacto", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/5 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <img src="/images/Logo.png" alt="Botsconia Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-white">BOTSCONIA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.title} href={link.href} className="text-base text-white hover:text-accent-cyan transition-colors duration-300">
              {link.title}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-accent-red to-accent-cyan text-white shadow-lg shadow-accent-red/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-cyan/30">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <a href="#contact" className="rounded-full bg-gradient-to-r from-accent-red to-accent-cyan px-6 py-2 text-base font-semibold text-white shadow-lg shadow-accent-red/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-cyan/30">
            Contáctanos
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-blue/90 backdrop-blur-md">
          <div className="flex flex-col items-center gap-6 px-6 py-8">
            {navLinks.map((link) => (
              <a key={link.title} href={link.href} className="text-xl text-white hover:text-accent-cyan transition-colors duration-300" onClick={() => setIsOpen(false)}>
                {link.title}
              </a>
            ))}
            <div className="mt-4 w-full flex items-center gap-3">
              <button className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-accent-red to-accent-cyan text-white shadow-lg shadow-accent-red/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-cyan/30">
                <ShoppingCart className="h-6 w-6" />
              </button>
              <a href="#contact" className="flex-1 text-center rounded-full bg-gradient-to-r from-accent-red to-accent-cyan px-6 py-3 font-semibold text-white shadow-lg shadow-accent-red/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-cyan/30" onClick={() => setIsOpen(false)}>
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
