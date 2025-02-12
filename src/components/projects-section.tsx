"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import whatsYourFinances from "@/assets/whats-your-finances.png";
import ebenerTKD from "@/assets/ebenertkd.png";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Ebener Taekwondo",
    description:
      "Site para uma academia de Taekwondo focado em resultados no Google",
    link: "https://ebenertkd.com.br/",
    image: ebenerTKD,
  },
  {
    title: "What's Your Finances",
    description: "Aplicação web para controle financeiro",
    link: "https://whats-your-finances-web-page.vercel.app/",
    image: whatsYourFinances,
  },
  {
    title: "PDC",
    description: "Projeto desenvolvido em TypeScript",
    link: "https://github.com/Couks/pdc",
    image: "/images/pdc.png",
  },
  {
    title: "Serviço Fácil",
    description: "Aplicação PHP para gerenciamento de serviços",
    link: "https://github.com/Couks/servico_facil",
    image: "/images/servico-facil.png",
  },
];

const MotionCard = motion(Card);

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projetos" className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Projetos Incríveis
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore os meus projetos mais recentes, criados com paixão e
          dedicação.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${index % 2 === 0 ? "md:mt-12" : "md:mb-12"}`}
            >
              <MotionCard
                className="overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <CardContent className="p-0 relative">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`Imagem do projeto ${project.title}`}
                      layout="fill"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
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
                        >
                          <Button asChild variant="secondary" className="group">
                            <Link
                              href={project.link}
                              target="_blank"
                              className="flex items-center"
                            >
                              Ver projeto
                              <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
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
