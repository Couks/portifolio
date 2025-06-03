"use client"

import { ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  index?: number
  isInView?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function AnimatedCard({
  children,
  className,
  delay = 0,
  index = 0,
  isInView = true,
  onMouseEnter,
  onMouseLeave,
}: AnimatedCardProps) {
  const prefersReducedMotion = useReducedMotion()

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: prefersReducedMotion ? 0.2 : 0.6,
        delay: delay || index * 0.1
      }
    },
    hover: prefersReducedMotion ? {} : {
      y: -5,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    },
    tap: prefersReducedMotion ? {} : {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      whileTap="tap"
      className={cn(
        "relative backdrop-blur-lg border shadow-lg rounded-2xl overflow-hidden bg-card/80",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  )
}
