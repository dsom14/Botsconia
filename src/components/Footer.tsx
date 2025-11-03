import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-dark-blue py-12">
      <div className="container mx-auto max-w-4xl flex flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="flex items-center gap-4">
          <img src="/images/Logo.png" alt="Botsconia Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-white">BOTSCONIA</span>
        </div>
        <div className="flex gap-6 text-sm text-white/70">
          <a href="#" className="hover:text-accent-cyan transition-colors">Política de privacidad</a>
          <a href="#" className="hover:text-accent-cyan transition-colors">Términos de servicio</a>
          <a href="#contact" className="hover:text-accent-cyan transition-colors">Contacto</a>
        </div>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/botsconia?igsh=MW84cmV1OTI3MnhnMQ==" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent-cyan transition-colors"><Instagram /></a>
        </div>
      </div>
      <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/50">
        <p>&copy; {new Date().getFullYear()} BOTSCONIA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
