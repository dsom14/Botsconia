
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
            <a key={link.title} href={link.href} className="text-white hover:text-accent-cyan transition-colors duration-300">
              {link.title}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <button className="rounded-full bg-accent-cyan px-6 py-2 font-semibold text-deep-black transition-transform duration-300 hover:scale-105">
            Automatízate Ahora
          </button>
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
            <button className="mt-4 w-full rounded-full bg-accent-cyan px-6 py-3 font-semibold text-deep-black transition-transform duration-300 hover:scale-105">
              Automatízate Ahora
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
