"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useReducedMotion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiDocker,
  SiTailwindcss,
  SiGraphql,
  SiExpo,
  SiRedux,
  SiVite,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiDrizzle,
  SiVercel,
  SiOpenai,
  SiPostman,
  SiInsomnia,
  SiStyledcomponents,
  SiGoogleplay,
  SiEsbuild,
  SiGoogleauthenticator,
  SiFramer,
} from "react-icons/si"
import { FaNode, FaGitAlt } from "react-icons/fa"
import { TbApi } from "react-icons/tb"
import { Code, Zap, Database, Globe, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"
import SectionLayout from "../section-layout"

const categories = [
  {
    title: "Modern Frontend",
    description: "Creating responsive, accessible, and high-performance interfaces with a focus on user experience.",
    icon: <Code />,
    technologies: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38B2AC]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
      { name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
      { name: "Framer Motion", icon: SiFramer, color: "text-[#0055FF]" },
      { name: "ShadCN UI", icon: SiTailwindcss, color: "text-foreground" },
    ],
  },
  {
    title: "Integrations & APIs",
    description:
      "Integrating applications with REST APIs, GraphQL, authentication, OpenAI, and external services with security and scalability.",
    icon: <Globe />,
    technologies: [
      { name: "REST API", icon: TbApi, color: "text-foreground" },
      { name: "GraphQL", icon: SiGraphql, color: "text-[#E535AB]" },
      { name: "OpenAI API", icon: SiOpenai, color: "text-foreground" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
      { name: "Insomnia", icon: SiInsomnia, color: "text-[#5849BE]" },
    ],
  },
  {
    title: "Backend for Frontend",
    description:
      "Creating APIs and business logic with Node, Express, and NestJS, focused on clean and secure architectures.",
    icon: <Zap />,
    technologies: [
      { name: "Node.js", icon: FaNode, color: "text-[#339933]" },
      { name: "NestJS", icon: SiNestjs, color: "text-[#E0234E]" },
      { name: "Prisma ORM", icon: SiPrisma, color: "text-foreground" },
      { name: "Drizzle ORM", icon: SiDrizzle, color: "text-foreground" },
    ],
  },
  {
    title: "Databases & Infrastructure",
    description:
      "Efficient modeling, data security, and optimized deployments with Docker, Vercel, and relational databases.",
    icon: <Database />,
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
      { name: "Vercel", icon: SiVercel, color: "text-foreground" },
    ],
  },
  {
    title: "Mobile & Cross-platform",
    description: "Developing responsive and native apps with Expo and React Native, maintaining a unified codebase.",
    icon: <Smartphone />,
    technologies: [
      { name: "React Native", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Expo", icon: SiExpo, color: "text-foreground" },
      { name: "Styled Components", icon: SiStyledcomponents, color: "text-[#DB7093]" },
      { name: "OAuth", icon: SiGoogleauthenticator, color: "text-foreground" },
      { name: "ESBuild", icon: SiEsbuild, color: "text-[#FFCF00]" },
      { name: "Play Store", icon: SiGoogleplay, color: "text-[#34A853]" },
    ],
  },
]

export default function TechSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const controls = useAnimation()

  // Simplified floating animation for decorative elements
  useEffect(() => {
    controls.start({
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    });
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.3,
        ease: "easeOut",
      },
    },
  }

  const techVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.15 },
    },
  }

  // Decorative floating elements
  const decorativeElements = [
    { icon: <Code />, top: "10%", left: "5%", delay: 0 },
    { icon: <Globe />, top: "20%", right: "8%", delay: 0.05 },
    { icon: <Zap />, bottom: "15%", left: "7%", delay: 0.1 },
    { icon: <Database />, bottom: "25%", right: "5%", delay: 0.15 },
  ];

  return (
    <SectionLayout
      id="tech-stack"
      title="My Technology Stack"
      subtitle="Tools and technologies I use to bring digital products to life"
    >
      {/* Decorative floating elements */}
      {!prefersReducedMotion &&
        decorativeElements.map((el, i) => (
          <motion.div
            key={i}
            className="absolute z-10 text-primary/20 hidden lg:block"
            style={{
              top: el.top || "auto",
              left: el.left || "auto",
              right: el.right || "auto",
              bottom: el.bottom || "auto",
            }}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ delay: el.delay }}
          >
            <motion.div
              className="text-3xl"
              animate={{ rotate: 360 }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {el.icon}
            </motion.div>
          </motion.div>
        ))}

      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-7xl mx-auto relative"
      >
        <div className="py-8">
          <Swiper
            modules={[ EffectCoverflow ]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="tech-swiper"
          >
            {categories.map((category, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  variants={itemVariants}
                  className="group relative h-full pb-2"
                  onMouseEnter={() => setActiveCategory(i)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <motion.div
                    className={cn(
                      "h-full p-6 rounded-3xl backdrop-blur-lg bg-card border transition-all duration-200",
                      "border-primary/10 shadow-sm",
                      activeCategory === i && "ring-2 ring-primary/30 shadow-xl shadow-primary/10"
                    )}
                    whileHover={prefersReducedMotion ? {} : {
                      y: -2,
                      scale: 1.01,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    layout
                  >
                    {/* Header with icon */}
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className="p-3 bg-primary/10 rounded-2xl"
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                      >
                        <div className="w-6 h-6 text-primary">
                          {category.icon}
                        </div>
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                          {category.title}
                          <motion.span
                            className="w-1.5 h-6 bg-primary rounded-full"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ delay: 0.15, duration: 0.3 }}
                          />
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <motion.p 
                      className="text-sm text-muted-foreground mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      {category.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div
                      className="space-y-3"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.03,
                            delayChildren: 0.1,
                          },
                        },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <div className="flex flex-wrap gap-3">
                        {category.technologies.map((tech, j) => (
                          <motion.div
                            key={j}
                            variants={techVariants}
                            whileHover={prefersReducedMotion ? {} : {
                              scale: 1.03,
                              y: -1,
                              transition: { duration: 0.15 },
                            }}
                            className={cn(
                              "flex items-center gap-3 p-3 rounded-2xl transition-all duration-150",
                              "bg-gradient-to-r from-foreground/5 to-foreground/10",
                              "border border-foreground/5 backdrop-blur-lg",
                              "hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10",
                              "hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
                            )}
                          >
                            <motion.div
                              whileHover={{ rotate: 180 }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0"
                            >
                              <tech.icon className={cn("text-xl", tech.color)} />
                            </motion.div>
                            <span className="text-sm font-medium text-foreground">
                              {tech.name}
                            </span>
                            
                            {/* Subtle glow effect on hover */}
                            <motion.div
                              className="ml-auto w-2 h-2 rounded-full bg-primary/30"
                              initial={{ scale: 0, opacity: 0 }}
                              whileHover={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.15 }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>

      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 blur-3xl" />
      </motion.div>

      <style jsx global>{`
        .tech-swiper {
          padding: 20px 0;
          overflow: visible;
        }

        .tech-swiper .swiper-slide {
          height: auto;
        }

        .tech-swiper .swiper-wrapper {
          padding: 10px 0;
        }
      `}</style>
    </SectionLayout>
  )
}
