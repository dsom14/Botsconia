import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Zap, Clock, PhoneOff, BarChart2, Star } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-8 w-8 text-accent-cyan" />,
    title: "Responde como un humano",
    description: "Nuestra IA es 100% personalizable para que coincida con el tono y la personalidad de tu restaurante.",
    className: "col-span-2 md:col-span-2",
  },
  {
    icon: <Zap className="h-8 w-8 text-accent-cyan" />,
    title: "Confirmación automática",
    description: "Integración nativa con WhatsApp para confirmaciones y recordatorios instantáneos.",
    className: "col-span-2 md:col-span-1",
  },
  {
    icon: <Clock className="h-8 w-8 text-accent-cyan" />,
    title: "Disponible 24/7",
    description: "Tu sistema de reservas nunca duerme, capturando clientes a cualquier hora.",
    className: "col-span-2 md:col-span-1",
  },
  {
    icon: <PhoneOff className="h-8 w-8 text-accent-cyan" />,
    title: "Cero llamadas perdidas",
    description: "Capacidad ilimitada para atender todas las solicitudes de reserva simultáneamente.",
    className: "col-span-2 md:col-span-1",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-accent-cyan" />,
    title: "Optimiza ocupación",
    description: "Gestión inteligente de mesas y turnos para maximizar la capacidad de tu local.",
    className: "col-span-2 md:col-span-2",
  },
  {
    icon: <Star className="h-8 w-8 text-accent-cyan" />,
    title: "Mejor experiencia",
    description: "Ofrece a tus clientes una forma moderna y eficiente de reservar, aumentando su satisfacción.",
    className: "col-span-2 md:col-span-1",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Features = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="w-full bg-deep-black py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white lg:text-5xl">¿Por qué <span className="text-accent-cyan">Botsconia</span>?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70">Todo lo que necesitas para automatizar y optimizar tu restaurante.</p>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-16 grid grid-cols-2 grid-rows-3 gap-6 md:grid-cols-4 md:grid-rows-2"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent-cyan/50 hover:bg-accent-cyan/10 ${feature.className}`}>
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-dark-blue/50">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-accent-cyan">{feature.title}</h3>
                <p className="mt-2 text-white/80">{feature.description}</p>
              </div>
              {/* Glow effect */}
              <div className="absolute -right-1/4 -top-1/4 h-1/2 w-1/2 bg-accent-cyan/10 blur-3xl transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:bg-accent-cyan/20"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
