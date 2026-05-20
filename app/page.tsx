import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import GalleryStrip from "@/components/GalleryStrip";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <GalleryStrip />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
