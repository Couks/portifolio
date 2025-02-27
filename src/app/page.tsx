import Contact from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import Footer from "@/components/footer";
import Hero from "@/components/hero-section";
import Navbar from "@/components/navbar/navbar";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen flex flex-col">
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
