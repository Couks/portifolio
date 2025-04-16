"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
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
} from "react-icons/si"
import { FaNode, FaGitAlt } from "react-icons/fa"
import { TbApi } from "react-icons/tb"
import { cn } from "@/lib/utils"
import SectionLayout from "../section-layout"
import AnimatedCard from "../animated-card"

const categories = [
  {
    title: "Modern Frontend",
    description: "Creating responsive, accessible, and high-performance interfaces with a focus on user experience.",
    technologies: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38B2AC]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
      { name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
      { name: "ShadCN UI", icon: SiTailwindcss, color: "text-foreground" },
    ],
  },
  {
    title: "Integrations & APIs",
    description:
      "Integrating applications with REST APIs, GraphQL, authentication, OpenAI, and external services with security and scalability.",
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
    technologies: [
      { name: "React Native", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Expo", icon: SiExpo, color: "text-foreground" },
    ],
  },
]

export default function TechSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  }

  return (
    <SectionLayout
      id="tech-stack"
      title="My Technology Stack"
      subtitle="Tools and technologies I use to bring digital products to life"
    >
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center"
      >
        {categories.map((category, i) => (
          <AnimatedCard
            key={i}
            index={i}
            className={cn(activeCategory === i ? "ring-2 ring-ring" : "")}
            onMouseEnter={() => setActiveCategory(i)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className="flex flex-col h-full p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{category.description}</p>

              <motion.div
                className="flex flex-wrap gap-2"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {category.technologies.map((tech, j) => (
                  <motion.div
                    key={j}
                    variants={techVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-full text-sm",
                      "bg-secondary backdrop-blur-sm border border-border",
                      "hover:bg-accent transition-all duration-200",
                    )}
                  >
                    <tech.icon className={cn("text-lg", tech.color)} />
                    <span className="text-foreground">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </AnimatedCard>
        ))}
      </motion.div>
    </SectionLayout>
  )
}
