"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useInView,
} from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Download,
  MailCheck,
  Calendar,
  MapPin,
  Briefcase,
} from "lucide-react";
import rocket from "@/assets/rocketimob-logo.png";
import ebenertkd from "@/assets/favicon-ebenertkd.webp";
import AnimatedButton from "../animated-button";
import SectionLayout from "../section-layout";

interface Experience {
  company: string;
  logo: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  keyPoints: string[];
  skills: string[];
  link?: string;
}

const experiences: Experience[] = [
  {
    company: "Rocket Imob",
    logo: rocket.src,
    role: "Frontend Developer",
    duration: "Apr 2021 - Present",
    location: "Remote",
    description:
      "Building customized UI solutions for real estate websites with focus on UX, performance, and scalability.",
    keyPoints: [
      "Developed custom components for client-specific needs",
      "Created automated tools that reduced setup time by 40%",
      "Led end-to-end technical projects from planning to deployment",
      "Bridged communication between design, backend, and support teams",
    ],
    skills: [
      "JavaScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "UX/UI Design",
      "Responsive Design",
      "Git",
      "Figma",
    ],
    link: "https://rocketimob.com.br/",
  },
  {
    company: "Ebener TKD",
    logo: ebenertkd.src,
    role: "Freelance Full-Stack Developer",
    duration: "Nov 2024 - Dec 2024",
    location: "Rio de Janeiro, RJ",
    description:
      "Designed and built a complete website from scratch for a Taekwondo academy with focus on performance and SEO.",
    keyPoints: [
      "Created the entire UI/UX from scratch using Figma",
      "Implemented responsive design with modern animations",
      "Optimized for search engines and accessibility",
    ],
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
      "Responsive Design",
      "SEO",
      "Figma",
    ],
    link: "https://ebenertkd.com.br/",
  },
  {
    company: "PluraTech",
    logo: "https://fakeimg.pl/100x100/?text=PluraTech&font=lobster",
    role: "Frontend Engineer",
    duration: "Jan 2023 - Oct 2023",
    location: "São Paulo, SP",
    description:
      "Worked on a B2B SaaS dashboard to help logistics companies visualize and optimize delivery routes in real time.",
    keyPoints: [
      "Rebuilt legacy pages using React and Tailwind CSS to improve performance and maintainability",
      "Integrated Mapbox API for real-time vehicle tracking",
      "Collaborated closely with product and backend teams to ship features with rapid iterations",
      "Implemented design system to unify visual components across multiple modules",
    ],
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Mapbox",
      "REST API",
      "Agile",
      "Storybook",
    ],
    link: "https://pluratech.io/",
  },
  {
    company: "Nexaly",
    logo: "https://fakeimg.pl/100x100/?text=Nexaly&font=lobster",
    role: "Frontend Developer (Contract)",
    duration: "Jul 2022 - Jan 2023",
    location: "Remote",
    description:
      "Contracted to revamp the marketing site and blog for a digital health startup, aiming for accessibility and high conversion.",
    keyPoints: [
      "Migrated WordPress content to a headless CMS using Next.js and GraphQL",
      "Boosted Lighthouse performance score from 63 to 97",
      "Created a custom blog template that increased time-on-page by 25%",
      "Led SEO and structured data improvements that doubled organic traffic",
    ],
    skills: [
      "Next.js",
      "GraphQL",
      "Headless CMS (Strapi)",
      "SEO Optimization",
      "HTML/CSS",
      "Performance Tuning",
    ],
    link: "https://nexaly.health/",
  },
  {
    company: "Blockwave Labs",
    logo: "https://fakeimg.pl/100x100/?text=Blockwave&font=lobster",
    role: "Frontend Intern",
    duration: "Feb 2022 - Jun 2022",
    location: "Remote",
    description:
      "Supported the frontend team in building interfaces for a DeFi platform focused on user onboarding and wallet integrations.",
    keyPoints: [
      "Built reusable UI components using React and Chakra UI",
      "Integrated Web3 wallets like MetaMask and WalletConnect",
      "Wrote unit tests to increase frontend test coverage by 30%",
      "Participated in design QA to ensure fidelity with Figma mockups",
    ],
    skills: [
      "React",
      "Chakra UI",
      "Web3.js",
      "Jest",
      "GitHub Actions",
      "Figma QA",
    ],
    link: "https://blockwave.io/",
  },
];

