"use client";

import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import {
  Home,
  Briefcase,
  Code,
  GraduationCap,
  Phone,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about", icon: <Home className="w-4 h-4" /> },
  { name: "Skills", href: "#tech-stack", icon: <Code className="w-4 h-4" /> },
  {
    name: "Projects",
    href: "#projects",
    icon: <Briefcase className="w-4 h-4" />,
  },
  // {
  //   name: "Experience",
  //   href: "#experience",
  //   icon: <GraduationCap className="w-4 h-4" />,
  // },
  { name: "Contact", href: "#contact", icon: <Phone className="w-4 h-4" /> },
];

interface NavItemProps {
  name: string;
  href: string;
  isActive: boolean;
  setActiveItem: (item: string) => void;
  icon?: React.ReactNode;
  isMobile?: boolean;
  showLabels?: boolean;
}

// Memoized NavItem component to prevent unnecessary re-renders
const NavItem = React.memo(function NavItem({
  name,
  href,
  isActive,
  setActiveItem,
  icon,
  isMobile = false,
  showLabels = false,
}: NavItemProps) {
  const prefersReducedMotion = useReducedMotion();

  // Optimize animations based on user preferences
  const animationDuration = prefersReducedMotion ? 0 : 0.2;
  const springTransition = prefersReducedMotion
    ? { type: "tween", duration: 0.1 }
    : { type: "spring", duration: 0.4, bounce: 0.1 };

  const handleClick = useCallback(() => {
    setActiveItem(name);
  }, [name, setActiveItem]);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: animationDuration }}
      className={cn("relative", isMobile && "w-full")}
    >
      <Link
        href={href}
        onClick={handleClick}
        className={cn(
          "group flex items-center gap-3 transition-all",
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
        <div
          className={cn(
            "flex items-center justify-center",
            isActive ? "text-accent-foreground" : "text-foreground"
          )}
        >
          {icon}
        </div>

        {(showLabels || isMobile) && (
          <span
            className={cn(
              "text-sm font-medium whitespace-nowrap overflow-hidden transition-all",
              isActive ? "text-accent-foreground" : "text-foreground",
              !showLabels && !isMobile ? "w-0 opacity-0" : "w-auto opacity-100"
            )}
            style={{
              transitionDuration: `${animationDuration}s`,
              transitionProperty: "opacity, width",
            }}
          >
            {name}
          </span>
        )}

        {!isMobile && isActive && !prefersReducedMotion && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute inset-0 rounded-full bg-accent -z-10"
            transition={springTransition}
          />
        )}

        {/* Fallback for reduced motion */}
        {!isMobile && isActive && prefersReducedMotion && (
          <div className="absolute inset-0 rounded-full bg-accent -z-10" />
        )}
      </Link>
    </motion.div>
  );
});

// Define proper component functions instead of memoized JSX
interface NavbarContentProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  showLabels?: boolean;
  setShowLabels: (show: boolean) => void;
}

interface MobileNavbarProps extends NavbarContentProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

// Desktop navbar component
const DesktopNavbar = React.memo(function DesktopNavbar({
  activeItem,
  setActiveItem,
  showLabels,
  setShowLabels,
}: NavbarContentProps) {
  const navbarRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const animationDuration = prefersReducedMotion ? 0 : 0.3;

  return (
    <motion.div
      ref={navbarRef}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
      transition={{ duration: animationDuration }}
      className="fixed right-2 top-1/3 -translate-y-1/2 z-50"
      onMouseEnter={() => setShowLabels(true)}
      onMouseLeave={() => setShowLabels(false)}
    >
      <div className="flex flex-col gap-3 p-3 rounded-md backdrop-blur-md border shadow-lg bg-background/80 border-border">
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
      </div>
    </motion.div>
  );
});

// Mobile navbar component
const MobileNavbar = React.memo(function MobileNavbar({
  activeItem,
  setActiveItem,
  isMobileMenuOpen,
  toggleMobileMenu,
}: MobileNavbarProps) {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const animationDuration = prefersReducedMotion ? 0 : 0.3;

  const handleNavItemClick = useCallback(
    (name: string) => {
      setActiveItem(name);
      toggleMobileMenu();
    },
    [setActiveItem, toggleMobileMenu]
  );

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        toggleMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside, {
      passive: true,
    });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, toggleMobileMenu]);

  return (
    <>
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-3 rounded-full backdrop-blur-md border shadow-lg bg-background/80 border-border transform transition-transform active:scale-95 hover:scale-105"
          style={{ transitionDuration: `${animationDuration}s` }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -20 }
            }
            animate={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            exit={
              prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ duration: animationDuration }}
            className="fixed top-20 left-4 right-4 z-50 rounded-2xl border shadow-lg bg-background/95 backdrop-blur-md p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                Navigation
              </h3>
              <ThemeToggle />
            </div>

            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavItem
                  key={item.name}
                  name={item.name}
                  href={item.href}
                  isActive={activeItem === item.name}
                  setActiveItem={handleNavItemClick}
                  icon={item.icon}
                  isMobile={true}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("");
  const [showLabels, setShowLabels] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Memoized event handlers
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Check if we're on mobile - with ResizeObserver for better performance
  useEffect(() => {
    handleResize();

    // Use ResizeObserver instead of resize event when available
    if (typeof ResizeObserver !== "undefined") {
      const resizeObserver = new ResizeObserver(() => {
        handleResize();
      });

      resizeObserver.observe(document.documentElement);
      return () => resizeObserver.disconnect();
    } else {
      // Fallback to resize event
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [handleResize]);

  // Handle scroll behavior with Intersection Observer for better performance
  useEffect(() => {
    const sectionObservers: IntersectionObserver[] = [];

    const sections = navItems.map((item) => item.href.substring(1));

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const activeNav = navItems.find(
                (item) => item.href === `#${section}`
              );
              if (activeNav && activeNav.name !== activeItem) {
                setActiveItem(activeNav.name);
              }
            }
          });
        },
        { rootMargin: "-300px 0px -300px 0px", threshold: 0 }
      );

      observer.observe(element);
      sectionObservers.push(observer);
    });

    return () => {
      sectionObservers.forEach((observer) => observer.disconnect());
    };
  }, [activeItem]);

  return isMobile ? (
    <MobileNavbar
      activeItem={activeItem}
      setActiveItem={setActiveItem}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
      showLabels={false}
      setShowLabels={() => {}}
    />
  ) : (
    <DesktopNavbar
      activeItem={activeItem}
      setActiveItem={setActiveItem}
      showLabels={showLabels}
      setShowLabels={setShowLabels}
    />
  );
}
