import Contact from "@/components/sections/contact-section";
// import ExperienceSection from "@/components/sections/experience-section";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero-section";
import TechSection from "@/components/sections/tech-section";
import Navbar from "@/components/navbar";
import { ProjectsSection } from "@/components/sections/projects-section";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex flex-col">
        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] bg-repeat opacity-[0.45] dark:opacity-[1] z-10" />
          
          {/* Left Purple Gradient */}
          <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-r from-accent to-accent/50" />
                       
        </div>

        {/* Main Content */}
        <div className="relative flex-1 flex flex-col">
          <Hero />
          <TechSection />
          <ProjectsSection />
          {/* <ExperienceSection /> */}
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
