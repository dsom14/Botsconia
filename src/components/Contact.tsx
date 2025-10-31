import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  return (
    <section id="contact" className="w-full bg-deep-black py-20 lg:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            ¡Contáctanos para <span className="text-accent-red">agendar una reunión</span>!
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-white/90 mb-2">
                Nombre <span className="text-accent-red">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-lg transition-all duration-300 focus:border-accent-cyan focus:bg-white/10 focus:outline-none"
                placeholder="Nombre"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-white/90 mb-2">
                Apellido
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-lg transition-all duration-300 focus:border-accent-cyan focus:bg-white/10 focus:outline-none"
                placeholder="Apellido"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
              Correo electrónico <span className="text-accent-red">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-lg transition-all duration-300 focus:border-accent-cyan focus:bg-white/10 focus:outline-none"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-2">
              Asunto <span className="text-accent-red">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-lg transition-all duration-300 focus:border-accent-cyan focus:bg-white/10 focus:outline-none"
              placeholder="Asunto del mensaje"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
              Mensaje <span className="text-accent-red">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-lg transition-all duration-300 focus:border-accent-cyan focus:bg-white/10 focus:outline-none resize-none"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-red to-accent-cyan px-8 py-4 font-semibold text-white shadow-lg shadow-accent-red/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent-cyan/30"
          >
            <Send className="h-5 w-5" />
            Enviar
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
