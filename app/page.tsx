import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-4 pt-30">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
