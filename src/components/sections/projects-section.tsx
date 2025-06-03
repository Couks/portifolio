"use client";

import { useRef } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  EffectCube,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import ebenerTKD from "@/assets/ebenertkd.png";
import whatsYourFinances from "@/assets/whats-your-finances.png";
import WebAppSecurity from "@/assets/web-app-security.png";
import placeholder from "@/assets/placeholder.png";
import AnimatedButton from "../animated-button";
import SectionLayout from "../section-layout";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

const projects = [
  {
    title: "Ebener Taekwondo",
    description:
      "A modern website for Ebener Taekwondo Academy, designed to enhance online presence and improve search engine visibility. Features include class schedules, testimonials and contact information.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "SwiperJS",
      "ShadcnUI",
    ],
    links: [{ link: "https://ebenertkd.com.br/", text: "Visit Website" }],
    image: ebenerTKD,
  },
  {
    title: "What's Your Finances",
    description:
      "A comprehensive mobile application designed to help you manage your finances effortlessly. Track your expenses, set budgets, and gain insights into your financial health.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "PostgreSQL",
      "Axios",
      "NativeWind",
      ,
    ],
    links: [
      {
        link: "https://whats-your-finances-web-page.vercel.app/",
        text: "Visit Website",
      },
    ],
    image: whatsYourFinances,
  },
  {
    title: "Authentication API",
    description:
      "API focused on secure user authentication, featuring account creation, login, SQL injection prevention, two-factor authentication via SMS, and encrypted passwords.",
    technologies: ["NestJS", "Express", "PostgreSQL", "JWT", "Swagger"],
    links: [
      { link: "https://frontend-av2-4seg.vercel.app/", text: "Application" },
      { link: "https://backend-av2-4seg.onrender.com/api/docs", text: "Docs" },
    ],
    image: WebAppSecurity,
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionLayout
      id="projects"
      title="My Projects"
      subtitle="Take a look at some of my recent projects. Each one is a unique piece of work that I am proud to share."
    >
      <div
        ref={sectionRef}
        className="flex flex-col justify-center items-center"
        aria-live="polite"
      >
        <div className="w-full mx-auto">
          <Swiper
            modules={[
              Navigation,
              Pagination,
              A11y,
              EffectCube,
              Keyboard,
              Autoplay,
            ]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              type: "custom",
            }}
            keyboard={{ enabled: true }}
            effect={shouldReduceMotion ? "slide" : "slide"}
            speed={shouldReduceMotion ? 0 : 800}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            className="h-full w-full projects-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <Card className="w-full max-w-8xl h-auto overflow-hidden rounded-2xl border border-border shadow-lg bg-card/95 backdrop-blur-sm">
                  <div className="md:grid md:grid-cols-2 h-full">
                    {/* Project Image */}
                    <div className="relative h-80 md:h-full">
                      <Image
                        src={project.image || placeholder}
                        alt={`Image of the project ${project.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        className="object-cover object-left-top"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[70vh]">
                      <div>
                        <h3 className="font-bold text-2xl md:text-3xl text-foreground mb-4">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-md font-semibold text-foreground mb-3">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-muted text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Project Links */}
                      <div className="mt-auto">
                        {project.links && (
                          <div className="flex flex-wrap gap-4">
                            {project.links.map((link, linkIndex) => (
                              <AnimatedButton
                                key={linkIndex}
                                href={link.link}
                                icon={<ExternalLink />}
                                label={link.text}
                                variant="apple"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Projects Button */}
        <div className="mt-6 text-center">
          <AnimatedButton
            href="https://github.com/Couks"
            icon={<ExternalLink />}
            label="View All Projects on GitHub"
            variant="apple"
          />
        </div>
      </div>
    </SectionLayout>
  );
}
