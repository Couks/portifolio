"use client";

import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  Autoplay,
  EffectCards,
} from "swiper/modules";
import { cn } from "@/lib/utils";
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
import "swiper/css/effect-cards";

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
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: shouldReduceMotion ? 0.2 : 0.8,
      },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  return (
    <SectionLayout
      id="projects"
      title="My Projects"
      subtitle="Take a look at some of my recent projects. Each one is a unique piece of work that I am proud to share."
    >
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col justify-center items-center"
        aria-live="polite"
      >
        <motion.div 
          variants={cardVariants}
          animate={shouldReduceMotion ? {} : floatingAnimation}
          className="w-full mx-auto"
        >
          <Swiper
            modules={[
              Navigation,
              Pagination,
              A11y,
              EffectCards,
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
            effect={shouldReduceMotion ? "slide" : "cards"}
            speed={shouldReduceMotion ? 0 : 1200}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
         
            loop={true}
            className="h-full w-full projects-swiper"
            onSlideChange={(swiper) => setActiveProject(swiper.realIndex)}
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                  transition={{ 
                    duration: shouldReduceMotion ? 0.2 : 0.6,
                    type: "spring",
                    stiffness: 200,
                    damping: 25
                  }}
                  onMouseEnter={() => setActiveProject(index)}
                  onMouseLeave={() => setActiveProject(null)}
                  whileHover={shouldReduceMotion ? {} : {
                    scale: 1.02,
                    rotateX: 2,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className={cn(
                    "w-full max-w-8xl h-auto overflow-hidden rounded-2xl border shadow-lg transition-all duration-500",
                    "bg-card/95 backdrop-blur-sm border-border",
                    activeProject === index ? "ring-2 ring-primary shadow-2xl" : ""
                  )}>
                    <div className="md:grid md:grid-cols-2 h-full">
                      {/* Project Image */}
                      <div className="relative h-80 md:h-full overflow-hidden">
                        <motion.div
                          whileHover={shouldReduceMotion ? {} : { 
                            scale: 1.1,
                            rotate: 1
                          }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="w-full h-full"
                        >
                          <Image
                            src={project.image || placeholder}
                            alt={`Image of the project ${project.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                            className="object-cover object-top md:object-left-top transition-all duration-700"
                          />
                        </motion.div>
                        {/* Overlay gradient for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />
                      </div>

                      {/* Project Content */}
                      <div className="p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[70vh]">
                        <div>
                          <motion.h3 
                            initial={{ opacity: 0, x: -30, rotateX: 10 }}
                            animate={{ opacity: 1, x: 0, rotateX: 0 }}
                            transition={{ 
                              delay: 0.2,
                              type: "spring",
                              stiffness: 200,
                              damping: 20
                            }}
                            className="font-bold text-2xl md:text-3xl text-foreground mb-4"
                          >
                            {project.title}
                          </motion.h3>
                          <motion.p 
                            initial={{ opacity: 0, x: -30, rotateX: 10 }}
                            animate={{ opacity: 1, x: 0, rotateX: 0 }}
                            transition={{ 
                              delay: 0.3,
                              type: "spring",
                              stiffness: 200,
                              damping: 20
                            }}
                            className="text-muted-foreground mb-6 leading-relaxed"
                          >
                            {project.description}
                          </motion.p>

                          {/* Technologies */}
                          <motion.div 
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                              delay: 0.4,
                              type: "spring",
                              stiffness: 200,
                              damping: 20
                            }}
                            className="mb-6"
                          >
                            <h4 className="text-md font-semibold text-foreground mb-3 flex items-center">
                              <motion.span 
                                className="inline-block w-1 h-4 bg-primary rounded-full mr-2"
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [1, 0.7, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                }}
                              />
                              Technologies
                            </h4>
                            <motion.div 
                              className="flex flex-wrap gap-2"
                              variants={{
                                hidden: {},
                                visible: {
                                  transition: {
                                    staggerChildren: 0.08,
                                  },
                                },
                              }}
                              initial="hidden"
                              animate="visible"
                            >
                              {project.technologies.filter(Boolean).map((tech, i) => (
                                <motion.span
                                  key={i}
                                  variants={techVariants}
                                  whileHover={shouldReduceMotion ? {} : {
                                    scale: 1.1,
                                    y: -2,
                                    rotateZ: 2,
                                    transition: { duration: 0.2 },
                                  }}
                                  animate={shouldReduceMotion ? {} : {
                                    y: [0, -2, 0],
                                  }}
                                  transition={shouldReduceMotion ? {} : {
                                    duration: 2 + i * 0.2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: i * 0.1,
                                  }}
                                  className={cn(
                                    "inline-block px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300",
                                    "bg-secondary/80 backdrop-blur-sm border border-border text-foreground",
                                    "hover:bg-accent hover:shadow-md hover:border-primary"
                                  )}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </motion.div>
                          </motion.div>
                        </div>

                        {/* Project Links */}
                        <motion.div 
                          initial={{ opacity: 0, y: 30, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ 
                            delay: 0.5,
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                          }}
                          className="mt-auto"
                        >
                          {project.links && (
                            <div className="flex flex-wrap gap-4">
                              {project.links.map((link, linkIndex) => (
                                <AnimatedButton
                                  key={linkIndex}
                                  href={link.link}
                                  icon={<ExternalLink className="w-4 h-4" />}
                                  label={link.text}
                                  variant="apple"
                                />
                              ))}
                            </div>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div 
          variants={cardVariants}
          animate={shouldReduceMotion ? {} : {
            y: [0, -5, 0],
            transition: {
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            },
          }}
          className="mt-8 text-center"
        >
          <AnimatedButton
            href="https://github.com/Couks"
            icon={<ExternalLink className="w-4 h-4" />}
            label="View All Projects on GitHub"
            variant="apple"
          />
        </motion.div>
      </motion.div>
    </SectionLayout>
  );
}
