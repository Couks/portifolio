"use client";
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import rocketLogo from "@/assets/rocketimob-logo.png";
import ebenerTkd from "@/assets/favicon-ebenertkd.webp";

interface Experience {
  type: "company" | "freelance";
  company?: string;
  logo?: string;
  position: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    type: "company",
    company: "Rocket Imob",
    logo: rocketLogo.src,
    position: "Senior Frontend Developer",
    period: "Jan 2020 - Present",
    responsibilities: [
      "Led the development of a React dashboard, improving user engagement by 40%",
      "Implemented state management using Redux, resulting in a 30% decrease in bug reports",
      "Mentored junior developers, leading code reviews and pair programming sessions",
    ],
    technologies: ["React", "Redux", "TypeScript", "Tailwind CSS"],
  },
  {
    type: "freelance",
    position: "Freelance Web Developer",
    logo: ebenerTkd.src,
    period: "Jun 2024 - Dec 2024",
    responsibilities: [
      "Developed responsive websites for small and medium businesses",
      "Created optimized landing pages for conversion",
      "Implemented integrations with third-party APIs for e-commerce functionalities",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

export default function ProfessionalExperience() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Professional Experience
        </h2>

        <div className="flex flex-wrap md:flex-row gap-8 justify-center">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-"
            >
              <Card className="w-full border-2 border-primary">
                <CardHeader className="flex flex-row items-start gap-4 ">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={exp.logo} alt={`${exp.company} logo`} />
                    <AvatarFallback>{exp.company?.[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <CardTitle className="text-xl">
                      {exp.type === "company" ? exp.company : exp.position}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {exp.type === "company" ? exp.position : "Freelance Work"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + idx * 0.1,
                        }}
                        className="text-sm"
                      >
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
