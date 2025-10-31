import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-deep-black">
      <Header />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

export default App
