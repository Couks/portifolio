"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiNestjs,
  SiPostgresql,
  SiDocker,
} from "react-icons/si"
import { FaNode } from "react-icons/fa"

const dockIcons = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Node.js", icon: FaNode, color: "#339933" },
  { name: "GraphQL", icon: SiGraphql, color: "#E535AB" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
]

const TechDock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.2 }}
      className="flex justify-center mt-8 md:mt-16 px-4 md:px-0"
    >
      <div className="relative w-full md:w-auto">
        <div
          className="flex items-end justify-center px-2 md:px-4 py-2 md:py-3 rounded-2xl backdrop-blur-lg bg-gray-800/30 border border-gray-700/50 overflow-x-auto md:overflow-visible"
          style={{
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="flex gap-1 md:gap-2">
            {dockIcons.map((icon, index) => {
              const isHovered = hoveredIndex === index

              return (
                <motion.div
                  key={index}
                  className="relative flex-shrink-0 flex flex-col items-center"
                  onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                  onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                  onTouchStart={() => isMobile && setHoveredIndex(index)}
                  onTouchEnd={() => isMobile && setHoveredIndex(null)}
                  initial={{ y: 0 }}
                  animate={{
                    y: isHovered && !isMobile ? -10 : 0,
                    scale: isHovered && !isMobile ? 1.2 : 1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                >
                  <div
                    className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gray-900/80 backdrop-blur-md"
                    style={{
                      boxShadow: isHovered && !isMobile ? "0 10px 15px -3px rgba(0, 0, 0, 0.3)" : "none",
                    }}
                  >
                    <icon.icon style={{ color: icon.color }} className="text-lg md:text-2xl" />
                  </div>

                  <AnimatePresence>
                    {isHovered && !isMobile && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: -10 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute bottom-full mb-2 px-2 py-1 rounded-md bg-gray-800 text-xs whitespace-nowrap z-10"
                      >
                        {icon.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TechDock
