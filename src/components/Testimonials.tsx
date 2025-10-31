import { motion } from 'framer-motion';
import PersonIcon from './PersonIcon';

const testimonials = [
  {
    quote: "La implementación de Botsconia ha sido un antes y un después. Hemos eliminado las llamadas perdidas y nuestra ocupación ha mejorado un 20%.",
    name: "Lucía Fernández",
    title: "Gerente, El Asador Moderno",
  },
  {
    quote: "El proceso de personalización fue increíble. La IA realmente habla como uno de nosotros. Nuestros clientes están encantados.",
    name: "Carlos Jiménez",
    title: "Dueño, Sabor a Mar",
  },
  {
    quote: "Estábamos escépticos al principio, pero los resultados hablan por sí solos. Es la herramienta más potente que hemos adoptado.",
    name: "Elena Rivas",
    title: "Jefa de Sala, Fuego & Brasa",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-dark-blue py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white lg:text-5xl">Amado por los <span className="text-accent-cyan">mejores restaurantes</span></h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70">Ya estamos trabajando con múltiples locales para llevarlos al siguiente nivel.</p>
        </motion.div>

        <div className="mt-16">
          <div className="flex snap-x snap-mandatory scroll-pl-6 gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-track-dark-blue scrollbar-thumb-accent-cyan/50">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full flex-shrink-0 snap-start rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg sm:w-4/5 md:w-3/5 lg:w-2/5"
              >
                <p className="text-lg italic text-white">"{testimonial.quote}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-accent-cyan flex items-center justify-center">
                    <PersonIcon />
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-white/70">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
