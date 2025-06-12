"use client";

import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { cn } from "@/lib/utils";
import ebenerTKD from "@/assets/ebener-tkd.png";
import whatsYourFinances from "@/assets/whats-your-finances.png";
import devTips from "@/assets/dev-tips.png";
import pdc from "@/assets/PDC.png";
import placeholder from "@/assets/placeholder.png";
import AnimatedButton from "../animated-button";
import SectionLayout from "../section-layout";
import { useTranslation } from "@/lib/hooks/useTranslation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.5,
        type: "spring",
        stiffness: 300,
        damping: 25,
        ease: "easeOut",
      },
    },
  };

  const techVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = shouldReduceMotion ? {} : {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  const projects = [
    {
      title: t("projects.items.ebener.title"),
      description: t("projects.items.ebener.description"),
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "SwiperJS",
        "ShadcnUI",
      ],
      links: [{ link: "https://ebenertkd.com.br/", text: t("projects.links.visit") }],
      image: ebenerTKD,
    },
    {
      title: t("projects.items.finances.title"),
      description: t("projects.items.finances.description"),
      technologies: [
        "React Native",
        "Expo",
        "PostgreSQL",
        "Axios",
        "WhatsApp API",
        "NativeWind",
      ],
      links: [
        {
          link: "https://whats-your-finances-web-page.vercel.app/",
          text: t("projects.links.visit"),
        },
      ],
      image: whatsYourFinances,
    },
    {
      title: t("projects.items.devtips.title"),
      description: t("projects.items.devtips.description"),
      technologies: ["React Native", "Expo", "AsyncStorage", "TypeScript"],
      links: [
        { link: "https://github.com/Couks/dev-tips", text: t("projects.links.repository") },
      ],
      image: devTips,
    },
    {
      title: t("projects.items.pdc.title"),
      description: t("projects.items.pdc.description"),
      technologies: ["React Native", "Expo", "TypeScript", "React Navigation", "AsyncStorage"],
      links: [
        { link: "https://github.com/Couks/pdc", text: t("projects.links.repository") },
      ],
      image: pdc, 
    },
  ];

  return (
    <SectionLayout
      id="projects"
      title={t("projects.title")}
      subtitle={t("projects.subtitle")}
    >
      <motion.div
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col justify-center items-center"
        aria-live="polite"
      >
        <motion.div 
          variants={itemVariants}
          animate={floatingAnimation}
          className="w-full mx-auto"
        >
          <Swiper
            modules={[EffectCoverflow, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={false}
            effect="coverflow"
            coverflowEffect={{        
              depth: 300,             
              slideShadows: false,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="projects-swiper"
            onSlideChange={(swiper) => setActiveProject(swiper.realIndex)}
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center p-4 md:p-8 overflow-visible w-full max-w-8xl"
              >
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  onMouseEnter={() => setActiveProject(index)}
                  onMouseLeave={() => setActiveProject(null)}
                  whileHover={shouldReduceMotion ? {} : {
                    scale: 1.02,
                    rotateX: 2,
                    transition: { duration: 0.3 }
                  }}
                  className="w-full"
                >
                  <Card className={cn(
                    "w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border shadow-lg transition-all duration-300",
                    "bg-card backdrop-blur-sm border-border",
                    activeProject === index ? "ring-2 ring-primary/30 shadow-xl shadow-primary/10" : "",
                    "hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10"
                  )}>
                    <div className="flex flex-col md:grid md:grid-cols-5 h-full">
                      {/* Project Image - Responsive sizing */}
                      <div className="relative h-48 sm:h-56 md:h-full md:col-span-2 overflow-hidden">
                        <motion.div
                          variants={itemVariants}
                          whileHover={shouldReduceMotion ? {} : { 
                            scale: 1.05,
                            rotate: 0.5
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="w-full h-full"
                        >
                          <Image
                            src={project.image || placeholder}
                            alt={`${project.title} project screenshot`}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            priority
                            className="object-cover object-top transition-all duration-300"
                          />
                        </motion.div>
                        {/* Subtle overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black/10" />
                      </div>

                      {/* Project Content - Expanded space */}
                      <div className="p-5 sm:p-6 md:p-7 md:col-span-3 flex flex-col h-full">
                        {/* Header Section */}
                        <motion.div 
                          variants={itemVariants}
                          className="mb-4"
                        >
                          <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-foreground mb-3 line-clamp-2">
                            {project.title}
                          </h3>
                          
                          <p className="text-muted-foreground text-base md:text-lg leading-relaxed line-clamp-3 md:line-clamp-4">
                            {project.description}
                          </p>
                        </motion.div>

                        {/* Technologies Section - Optimized spacing */}
                        <motion.div 
                          variants={itemVariants}
                          className="flex-1 mb-5"
                        >
                          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                            <motion.span 
                              className="inline-block w-1 h-3 bg-primary rounded-full mr-2"
                              animate={shouldReduceMotion ? {} : {
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.7, 1],
                              }}
                              transition={shouldReduceMotion ? {} : {
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                              }}
                            />
                            {t("projects.technologies")}
                          </h4>
                          
                          <motion.div 
                            className="flex flex-wrap gap-1.5 sm:gap-2"
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
                                  scale: 1.05,
                                  y: -1,
                                  transition: { duration: 0.2 },
                                }}
                                className={cn(
                                  "inline-block px-2.5 py-1 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300",
                                  "bg-secondary/80 backdrop-blur-sm border border-border text-foreground",
                                  "hover:bg-accent hover:shadow-sm hover:border-primary/50"
                                )}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </motion.div>
                        </motion.div>

                        {/* Project Links - Sticky bottom */}
                        <motion.div 
                          variants={itemVariants}
                          className="mt-auto pt-2"
                        >
                          {project.links && (
                            <div className="flex flex-wrap gap-3">
                              {project.links.map((link, linkIndex) => (
                                <AnimatedButton
                                  key={linkIndex}
                                  href={link.link}
                                  icon={<ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
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
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          animate={shouldReduceMotion ? {} : {
            y: [0, -5, 0],
            transition: {
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            },
          }}
          className="mt-2 text-center"
        >
          <AnimatedButton
            href="https://github.com/Couks"
            icon={<ExternalLink className="w-4 h-4" />}
            label={t("projects.viewAll")}
            variant="apple"
          />
        </motion.div>
      </motion.div>

      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 blur-3xl" />
      </motion.div>

      <style jsx global>{`
        .projects-swiper {
          overflow: visible;
        }
      `}</style>
    </SectionLayout>
  );
}
