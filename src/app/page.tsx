import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import FeaturedProject from "@/sections/FeaturedProject";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <Projects />
    </main>
  );
}
