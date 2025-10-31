import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mic, Settings, CalendarDays, Computer } from 'lucide-react';

const steps = [
  {
    icon: <Mic className="h-8 w-8 text-accent-red" />,
    step: 1,
    title: "Configuramos la voz",
    description: "Elegimos el tono, acento y estilo que mejor se adapte a tu marca para una experiencia auditiva 100% personalizada.",
  },
  {
    icon: <Settings className="h-8 w-8 text-accent-red" />,
    step: 2,
    title: "Personalizamos las reglas",
    description: "Integramos tus horarios, políticas de reserva, menús y cualquier otra particularidad de tu negocio.",
  },
  {
    icon: <CalendarDays className="h-8 w-8 text-accent-red" />,
    step: 3,
    title: "Gestiona las reservas",
    description: "La IA maneja el calendario en tiempo real, llenando tu agenda de forma automática e inteligente.",
  },
  {
    icon: <Computer className="h-8 w-8 text-accent-red" />,
    step: 4,
    title: "Tú controlas todo",
    description: "Accede a un dashboard simple y potente desde cualquier dispositivo para supervisar y gestionar todo el proceso.",
  },
];

const HowItWorks = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = (isLeft: boolean) => ({
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  });

  return (
    <section id="how" className="w-full bg-dark-blue py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white lg:text-5xl">¿Cómo <span className="text-accent-red">Funciona</span>?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70">En 4 simples pasos, transformamos la gestión de tu restaurante.</p>
        </motion.div>

        <div className="relative mt-20">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white/20"></div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="flex flex-col gap-12 md:gap-20"
          >
            {steps.map((step, index) => {
              const isRight = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants(!isRight)}
                  className="relative flex flex-col md:flex-row items-center gap-4 md:gap-0"
                >
                  <div className={`w-full md:w-5/12 ${isRight ? 'md:pr-16 md:text-right md:ml-auto' : 'md:pl-16 md:mr-auto'}`}>
                    <div className="inline-block w-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-accent-red/10">
                      <div className={`mb-3 flex items-center gap-4 ${isRight ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent-red/10 text-accent-red">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-white/70">{step.description}</p>
                    </div>
                  </div>

                  <div className="relative md:absolute md:left-1/2 z-10 h-16 w-16 md:-translate-x-1/2 flex items-center justify-center rounded-full border-4 border-accent-red bg-dark-blue shrink-0">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
