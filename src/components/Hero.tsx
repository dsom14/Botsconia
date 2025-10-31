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
      <div className="relative z-10 flex flex-col items-center text-center text-white lg:flex-row lg:gap-16 lg:text-left max-w-7xl mx-auto px-6">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
        <motion.h1
          className="text-5xl font-bold tracking-wider md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-accent-cyan">BOTSCONIA</span>
          <br />
          AUTOMATÍZATE
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
        </div>

        {/* Bot Image */}
        <motion.div
          className="flex-1 flex items-center justify-center mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="/images/Bot1.webp"
            alt="Bot"
            className="h-auto w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
