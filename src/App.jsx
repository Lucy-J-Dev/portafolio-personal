import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollUpButton from "./components/ScrollUpButton";
import Technologies from "./components/Technologies";

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
      <ScrollUpButton />
    </>
  );
}

export default App;
