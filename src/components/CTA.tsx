import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-deep-black py-20 lg:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-deep-black to-transparent"></div>
        <div className="absolute -left-1/4 top-0 h-full w-1/2 animate-pulse bg-gradient-to-r from-accent-cyan/20 via-accent-red/20 to-transparent blur-3xl"></div>
        <div className="absolute -right-1/4 bottom-0 h-full w-1/2 animate-pulse bg-gradient-to-l from-accent-red/20 via-accent-cyan/20 to-transparent blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white lg:text-6xl"
        >
          Todo comienza con una idea
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
        >
          El futuro de la gestión de restaurantes ya está aquí. No dejes que tu negocio se quede atrás. Es hora de automatizar, optimizar y crecer.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6, type: 'spring', stiffness: 200 }}
          className="mt-10 inline-block rounded-full bg-gradient-to-r from-accent-cyan to-accent-red px-10 py-4 text-lg font-bold text-white shadow-lg shadow-accent-cyan/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-red/30"
        >
          Contáctanos
        </motion.a>
      </div>
    </section>
  );
};

export default CTA;
