"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  href: string
  icon: React.ReactNode
  label: string
  variant?: "default" | "apple" | "apple-primary"
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  disabled?: boolean
}

export default function AnimatedButton({ 
  href, 
  icon, 
  label, 
  variant = "default", 
  className,
  onClick,
  disabled 
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: prefersReducedMotion ? 0.2 : 0.6
      }
    },
    hover: prefersReducedMotion ? {} : {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    },
    tap: prefersReducedMotion ? {} : {
      scale: 0.98,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    }
  }

  const iconVariants = {
    rest: { 
      scale: 1,
      rotate: 0,
      filter: "drop-shadow(0 0 0px transparent)"
    },
    hover: prefersReducedMotion ? {} : {
      scale: 1.1,
      rotate: 5,
      filter: variant === "apple" 
        ? "drop-shadow(0 0 8px hsl(var(--secondary)))"
        : variant === "apple-primary"
        ? "drop-shadow(0 0 8px hsl(var(--primary)))"
        : "drop-shadow(0 0 4px hsl(var(--primary)))",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  const glowVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: { 
      opacity: variant === "apple-primary" ? 0.15 : 0.1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  }

  if (variant === "apple") {
    return (
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover={disabled ? {} : "hover"}
        whileTap={disabled ? {} : "tap"}
        onHoverStart={() => !disabled && setIsHovered(true)}
        onHoverEnd={() => !disabled && setIsHovered(false)}
        className="relative"
      >
        <Link
          href={disabled ? "#" : href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={cn(
            "relative flex items-center gap-2 px-5 py-2.5 rounded-full",
            "backdrop-blur-lg bg-secondary/90 border border-border",
            "text-foreground font-medium",
            "transition-all duration-300",
            "hover:bg-secondary hover:shadow-lg hover:shadow-secondary/20",
            "overflow-hidden",
            disabled && "opacity-50 cursor-not-allowed pointer-events-none",
            className
          )}
        >
          {/* Icon with enhanced animations */}
          <motion.span
            variants={iconVariants}
            animate={isHovered ? "hover" : "rest"}
            className="relative z-10"
          >
            {icon}
          </motion.span>

          {/* Label with subtle slide effect */}
          <motion.span
            initial={{ x: 0 }}
            animate={prefersReducedMotion ? {} : {
              x: isHovered ? 2 : 0
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
            className="relative z-10"
          >
            {label}
          </motion.span>

          {/* Enhanced background glow effect */}
          {isHovered && (
            <motion.div
              variants={glowVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute inset-0 rounded-full bg-secondary"
            />
          )}

          {/* Shimmer effect */}
          {isHovered && !prefersReducedMotion && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)"
              }}
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 0.6,
                ease: "easeInOut"
              }}
            />
          )}
        </Link>
      </motion.div>
    )
  }

  if (variant === "apple-primary") {
    return (
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover={disabled ? {} : "hover"}
        whileTap={disabled ? {} : "tap"}
        onHoverStart={() => !disabled && setIsHovered(true)}
        onHoverEnd={() => !disabled && setIsHovered(false)}
        className="relative"
      >
        <Link
          href={disabled ? "#" : href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={cn(
            "relative flex items-center gap-2 px-5 py-2.5 rounded-full",
            "bg-primary border border-border",
            "text-primary-foreground font-medium",
            "transition-all duration-300",
            "hover:shadow-lg hover:shadow-primary/20",
            "overflow-hidden",
            disabled && "opacity-50 cursor-not-allowed pointer-events-none",
            className
          )}
        >
          {/* Icon with enhanced animations */}
          <motion.span
            variants={iconVariants}
            animate={isHovered ? "hover" : "rest"}
            className="relative z-10"
          >
            {icon}
          </motion.span>

          {/* Label with subtle slide effect */}
          <motion.span
            initial={{ x: 0 }}
            animate={prefersReducedMotion ? {} : {
              x: isHovered ? 2 : 0
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
            className="relative z-10"
          >
            {label}
          </motion.span>

          {/* Enhanced background glow effect */}
          {isHovered && (
            <motion.div
              variants={glowVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute inset-0 rounded-full bg-primary-foreground"
            />
          )}

          {/* Shimmer effect */}
          {isHovered && !prefersReducedMotion && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)"
              }}
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 0.6,
                ease: "easeInOut"
              }}
            />
          )}
        </Link>
      </motion.div>
    )
  }

  // Default variant with enhanced animations
  return (
    <motion.div 
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover={disabled ? {} : "hover"}
      whileTap={disabled ? {} : "tap"}
      onHoverStart={() => !disabled && setIsHovered(true)}
      onHoverEnd={() => !disabled && setIsHovered(false)}
    >
      <Link
        href={disabled ? "#" : href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={cn(
          "relative flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium overflow-hidden",
          disabled && "opacity-50 cursor-not-allowed pointer-events-none",
          className
        )}
      >
        {/* Icon with animations */}
        <motion.span
          variants={iconVariants}
          animate={isHovered ? "hover" : "rest"}
        >
          {icon}
        </motion.span>

        {/* Label */}
        <motion.span
          animate={prefersReducedMotion ? {} : {
            x: isHovered ? 1 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25
          }}
        >
          {label}
        </motion.span>
      </Link>
    </motion.div>
  )
}
