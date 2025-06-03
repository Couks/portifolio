"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from 'lucide-react'
import SectionLayout from "../section-layout"
import linkedin from "@/assets/gif.gif"
import AnimatedText from "../animated-text"
import AnimatedButton from "../animated-button"

export default function Hero() {
  return (
    <SectionLayout id="about" title="" className="min-h-screen">
      <div
        className="w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            className="order-1 lg:order-2 relative mx-auto w-60 h-60 sm:w-64 sm:h-64 lg:w-[100%] lg:h-[100%]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.2 }}
          >
            <div className="relative w-full h-full">
              {/* iOS-style image container with subtle effects */}
              <div className="absolute -inset-4 rounded-lg bg-gradient-to-tr from-primary/5 to-primary/10 backdrop-blur-sm border border-primary/10 shadow-xl" />
              
              <Image
                src={linkedin || "/placeholder.svg"}
                alt="Matheus Castro"
                unoptimized
                fill
                priority
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 384px"
                className="rounded-md object-cover shadow-xl"
              />
              <div className="absolute right-4 bg-red--500"></div>
              
              {/* Subtle reflection overlay */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-primary/10 to-transparent opacity-50" />
              
              {/* Subtle floating animation */}
              <motion.div
                className="absolute -inset-0.5 rounded-[32px]"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-8">
              <div>
                <AnimatedText
                  text="Matheus Castro"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
                />
                <AnimatedText
                  text="Frontend Developer"
                  className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium mt-2"
                />
              </div>

              {/* Bio with subtle backdrop blur */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.2 }}
                className="relative backdrop-blur-md bg-primary/5 rounded-2xl p-6 border border-primary/10"
              >
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Hi there! 👋 <br />
                  <br />
                  I&apos;m passionate about creating fluid and accessible interfaces. I design and code beautifully
                  simple things, and I love what I do. <br />
                  <br />
                  Focused on React, Next.js and React Native, I constantly seek to improve my skills to deliver
                  exceptional user experiences.
                </p>
              </motion.div>

              {/* Social buttons - iOS style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.2 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <AnimatedButton
                  href="https://github.com/Couks"
                  icon={<Github className="w-5 h-5" />}
                  label="GitHub"
                  variant="apple"
                />
                <AnimatedButton
                  href="https://www.linkedin.com/in/matheuscastroks/"
                  icon={<Linkedin className="w-5 h-5" />}
                  label="LinkedIn"
                  variant="apple"
                />
                <AnimatedButton
                  href="mailto:matheuscastroks@gmail.com"
                  icon={<Mail className="w-5 h-5" />}
                  label="Hire me"
                  variant="apple-primary"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
