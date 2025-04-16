"use client"

import { ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionLayoutProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  contentClassName?: string
}

export default function SectionLayout({
  id,
  title,
  subtitle,
  children,
  className,
  titleClassName,
  subtitleClassName,
  contentClassName,
}: SectionLayoutProps) {

  // const { scrollY } = useScroll()
  // const opacity = useTransform(scrollY, [0, 300], [1, 0])
  // const scale = useTransform(scrollY, [0, 300], [1, 0.95])
  // const y = useTransform(scrollY, [0, 300], [0, 50])

  return (
    <section
      id={id}
      className={cn(
        "relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-16 lg:py-24",
        className
      )}
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-background" />

        {/* Blurred circles - subtle iOS style */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 md:w-96 md:h-96 rounded-full bg-purple-500/10 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-96 md:h-96 rounded-full bg-purple-500/10 blur-[120px] translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-56 h-56 md:w-64 md:h-64 rounded-full bg-purple-500/10 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      <motion.div 
      // style={{ opacity, scale, y }} 
      className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section header - consistent across all sections */}
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground",
                  titleClassName
                )}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className={cn(
                  "mt-4 text-lg text-muted-foreground max-w-2xl mx-auto",
                  subtitleClassName
                )}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        {/* Section content */}
        <div className={cn("w-full", contentClassName)}>
          {children}
        </div>
      </motion.div>
    </section>
  )
}
