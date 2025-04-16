"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, ExternalLink, Download, MailCheck } from "lucide-react"
import rocket from "@/assets/rocketimob-logo.png"
import ebenertkd from "@/assets/favicon-ebenertkd.webp"
import AnimatedButton from "../animated-button"
import SectionLayout from "../section-layout"

interface Experience {
  company: string
  logo: string
  role: string
  duration: string
  location: string
  description: string
  achievements: string[]
  skills: string[]
  link?: string
}

const experiences: Experience[] = [
  {
    company: "Rocket Imob",
    logo: rocket.src, // Replace with actual path
    role: "Frontend Developer",
    duration: "Jan 2020 - Present",
    location: "São Paulo, Brazil",
    description:
      "Leading frontend development for a real estate platform that connects property buyers with sellers. Responsible for implementing new features, improving performance, and ensuring cross-browser compatibility.",
    achievements: [
      "Improved application performance by 40% through code optimization and lazy loading",
      "Reduced bounce rate by 25% after implementing responsive design improvements",
      "Developed a component library that increased development speed by 30%",
      "Led the migration from legacy code to React and Next.js",
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "REST API"],
    link: "https://rocketimob.com.br/",
  },
  {
    company: "Ebener Tkd",
    logo: ebenertkd.src, // Replace with actual path
    role: "UI/UX Designer",
    duration: "Jun 2018 - Dec 2019",
    location: "Remote",
    description:
      "Redesigned the company's digital presence and created a cohesive brand identity across web and mobile platforms. Collaborated with stakeholders to understand business requirements and user needs.",
    achievements: [
      "Increased user engagement by 50% through improved navigation and user flows",
      "Reduced customer support inquiries by 35% with intuitive interface design",
      "Created a design system that ensured consistency across all digital products",
      "Conducted user testing sessions that informed data-driven design decisions",
    ],
    skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "HTML/CSS"],
    link: "https://ebenertkd.com.br/",
  },
]

export default function ProfessionalExperience() {
  const [activeExperience, setActiveExperience] = useState<number | null>(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  return (
    <SectionLayout
      id="experience"
      title="Professional Experience"
      subtitle="A track record of delivering impactful solutions and driving business results"
    >
      <div ref={containerRef} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((exp, index) => {
            const isActive = activeExperience === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className="group"
                onMouseEnter={() => setActiveExperience(index)}
                onMouseLeave={() => setActiveExperience(null)}
              >
                <div className="relative">
                  {/* Experience card with iOS/macOS inspired design */}
                  <motion.div
                    className="relative rounded-2xl overflow-hidden backdrop-blur-sm border shadow-lg"
                    animate={{
                      y: isActive ? -5 : 0,
                      boxShadow: isActive
                        ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                        : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-card/80 backdrop-blur-md">
                      <div className="md:grid md:grid-cols-5">
                        {/* Company info - 1 column on mobile, 2 columns on desktop */}
                        <div className="p-6 md:p-8 md:col-span-2 flex flex-col md:border-r border-border">
                          <div className="flex items-center space-x-4 mb-4">
                            <Avatar className="h-16 w-16 rounded-xl border bg-background p-1 shadow-sm">
                              <AvatarImage src={exp.logo || "/placeholder.svg"} alt={`${exp.company} logo`} />
                            </Avatar>
                            <div>
                              <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                              <p className="text-muted-foreground font-medium">{exp.role}</p>
                            </div>
                          </div>

                          <div className="space-y-3 mb-6">
                            <div className="flex items-start">
                              <span className="inline-block w-5 text-muted-foreground">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                              <span className="text-sm text-muted-foreground">{exp.duration}</span>
                            </div>
                            <div className="flex items-start">
                              <span className="inline-block w-5 text-muted-foreground">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                              <span className="text-sm text-muted-foreground">{exp.location}</span>
                            </div>
                          </div>

                          <p className="text-card-foreground text-sm mb-4">{exp.description}</p>

                          {exp.link && (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 mt-auto group"
                            >
                              Visit website
                              <ExternalLink className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                            </a>
                          )}
                        </div>

                        {/* Achievements and skills - 3 columns on desktop */}
                        <div className="p-6 md:p-8 md:col-span-3 bg-muted/50">
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                  transition={{ duration: 0.2, delay: 0.3 + i * 0.1 }}
                                  className="flex items-start"
                                >
                                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                                  <span className="text-sm text-card-foreground">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                              Technologies & Skills
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                  transition={{ duration: 0.2, delay: 0.5 + i * 0.05 }}
                                >
                                  <Badge
                                    variant="outline"
                                    className="bg-background/80 text-card-foreground border-border hover:bg-accent transition-colors"
                                  >
                                    {skill}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to action for recruiters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.2, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="md:flex items-center justify-center backdrop-blur-sm bg-card/70 gap-8 rounded-2xl border shadow-lg p-6 md:p-8 w-auto">
            <div className="flex flex-col text-left gap-2">
              <h3 className="text-xl font-semibold text-foreground mb-3">Want to know more about my experience?</h3>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Download my complete resume or reach out directly to discuss how my skills and experience can benefit
                your team.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <AnimatedButton
                href="/resume.pdf"
                icon={<Download />}
                label="Download Resume"
                variant="apple-primary"
                className="p-4 md:w-auto"
              />

              <AnimatedButton
                href="mailto:matheuscastroks@gmail.com"
                icon={<MailCheck />}
                label="Contact Me"
                variant="apple"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  )
}
