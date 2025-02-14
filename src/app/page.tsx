import Contact from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import Hero from "@/components/hero-section";
import InfiniteSlider from "@/components/infinite-slider";
import Navbar from "@/components/navbar/navbar";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen flex flex-col">
        <Hero />
        <InfiniteSlider />
        <ProjectsSection />
        <ExperienceSection />
        <Contact />
      </div>
    </>
  );
}
