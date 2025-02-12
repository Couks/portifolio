"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import AnimatedText from "./hero-section/animated-text";
import SocialButton from "./hero-section/social-button";

import perfil from "@/assets/linkedin.jpg";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-fit pt-24 pb-10 flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100 to-purple-50 opacity-50" />
      </motion.div>

      <div className="container mx-auto md:px-24 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <AnimatedText
              text="Matheus Castro"
              className="text-4xl md:text-7xl font-bold text-gray-800 md:mb-4"
            />
            <AnimatedText
              text="Desenvolvedor Frontend"
              className="text-xl md:text-3xl text-gray-600 mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-600 mb-6 max-w-lg mx-2 md:mx-0"
            >
              Olá! Sou um desenvolvedor front-end apaixonado por criar
              interfaces fluidas e acessíveis. Focado em React, Next.js e React
              Native, busco constantemente aprimorar minhas habilidades para
              entregar experiências de usuário excepcionais.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center md:justify-start space-x-4"
            >
              <SocialButton
                href="https://github.com/seu-usuario"
                icon={<Github />}
                label="GitHub"
              />
              <SocialButton
                href="https://linkedin.com/in/seu-perfil"
                icon={<Linkedin />}
                label="LinkedIn"
              />
            </motion.div>
          </div>

          <motion.div
            className="flex-1 relative w-2/3 md:max-w-md aspect-square"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              src={perfil}
              alt="Matheus Castro"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-2xl transition-all duration-300 ease-in-out hover:shadow-purple-300/50 hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-purple-300 mix-blend-overlay opacity-0 hover:opacity-30 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
