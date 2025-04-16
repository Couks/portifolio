"use client"

import { useEffect } from "react"
import { motion, useAnimate, stagger } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      },
      {
        duration: 0.05,
        delay: stagger(0.05),
      },
    )
  }, [animate])

  const characters = text.split("")

  return (
    <motion.h1 ref={scope} className={cn("relative", className)}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          }}
          style={{
            display: char === " " ? "inline" : "inline-block",
            whiteSpace: "pre",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  )
}
