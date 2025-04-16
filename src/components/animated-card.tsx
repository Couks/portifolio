"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.2, delay: delay || index * 0.1 }}
      className={cn(
        "relative backdrop-blur-sm border shadow-lg rounded-2xl overflow-hidden bg-card/80",
        className
      )}
      whileHover={{
        y: -5,
        scale: 1.02,
        transition: { duration: 0.2 },
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  )
}
