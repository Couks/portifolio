"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import perfil from "@/assets/linkedin.jpg";
import AnimatedText from "../animated-text";
import AnimatedButton from "../animated-button";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-20 md:pb-0 md:pt-20 flex flex-col md:items-center jusitfy-center overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary opacity-30" />
      </motion.div>

      <div className="container mx-auto md:px-24 mb-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <AnimatedText
              text="Matheus Castro"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold md:mb-4"
            />
            <AnimatedText
              text="Frontend Developer"
              className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-600 font-medium dark:text-gray-400"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-6 max-w-lg mx-2 md:mx-0 text-gray-800 dark:text-gray-200 text-base md:text-lg"
            >
              Hi there!🖐️ <br />
              <br />
              I&apos;m passionate about creating fluid and accessible
              interfaces. I design and code beautifully simple things, and I
              love what I do. <br />
              <br />
              Focused on React, Next.js and React Native, I constantly seek to
              improve my skills to deliver exceptional user experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start"
            >
              <AnimatedButton
                href="https://github.com/Couks"
                icon={<Github />}
                label="GitHub"
                variant="apple"
              />
              <AnimatedButton
                href="https://www.linkedin.com/in/matheuscastroks/"
                icon={<Linkedin />}
                label="LinkedIn"
                variant="apple"
              />
              <AnimatedButton
                icon={<Mail />}
                href="mailto:matheuscastroks@gmail.com"
                label="Hire me"
                variant="apple"
              />
            </motion.div>
          </div>

          <motion.div
            className="flex-1 relative w-1/2 md:max-w-md aspect-square"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              src={perfil}
              alt="Matheus Castro"
              fill
              sizes="(max-width: 480px) 66vw, 
                     (max-width: 768px) 50vw,
                     (max-width: 1024px) 40vw,
                     (max-width: 1200px) 33vw,
                     25vw"
              className="rounded-full object-cover shadow-3xl transition-all duration-300 ease-in-out hover:shadow-primary/50 hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-primary/50 mix-blend-overlay opacity-0 hover:opacity-30 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
