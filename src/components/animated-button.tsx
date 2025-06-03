"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  href: string
  icon: React.ReactNode
  label: string
  variant?: "default" | "apple" | "apple-primary"
  className?: string // Added className as an optional prop
}

export default function AnimatedButton({ href, icon, label, variant = "default", className }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  if (variant === "apple") {
    return (
      <motion.div
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative flex items-center gap-2 px-5 py-2.5 rounded-full",
            "backdrop-blur-3xl bg-secondary/90 border border-border",
            "text-foreground font-medium",
            "transition-all duration-300",
            "hover:bg-secondary hover:shadow-lg hover:shadow-secondary/20",
            className
          )}
        >
          {/* Icon with subtle glow effect */}
          <motion.span
            className="relative"
            animate={{
              filter: isHovered
                ? "drop-shadow(0 0 4px hsl(var(--secondary)))"
                : "drop-shadow(0 0 0px transparent)",
            }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>

          {/* Label */}
          <span>{label}</span>

          {/* Background glow effect */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-full opacity-20 bg-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </Link>
      </motion.div>
    )
  }

  if (variant === "apple-primary") {
    return (
      <motion.div
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative flex items-center gap-2 px-5 py-2.5 rounded-full",
            "bg-primary border border-border",
            "text-primary-foreground font-medium",
            "transition-all duration-300",
            "hover:shadow-lg hover:shadow-primary/20",
            className 
          )}
        >
          {/* Icon with glow effect */}
          <motion.span
            className="relative"
            animate={{
              filter: isHovered
                ? "drop-shadow(0 0 4px hsl(var(--primary)))"
                : "drop-shadow(0 0 0px transparent)",
            }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>

          {/* Label */}
          <span>{label}</span>

          {/* Background glow effect */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-full opacity-20 bg-primary-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </Link>
      </motion.div>
    )
  }

  // Default variant
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium",
          className 
        )}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </motion.div>
  )
}
