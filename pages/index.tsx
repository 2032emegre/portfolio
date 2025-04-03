
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Reel from "@/components/Reel";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />

      <section id="project">
        <Project />
      </section>
    
      <section id="reel">
        <Reel />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}