"use client"

import { useRef, useState, useCallback } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ExternalLink } from 'lucide-react'
import ebenerTKD from "@/assets/ebenertkd.png"
import whatsYourFinances from "@/assets/whats-your-finances.png"
import WebAppSecurity from "@/assets/web-app-security.png"
import placeholder from "@/assets/placeholder.png"
import AnimatedButton from "../animated-button"
import SectionLayout from "../section-layout"

const projects = [
  {
    title: "Ebener Taekwondo",
    description:
      "A modern website for Ebener Taekwondo Academy, designed to enhance online presence and improve search engine visibility. Features include class schedules, testimonials and contact information.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    link: [
      { link: "https://ebenertkd.com.br/", text: "View Project" },
      { link: "https://backend-av2-4seg.onrender.com/api/docs", text: "Linkedin Post" },
    ],
    image: ebenerTKD,
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "What's Your Finances",
    description:
      "A comprehensive mobile application designed to help you manage your finances effortlessly. Track your expenses, set budgets, and gain insights into your financial health.",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase"],
    link: "https://whats-your-finances-web-page.vercel.app/",
    image: whatsYourFinances,
    color: "from-green-500/20 to-emerald-500/20",
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
    color: "from-red-500/20 to-orange-500/20",
  },
]

const MotionCard = motion(Card)

export function ProjectsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null)
  }, [])

  return (
    <SectionLayout
      id="projects"
      title="My Projects"
      subtitle="Take a look at some of my recent projects. Each one is a unique piece of work that I am proud to share."
    >
      <div ref={sectionRef} className="w-full">
        {/* Overlapping cards container */}
        <div className="relative mt-24">
          {projects.map((project, index) => {
            // Alternate between left and right alignment
            const isEven = index % 2 === 0
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative w-full mb-[-10%] last:mb-0`}
                style={{
                  zIndex: isHovered ? 10 : projects.length - index,
                  marginTop: index === 0 ? 0 : "-12%",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`w-[80%] mx-auto ${isEven ? "ml-0 mr-auto" : "mr-0 ml-auto"}`}>
                  <MotionCard
                    className="overflow-hidden rounded-2xl border border-border shadow-lg bg-card/80 backdrop-blur-sm"
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                      transition: { duration: 0.2 },
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                      {/* Project Image */}
                      <div className={`relative h-32 md:h-full ${isEven ? "md:col-start-1" : "md:col-start-2"}`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`} />
                        <Image
                          src={project.image || placeholder}
                          alt={`Image of the project ${project.title}`}
                          layout="fill"
                          objectFit="cover"
                          sizes="(max-width: 768px) 100vw, 30vw"
                          loading="lazy"
                          className="transition-transform duration-300 ease-out group-hover:scale-105 md:h-32"
                        />
                      </div>

                      {/* Project Content */}
                      <div
                        className={`p-6 md:p-8 flex flex-col justify-center ${isEven ? "md:col-start-2" : "md:col-start-1"}`}
                      >
                        <h3 className="font-bold text-2xl md:text-3xl text-foreground mb-4">{project.title}</h3>
                        <p className="text-muted-foreground mb-6">{project.description}</p>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-md font-semibold text-foreground dotted tracking-wider mb-3">
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

                        {/* Project Links */}
                        <div>
                          {project.link ? (
                            Array.isArray(project.link) ? (
                              <div className="flex flex-wrap gap-4">
                                {project.link.map((link, linkIndex) => (
                                  <AnimatedButton
                                    key={linkIndex}
                                    href={link.link}
                                    icon={<ExternalLink />}
                                    label={link.text}
                                    variant="apple"
                                  />
                                ))}
                              </div>
                            ) : (
                              <AnimatedButton
                                href={project.link}
                                icon={<ExternalLink />}
                                label="View Project"
                                variant="apple"
                              />
                            )
                          ) : (
                            project.links && (
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
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </MotionCard>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <AnimatedButton
            href="https://github.com/Couks"
            icon={<ExternalLink />}
            label="View All Projects on GitHub"
            variant="apple"
          />
        </motion.div>
      </div>
    </SectionLayout>
  )
}
