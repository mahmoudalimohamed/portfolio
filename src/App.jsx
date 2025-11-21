import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import OtherProjects from "./components/OtherProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout>
      <Hero />
      <section id="about" className="min-h-screen py-20 md:py-20">
        <About />
      </section>
      <section id="experience" className="min-h-screen py-20 md:py-20">
        <Experience />
      </section>
      <section id="projects" className="min-h-screen py-20 md:py-20">
        <Projects />
      </section>
      <section id="other-projects" className="min-h-screen py-20 md:py-20">
        <OtherProjects />
      </section>
      <section
        id="contact"
        className="min-h-screen py-20 md:py-20 justify-center"
      >
        <Contact />
      </section>
      <Footer />
    </Layout>
  );
}

export default App;
