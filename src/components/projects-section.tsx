"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import whatsYourFinances from "@/assets/whats-your-finances.png";
import { ExternalLink } from "lucide-react";
import ebenerTKD from "@/assets/ebenertkd.png";
import WebAppSecurity from "@/assets/web-app-security.png";
import placeholder from "@/assets/placeholder.png";
import AnimatedButton from "./hero-section/animated-button";

const projects = [
  {
    title: "Ebener Taekwondo",
    description:
      "A modern website for Ebener Taekwondo Academy, designed to enhance online presence and improve search engine visibility. Features include class schedules, testimonials and contact information. Developed with Next.js and Tailwind CSS.",
    link: "https://ebenertkd.com.br/",
    image: ebenerTKD,
  },
  {
    title: "What's Your Finances",
    description:
      "A comprehensive mobile application designed to help you manage your finances effortlessly. Track your expenses, set budgets, and gain insights into your financial health. Developed with React Native and Expo.",
    link: "https://whats-your-finances-web-page.vercel.app/",
    image: whatsYourFinances,
  },
  {
    title: "Authentication API",
    description:
      "API focused on secure user authentication, featuring account creation, login, SQL injection prevention, two-factor authentication via SMS, and encrypted passwords. Developed with NestJS and Express",

    links: [
      { link: "https://frontend-av2-4seg.vercel.app/", text: "Application" },
      {
        link: "https://backend-av2-4seg.onrender.com/api/docs",
        text: "Docs",
      },
    ],
    image: WebAppSecurity,
  },
];

const MotionCard = motion(Card);

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 md:py-32 bg-gradient-to-b from-gray-100 to-gray-300 overflow-hidden min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-8 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            delay: 0.4,
          }}
        >
          My Works
        </motion.h2>
        <motion.p
          className="text-2xl text-center mb-12 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            delay: 0.4,
          }}
        >
          Take a look at some of my recent projects. Each one is a unique piece
          of work that I am proud to share.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="flex-none w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <MotionCard
                className="overflow-hidden group shadow-lg rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CardContent className="p-0 relative">
                  <div className="relative h-96 md:h-80">
                    <Image
                      src={project.image || placeholder}
                      alt={`Image of the project ${project.title}`}
                      layout="fill"
                      className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 backdrop-blur-sm bg-black/50 group-hover:bg-black/70 transition-opacity duration-300" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <h3 className="font-bold text-3xl text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 mb-6 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                    <div className="flex gap-4 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                      {project.link ? (
                        <AnimatedButton
                          href={project.link}
                          asChild
                          label="View Project"
                          icon={
                            <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                          }
                          variant="secondary"
                          className="group"
                        />
                      ) : (
                        project.links &&
                        project.links.map((link, linkIndex) => (
                          <AnimatedButton
                            key={linkIndex}
                            href={link.link}
                            label={link.text}
                            asChild
                            icon={
                              <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            }
                            variant="secondary"
                            className="group"
                          />
                        ))
                      )}
                    </div>
                  </div>
                </CardContent>
              </MotionCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
