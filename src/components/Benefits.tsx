import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
  { value: "24/7", label: "Disponibilidad" },
  { value: "100%", label: "Personalizable" },
  { value: "0%", label: "Llamadas Perdidas" },
  { value: "∞", label: "Capacidad de Gestión" },
];

const AnimatedStat = ({ stat }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
    >
      <div className="text-6xl font-bold text-accent-cyan lg:text-7xl">
        {stat.value}
      </div>
      <p className="mt-2 text-lg text-white/80">{stat.label}</p>
    </motion.div>
  );
};

const Benefits = () => {
  return (
    <section id="benefits" className="w-full bg-deep-black py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white lg:text-5xl">Beneficios <span className="text-accent-cyan">Inmediatos</span></h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70">Resultados que notarás desde el primer día.</p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
