import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-deep-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 217, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white">
        <motion.h1 
          className="text-5xl font-bold tracking-wider md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-accent-cyan">BOTSCONIA</span> - AUTOMATÍZATE
        </motion.h1>
        
        <motion.p 
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          TODO COMIENZA CON UNA IDEA ✦
        </motion.p>

        <motion.p 
          className="mt-6 max-w-2xl text-base text-white/80 md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          La IA más completa para gestión de reservas en restaurantes
        </motion.p>

        <motion.div 
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <button className="rounded-full bg-accent-cyan px-8 py-3 font-semibold text-deep-black transition-transform duration-300 hover:scale-105">
            Comenzar Ahora
          </button>
          <button className="rounded-full border-2 border-accent-cyan px-8 py-3 font-semibold text-accent-cyan transition-all duration-300 hover:bg-accent-cyan hover:text-deep-black">
            Ver Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
