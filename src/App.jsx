import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Technologies />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
