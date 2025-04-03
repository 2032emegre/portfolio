import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Reel from "@/components/Reel";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <Project />
      <Reel />
      <About />
      <Contact />
    </main>
  );
}