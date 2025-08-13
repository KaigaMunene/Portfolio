import Navbar from './components/NavBar';
import HeroSection from './sections/Hero';
import About from './sections/About';
import Resume from './sections/Resume';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <div>
      <Navbar />

      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <About />
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <Resume />
      </ScrollReveal>

      <ScrollReveal delay={0.6}>
        <Skills />
      </ScrollReveal>

      <ScrollReveal delay={0.8}>
        <Projects />
      </ScrollReveal>

      <ScrollReveal delay={1.0}>
        <Contact />
      </ScrollReveal>

      <Footer />
    </div>
  );
}

export default App;
