"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import AnimatedText from "./hero-section/animated-text";
import SocialButton from "./hero-section/social-button";
import perfil from "@/assets/linkedin.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen py-12 sm:pt-24 flex sm:items-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary opacity-30" />
      </motion.div>

      <div className="container mx-auto sm:px-24 z-10">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center sm:text-left">
            <AnimatedText
              text="Matheus Castro"
              className="text-5xl sm:text-8xl font-extrabold sm:mb-4 "
            />
            <AnimatedText
              text="Frontend Developer"
              className="text-3xl sm:text-5xl mb-8 text-gray-600 font-medium dark:text-gray-400"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-6 max-w-lg mx-2 sm:mx-0 text-gray-800 dark:text-gray-200 sm:text-lg"
            >
              Hello! I&apos;m a frontend developer passionate about creating
              fluid and accessible interfaces. I design and code beautifully
              simple things, and I love what I do. <br />
              <br />
              Focused on React, Next.js and React Native, I constantly seek to
              improve my skills to deliver exceptional user experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center sm:justify-start"
            >
              <SocialButton
                href="https://github.com/Couks"
                icon={<Github />}
                label="GitHub"
              />
              <SocialButton
                href="https://www.linkedin.com/in/matheuscastroks/"
                icon={<Linkedin />}
                label="LinkedIn"
              />
              <SocialButton
                icon={<Mail />}
                href="mailto:matheuscastroks@gmail.com"
                label="Hire me"
              />
            </motion.div>
          </div>

          <motion.div
            className="flex-1 relative w-2/3 sm:max-w-md aspect-square"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              src={perfil}
              alt="Matheus Castro"
              fill
              sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw, 33vw"
              className="rounded-full object-cover shadow-3xl transition-all duration-300 ease-in-out hover:shadow-primary/50 hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-primary/50 mix-blend-overlay opacity-0 hover:opacity-30 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
