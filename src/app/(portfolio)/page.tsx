import About from "@/components/Portfolio/About";
import Contact from "@/components/Portfolio/Contact";
import Experience from "@/components/Portfolio/Experience";
import Intro from "@/components/Portfolio/Intro";
import Projects from "@/components/Portfolio/Projects";
import SectionDivider from "@/components/Portfolio/SectionDivider";
import Skills from "@/components/Portfolio/Skills";

export default function Portfolio() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
