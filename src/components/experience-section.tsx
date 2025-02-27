"use client";
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import rocketLogo from "@/assets/rocketimob-logo.png";
import ebenerTkd from "@/assets/favicon-ebenertkd.webp";

interface Experience {
  company: string;
  logo: string;
  role: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: "Rocket Imob",
    logo: rocketLogo.src,
    role: "Frontend Developer",
    duration: "Jan 2020 - Present",
    description:
      "Developed and maintained the company's main web application, improving user engagement by 30%.",
  },
  {
    company: "Ebener Tkd",
    logo: ebenerTkd.src,
    role: "UI/UX Designer",
    duration: "Jun 2018 - Dec 2019",
    description:
      "Led the redesign of the company website, resulting in a 50% increase in user satisfaction.",
  },
];

export default function ProfessionalExperience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-32 lg:py-40 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-16 text-center text-gray-800">
          Professional Experiences
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="transform transition-all hover:scale-105 hover:shadow-2xl text-center"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white shadow-lg rounded-3xl max-w-sm">
                <CardHeader className="flex items-center">
                  <Avatar className="size-28">
                    <AvatarImage src={exp.logo} alt={`${exp.company} logo`} />
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl font-semibold text-gray-900">
                      {exp.company}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {exp.role}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
                  <p className="text-base text-gray-700">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
