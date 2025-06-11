"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Github, Linkedin, Mail } from 'lucide-react'
import SectionLayout from "../section-layout"
import linkedin from "@/assets/gif.gif"
import AnimatedText from "../animated-text"
import AnimatedButton from "../animated-button"
import AnimatedCard from "../animated-card"
import { useTranslation } from "@/lib/hooks/useTranslation"

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const { hero } = useTranslation()

  const imageContainerVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: 0.2,
        duration: prefersReducedMotion ? 0.1 : 0.8
      }
    }
  }

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 1.1
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: prefersReducedMotion ? 0.1 : 0.6,
        ease: "easeOut"
      }
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: prefersReducedMotion ? 0.1 : 0.4
      }
    }
  }

  return (
    <SectionLayout id="about" title="" className="min-h-screen">
      <div
        className="w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            className="order-1 lg:order-2 relative mx-auto w-60 h-60 sm:w-64 sm:h-64 lg:w-[100%] lg:h-[100%]"
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
            whileHover={prefersReducedMotion ? {} : {
              scale: 1.02,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
              }
            }}
          >
            <div className="relative w-full h-full">
              {/* iOS-style image container with subtle effects */}
              <motion.div 
                className="absolute -inset-4 rounded-lg bg-gradient-to-tr from-primary/5 to-primary/10 backdrop-blur-sm border border-primary/10 shadow-xl" 
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                whileHover={prefersReducedMotion ? {} : {
                  scale: 1.01,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
              />
              
              <motion.div
                className="relative w-full h-full overflow-hidden rounded-md"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
              >
                <Image
                  src={linkedin || "/placeholder.svg"}
                  alt={hero('name')}
                  unoptimized
                  fill
                  priority
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 384px"
                  className="rounded-md object-cover shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
              
              {/* Subtle reflection overlay */}
              <motion.div 
                className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-primary/10 to-transparent opacity-50" 
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
              />
              
              {/* Subtle floating animation */}
              <motion.div
                className="absolute -inset-0.5 rounded-[32px]"
                animate={prefersReducedMotion ? {} : {
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />

              {/* Animated border glow */}
              <motion.div
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0"
                animate={prefersReducedMotion ? {} : {
                  opacity: [0, 0.3, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-8">
              <div>
                <AnimatedText
                  text={hero('name')}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
                />
                <AnimatedText
                  text={hero('title')}
                  className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium mt-2"
                />
                <AnimatedText
                  text={hero('subtitle')}
                  className="text-sm text-foreground dark:text-primary font-medium mt-3"
                />
              </div>

              {/* Bio with subtle backdrop blur */}
              <AnimatedCard
                delay={0.4}
                className="relative p-6"
              >
                <p 
                  className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                  dangerouslySetInnerHTML={{ __html: hero('bio') }}
                />
              </AnimatedCard>

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
                  label={hero('buttons.github')}
                  variant="apple-primary"
                />
                <AnimatedButton
                  href="https://www.linkedin.com/in/matheuscastroks/"
                  icon={<Linkedin className="w-5 h-5" />}
                  label={hero('buttons.linkedin')}
                  variant="apple-primary"
                />
                <AnimatedButton
                  href="mailto:matheuscastroks@gmail.com"
                  icon={<Mail className="w-5 h-5" />}
                  label={hero('buttons.hire')}
                  variant="apple"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
