"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import AnimatedText from "./hero-section/animated-text";
import SocialButton from "./hero-section/social-button";
import perfil from "@/assets/linkedin.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen md:pt-24 flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary opacity-30" />
      </motion.div>

      <div className="container mx-auto md:px-24 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <AnimatedText
              text="Matheus Castro"
              className="text-4xl md:text-7xl font-bold md:mb-4"
            />
            <AnimatedText
              text="Frontend Developer"
              className="text-xl md:text-3xl mb-8 text-gray-600 dark:text-gray-400"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-6 max-w-lg mx-2 md:mx-0 text-gray-800 dark:text-gray-200"
            >
              Hello! I&apos;m a frontend developer passionate about creating
              fluid and accessible interfaces. I design and code beautifully
              simple things, and I love what I do. <br />
              Focused on React, Next.js and React Native, I constantly seek to
              improve my skills to deliver exceptional user experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center md:justify-start space-x-4"
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
              className="rounded-full shadow-3xl transition-all duration-300 ease-in-out hover:shadow-primary/50 hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-primary/50 mix-blend-overlay opacity-0 hover:opacity-30 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
