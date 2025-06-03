"use client"

import { useEffect } from "react"
import { motion, useAnimate, stagger, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export default function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
  const [scope, animate] = useAnimate()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      animate(
        "span",
        {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        {
          duration: 0.1,
          delay: delay,
        },
      )
    } else {
      animate(
        "span",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
        },
        {
          duration: 0.4,
          delay: stagger(0.03, { startDelay: delay }),
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      )
    }
  }, [animate, delay, prefersReducedMotion])

  const characters = text.split("")

  return (
    <motion.h1 
      ref={scope} 
      className={cn("relative overflow-hidden", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.8,
            rotateX: -90,
          }}
          style={{
            display: char === " " ? "inline" : "inline-block",
            whiteSpace: "pre",
            transformOrigin: "bottom center",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  )
}
