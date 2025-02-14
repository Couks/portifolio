"use client";
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import rocketLogo from "@/assets/rocketimob-logo.png";
import ebenerTkd from "@/assets/favicon-ebenertkd.webp";

interface Experience {
  company: string;
  logo: string;
}

const experiences: Experience[] = [
  {
    company: "Rocket Imob",
    logo: rocketLogo.src,
  },
  {
    company: "Ebener Tkd",
    logo: ebenerTkd.src,
  },
];

export default function ProfessionalExperience() {
  return (
    <section
      id="experience"
      className="py-12 md:py-24 lg:py-32 bg-background min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Professional Experiences
        </h2>

        <div className="flex flex-wrap md:flex-row gap-8 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-center mb-8">
              I&apos;m proud to have collaborated with some amazing companies:
            </p>
            <div className="flex flex-wrap gap-12 justify-center">
              {experiences.map((exp, index) => (
                <Avatar key={index} className="size-28">
                  <AvatarImage src={exp.logo} alt={`${exp.company} logo`} />
                </Avatar>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
