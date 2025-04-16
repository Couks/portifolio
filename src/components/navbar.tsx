"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Home, Briefcase, Code, GraduationCap, Phone, Menu, X } from 'lucide-react'
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about", icon: <Home className="w-4 h-4" /> },
  { name: "Skills", href: "#tech-stack", icon: <Code className="w-4 h-4" /> },
  { name: "Projects", href: "#projects", icon: <Briefcase className="w-4 h-4" /> },
  { name: "Experience", href: "#experience", icon: <GraduationCap className="w-4 h-4" /> },
  { name: "Contact", href: "#contact", icon: <Phone className="w-4 h-4" /> },
]

interface NavItemProps {
  name: string
  href: string
  isActive: boolean
  setActiveItem: (item: string) => void
  icon?: React.ReactNode
  isMobile?: boolean
  showLabels?: boolean
}

function NavItem({ name, href, isActive, setActiveItem, icon, isMobile = false, showLabels = false }: NavItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className={cn("relative", isMobile && "w-full")}
    >
      <Link
        href={href}
        onClick={() => setActiveItem(name)}
        className={cn(
          "group flex items-center gap-3 transition-all duration-300",
          isMobile
            ? "px-4 py-3 text-base justify-start w-full rounded-xl"
            : "p-3 justify-center rounded-full hover:bg-foreground/10",
          isActive
            ? isMobile
              ? "bg-accent text-accent-foreground"
              : "bg-accent text-accent-foreground shadow-lg"
            : "hover:bg-foreground/10"
        )}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "flex items-center justify-center",
            isActive ? "text-accent-foreground" : "text-foreground"
          )}
        >
          {icon}
        </motion.div>
        
        {(showLabels || isMobile) && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            className={cn(
              "text-sm font-medium whitespace-nowrap overflow-hidden",
              isActive ? "text-accent-foreground" : "text-foreground"
            )}
          >
            {name}
          </motion.span>
        )}
        
        {!isMobile && isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute inset-0 rounded-full bg-accent -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </Link>
    </motion.div>
  )
}

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("")
  const [showLabels, setShowLabels] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const navbarRef = useRef<HTMLDivElement>(null)

  // Check if we're on mobile
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

  // Handle scroll behavior to determine active section
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        // Determine active section based on scroll position
        const sections = navItems.map((item) => item.href.substring(1))

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 300 && rect.bottom >= 300) {
              const activeNav = navItems.find((item) => item.href === `#${section}`)
              if (activeNav && activeNav.name !== activeItem) {
                setActiveItem(activeNav.name)
              }
              break
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeItem])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Desktop vertical navbar
  const DesktopNavbar = () => (
    <motion.div
      ref={navbarRef}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={() => setShowLabels(true)}
      onMouseLeave={() => setShowLabels(false)}
    >
      <motion.div
        className="flex flex-col gap-3 p-3 rounded-md backdrop-blur-md border shadow-lg bg-background/80 border-border"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <NavItem
            key={item.name}
            name={item.name}
            href={item.href}
            isActive={activeItem === item.name}
            setActiveItem={setActiveItem}
            icon={item.icon}
            showLabels={showLabels}
          />
        ))}
        
        <div className="my-2 w-full h-px bg-border/50" />
        
        <div className="flex justify-center">
          <ThemeToggle />
        </div>
      </motion.div>
      
      {/* Tooltip labels that appear on hover */}
      <AnimatePresence>
        {showLabels && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: -20 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-1/2 -translate-y-1/2 right-full pr-2 pointer-events-none"
          >
            <div className="flex flex-col gap-[22px] items-end">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={cn(
                    "px-3 py-1.5 rounded-lg shadow-md backdrop-blur-sm text-sm font-medium",
                    activeItem === item.name
                      ? "bg-accent text-accent-foreground"
                      : "bg-background/80 text-foreground"
                  )}
                >
                  {item.name}
                </motion.div>
              ))}
              <div className="h-10" /> {/* Spacer for theme toggle */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )

  // Mobile navbar with hamburger menu
  const MobileNavbar = () => (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 rounded-full backdrop-blur-md border shadow-lg bg-background/80 border-border"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 left-4 right-4 z-50 rounded-2xl border shadow-lg bg-background/95 backdrop-blur-md p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-foreground">Navigation</h3>
              <ThemeToggle />
            </div>

            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavItem
                  key={item.name}
                  name={item.name}
                  href={item.href}
                  isActive={activeItem === item.name}
                  setActiveItem={(name) => {
                    setActiveItem(name)
                    setIsMobileMenuOpen(false)
                  }}
                  icon={item.icon}
                  isMobile={true}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />
}