export default function ProfessionalExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const handleExperienceClick = (index: number) => {
    setActiveIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.1 : 0.5 },
    },
  };

  return (
    <SectionLayout
      id="experience"
      title="Professional Experience"
      subtitle="Key roles that have shaped my expertise in frontend development"
    >
      <motion.div
        ref={containerRef}
        className="flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Experience Timeline - Improved for better navigation */}
        <motion.div
          className="flex items-center justify-start mb-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent"
          variants={itemVariants}
        >
          <div className="flex space-x-4 px-2">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                onClick={() => handleExperienceClick(index)}
                className={`flex flex-col items-center px-5 py-3 rounded-xl transition-all cursor-pointer border ${
                  activeIndex === index
                    ? "bg-primary/10 border-primary/30 shadow-sm"
                    : "bg-card hover:bg-accent/50 border-border"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                aria-selected={activeIndex === index}
                variants={itemVariants}
              >
                <Avatar className="h-14 w-14 rounded-xl border bg-background p-1 mb-3">
                  <AvatarImage
                    src={exp.logo || "/placeholder.svg"}
                    alt={`${exp.company} logo`}
                  />
                </Avatar>
                <span className="text-sm font-semibold">{exp.company}</span>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{exp.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Cards - Improved layout */}
        <div className="relative min-h-[500px] md:min-h-[450px]">
          <AnimatePresence mode="wait">
            {experiences.map(
              (exp, index) =>
                activeIndex === index && (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.1 : 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      {/* Left Column - Company Info & Skills (Most important for recruiters) */}
                      <motion.div
                        className="md:col-span-5 bg-card rounded-xl border p-6 flex flex-col h-full"
                        variants={itemVariants}
                      >
                        <div className="flex items-start gap-4 mb-5">
                          <Avatar className="h-16 w-16 rounded-xl border bg-background p-1">
                            <AvatarImage
                              src={exp.logo || "/placeholder.svg"}
                              alt={`${exp.company} logo`}
                            />
                          </Avatar>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">
                              {exp.company}
                            </h3>
                            <p className="text-lg font-medium text-foreground">
                              {exp.role}
                            </p>
                            <div className="flex items-center text-muted-foreground mt-1">
                              <MapPin className="h-3.5 w-3.5 mr-1" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center text-muted-foreground mb-4">
                          <Briefcase className="h-4 w-4 mr-2" />
                          <span className="text-sm font-medium">
                            {exp.duration}
                          </span>
                        </div>

                        <p className="text-foreground mb-6">
                          {exp.description}
                        </p>

                        {/* Skills - Moved up for more visibility */}
                        <div className="mb-6">
                          <h4 className="text-base font-bold text-foreground mb-3">
                            Technical Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: shouldReduceMotion ? 0 : 0.2,
                                  delay: shouldReduceMotion ? 0 : i * 0.05,
                                }}
                              >
                                <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                                  {skill}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>

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
                      </motion.div>

                      {/* Right Column - Achievements & CTA */}
                      <div className="md:col-span-7 flex flex-col gap-6">
                        {/* Key Responsibilities & Achievements */}
                        <motion.div
                          className="bg-card rounded-xl border p-6"
                          variants={itemVariants}
                        >
                          <h4 className="text-lg font-bold text-foreground mb-4 flex items-center">
                            <span className="inline-block w-1.5 h-6 bg-primary rounded-full mr-2"></span>
                            Key Achievements
                          </h4>
                          <ul className="space-y-4">
                            {exp.keyPoints.map((point, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: shouldReduceMotion ? 0 : 0.3,
                                  delay: shouldReduceMotion ? 0 : i * 0.1,
                                }}
                                className="flex items-start"
                              >
                                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                                </div>
                                <span className="text-foreground">{point}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        {/* CTA - Improved design */}
                        <motion.div
                          className="bg-gradient-to-br from-card to-card/80 rounded-xl border p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm"
                          variants={itemVariants}
                        >
                          <div className="text-center sm:text-left">
                            <h4 className="text-base font-semibold mb-1">
                              Interested in my work?
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Download my resume or get in touch
                            </p>
                          </div>
                          <div className="flex gap-3">
                            <AnimatedButton
                              href="/resume.pdf"
                              icon={<Download className="h-4 w-4" />}
                              label="Resume"
                              variant="apple-primary"
                              className="py-2 px-4"
                            />
                            <AnimatedButton
                              href="mailto:matheuscastroks@gmail.com"
                              icon={<MailCheck className="h-4 w-4" />}
                              label="Contact"
                              variant="apple"
                              className="py-2 px-4"
                            />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </SectionLayout>
  );
}
