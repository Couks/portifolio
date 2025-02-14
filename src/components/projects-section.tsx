"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import whatsYourFinances from "@/assets/whats-your-finances.png";
import { ExternalLink } from "lucide-react";
import ebenerTKD from "@/assets/ebenertkd.png";
import WebAppSecurity from "@/assets/web-app-security.png";
import placeholder from "@/assets/placeholder.png";

const projects = [
  {
    title: "Ebener Taekwondo",
    description: "Website for a Taekwondo academy focused on Google results",
    link: "https://ebenertkd.com.br/",
    image: ebenerTKD,
  },
  {
    title: "What's Your Finances",
    description: "Web application for financial control",
    link: "https://whats-your-finances-web-page.vercel.app/",
    image: whatsYourFinances,
  },
  {
    title: "Authentication API",
    description:
      "API with several endpoints for user authentication and management",
    links: [
      {
        link: "https://backend-av2-4seg.onrender.com/api/docs",
        text: "Documentation",
      },
      { link: "https://frontend-av2-4seg.vercel.app/", text: "Frontend" },
    ],
    image: WebAppSecurity,
  },
];

const MotionCard = motion(Card);

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-20 bg-secondary overflow-hidden min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Amazing Projects
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore my most recent projects, created with passion and dedication.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 md:px-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <MotionCard
                className="overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <CardContent className="p-0 relative">
                  <div className="relative h-32 md:h-60">
                    <Image
                      src={project.image || placeholder}
                      alt={`Image of the project ${project.title}`}
                      layout="fill"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-90 transition-opacity duration-300" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="font-bold text-2xl text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3 }}
                          className="flex gap-4"
                        >
                          {project.link ? (
                            <Button
                              asChild
                              variant="secondary"
                              className="group"
                            >
                              <Link
                                href={project.link}
                                target="_blank"
                                className="flex items-center"
                              >
                                View project
                                <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </Button>
                          ) : (
                            project.links &&
                            project.links.map((link, linkIndex) => (
                              <div key={linkIndex} className="">
                                <Button
                                  asChild
                                  variant="secondary"
                                  className="group"
                                >
                                  <Link
                                    href={link.link}
                                    target="_blank"
                                    className="flex items-center"
                                  >
                                    {link.text}
                                    <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                  </Link>
                                </Button>
                              </div>
                            ))
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
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
