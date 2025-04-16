import Contact from "@/components/sections/contact-section";
import ExperienceSection from "@/components/sections/experience-section";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero-section";
import TechSection from "@/components/sections/tech-section";
import Navbar from "@/components/navbar";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen flex flex-col text-black dark:text-white bg-grid-pattern bg-[length:150px_150px] bg-repeat">
        <Hero />
        <TechSection />

        <ProjectsSection />
        <ExperienceSection />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
