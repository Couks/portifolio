"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Desenvolvedor Full Stack",
    company: "Tech Inovações",
    period: "2021 - Presente",
    description:
      "Desenvolvimento de aplicações web escaláveis usando React, Node.js e MongoDB. Implementação de arquiteturas de microserviços e integração contínua.",
    skills: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
  },
  {
    title: "Desenvolvedor Front-end",
    company: "Web Solutions",
    period: "2019 - 2021",
    description:
      "Criação de interfaces responsivas e acessíveis para aplicações web de grande escala. Foco em otimização de performance e experiência do usuário.",
    skills: ["JavaScript", "Vue.js", "Sass", "Webpack", "Jest"],
  },
  {
    title: "Estagiário de Desenvolvimento",
    company: "StartUp Inovadora",
    period: "2018 - 2019",
    description:
      "Participação no desenvolvimento de um aplicativo móvel usando React Native. Aprendizado de boas práticas de codificação e trabalho em equipe.",
    skills: ["React Native", "JavaScript", "Git", "Agile"],
  },
];

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experiencia" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Minha Jornada Profissional
        </motion.h2>
        <motion.h3
          className="text-2xl font-semibold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Experiências Profissionais
        </motion.h3>
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-8 flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              <div className="w-full md:w-1/2 p-4">
                <Card className="relative">
                  <CardContent className="p-6">
                    <Briefcase className="absolute top-4 right-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-muted-foreground mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.period}
                    </p>
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedIndex === index ? "auto" : "0",
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                    <button
                      onClick={() =>
                        setExpandedIndex(expandedIndex === index ? null : index)
                      }
                      className="mt-4 text-primary flex items-center"
                    >
                      {expandedIndex === index ? (
                        <>
                          Menos detalhes <ChevronUp className="ml-1" />
                        </>
                      ) : (
                        <>
                          Mais detalhes <ChevronDown className="ml-1" />
                        </>
                      )}
                    </button>
                  </CardContent>
                </Card>
              </div>
              <div className="w-4 h-4 bg-primary rounded-full relative z-10">
                <div className="w-3 h-3 bg-background rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
