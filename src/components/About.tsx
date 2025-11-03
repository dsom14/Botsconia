import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Bot } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="w-full bg-dark-blue py-20 lg:py-32">
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className="container mx-auto grid grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16"
      >
        {/* Left Column: Team Cards */}
        <div className="flex flex-col gap-8">
          <motion.div variants={cardVariants} className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-6">
              <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full border-2 border-accent-cyan bg-dark-blue">
                <Cpu size={48} className="text-accent-cyan"/>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">David Noori</h3>
                <p className="text-accent-cyan">Especialista en IA</p>
              </div>
            </div>
            <p className="mt-4 text-white/80 text-justify">Cofundador de Botsconia, obtuvo matrícula de honor en Bachillerato y actualmente cursa Estudios Clásicos y Románicos en la Universidad de Oviedo, complementando su formación con estudios en Inteligencia Artificial y Automatización de Procesos. Posee nivel C1 en inglés y se caracteriza por su rigurosidad, innovación y compromiso con la excelencia.</p>
          </motion.div>
          <motion.div variants={cardVariants} className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-6">
              <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full border-2 border-accent-red bg-dark-blue">
                <Bot size={48} className="text-accent-red"/>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Adrián Iglesias</h3>
                <p className="text-accent-red">Desarrollador Principal</p>
              </div>
            </div>
            <p className="mt-4 text-white/80 text-justify">Cofundador de Botsconia, titulado en Microsistemas Informáticos y en Red, actualmente cursa un Grado Superior en Administración de Sistemas Informáticos en Red. Ha realizado formación en la empresa Saint-Gobain y amplía su perfil con estudios en Inteligencia Artificial aplicada a los negocios. Se distingue por su solidez técnica, enfoque resolutivo y visión creativa.</p>
          </motion.div>
        </div>

        {/* Right Column: Story */}
        <motion.div variants={cardVariants} className="flex flex-col">
          <div className="mb-8 grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg border-2 border-accent-cyan/30 p-1 shadow-lg shadow-accent-cyan/10">
              <img src="/images/Nombre.webp" alt="Nuestra Historia 1" className="aspect-square w-full rounded-md object-cover"/>
            </div>
            <div className="overflow-hidden rounded-lg border-2 border-accent-red/30 p-1 shadow-lg shadow-accent-red/10">
              <img src="/images/Bot2.webp" alt="Nuestra Historia 2" className="aspect-square w-full rounded-md object-cover"/>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white lg:text-5xl">Nuestra <span className="text-accent-cyan">Historia</span></h2>
          <p className="mt-6 text-lg text-white/80 text-justify">
            Nacimos de una visión compartida: eliminar las ineficiencias en la gestión de restaurantes. David y Adrián, combinando su pasión por la IA y el desarrollo de software de vanguardia, crearon BOTSCONIA para ofrecer una solución que no solo automatiza, sino que perfecciona la interacción con el cliente.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="rounded-full border border-accent-cyan/50 bg-accent-cyan/10 px-4 py-2 text-accent-cyan">Eficiencia</span>
            <span className="rounded-full border border-accent-cyan/50 bg-accent-cyan/10 px-4 py-2 text-accent-cyan">Perfeccionismo</span>
            <span className="rounded-full border border-accent-cyan/50 bg-accent-cyan/10 px-4 py-2 text-accent-cyan">Innovación</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
