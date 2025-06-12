"use client";

import React from "react";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import {
  Home,
  Briefcase,
  Code,
  // GraduationCap,
  Phone,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/hooks/useTranslation";

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

  const handleClick = useCallback(() => {
    setActiveItem(name);
  }, [name, setActiveItem]);

  const itemVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: prefersReducedMotion ? 0.1 : 0.6
      }
    },
    hover: prefersReducedMotion ? {} : {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    },
    tap: prefersReducedMotion ? {} : {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    }
  };

  const labelVariants = {
    hidden: { 
      width: 0, 
      opacity: 0,
      marginLeft: 0
    },
    visible: { 
      width: "auto", 
      opacity: 1,
      marginLeft: 8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: prefersReducedMotion ? 0.1 : 0.3
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      className={cn("relative", isMobile && "w-full")}
      layout={!prefersReducedMotion}
      layoutId={!isMobile ? `nav-item-${name}` : undefined}
    >
      <Link
        href={href}
        onClick={handleClick}
        className={cn(
          "group flex items-center transition-colors duration-200",
          isMobile
            ? "px-4 py-3 text-sm justify-start w-full rounded-xl"
            : "p-3 justify-center rounded-full hover:bg-foreground/10",
          isActive
            ? isMobile
              ? "bg-accent text-accent-foreground"
              : "bg-accent text-accent-foreground shadow-lg"
            : "hover:bg-foreground/10"
        )}
      >
        <motion.div
          className={cn(
            "flex items-center justify-center",
            isActive ? "text-accent-foreground" : "text-foreground"
          )}
          animate={prefersReducedMotion ? {} : {
            rotate: isActive ? [0, 10, -10, 0] : 0
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          {icon}
        </motion.div>

        <AnimatePresence mode="wait">
          {(showLabels || isMobile) && (
            <motion.span
              variants={labelVariants}
              initial={!isMobile ? "hidden" : "visible"}
              animate="visible"
              exit="hidden"
              className={cn(
                "text-sm font-medium whitespace-nowrap overflow-hidden",
                isActive ? "text-accent-foreground" : "text-foreground"
              )}
            >
              {name}
            </motion.span>
          )}
        </AnimatePresence>

        {!isMobile && isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute inset-0 rounded-full bg-accent -z-10"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              duration: prefersReducedMotion ? 0.1 : 0.5
            }}
          />
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

interface MobileNavbarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const DesktopNavbar = React.memo(function DesktopNavbar({
  activeItem,
  setActiveItem,
  showLabels,
  setShowLabels,
}: NavbarContentProps) {
  const navbarRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { navigation } = useTranslation();

  const navItems = useMemo(() => [
    { name: navigation('about'), href: "#about", icon: <Home className="w-4 h-4" /> },
    { name: navigation('tech'), href: "#tech-stack", icon: <Code className="w-4 h-4" /> },
    { name: navigation('projects'), href: "#projects", icon: <Briefcase className="w-4 h-4" /> },
    { name: navigation('contact'), href: "#contact", icon: <Phone className="w-4 h-4" /> },
  ], [navigation]);

  const navbarVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: prefersReducedMotion ? 0.2 : 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      ref={navbarRef}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed right-2 top-1/3 -translate-y-1/2 z-50"
      onMouseEnter={() => setShowLabels(true)}
      onMouseLeave={() => setShowLabels(false)}
      whileHover={prefersReducedMotion ? {} : {
        scale: 1.02,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25
        }
      }}
    >
      <motion.div 
        className="flex items-center flex-col gap-3 p-3 rounded-md backdrop-blur-lg border shadow-lg bg-background/80 border-border"
        variants={containerVariants}
        layout={!prefersReducedMotion}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            custom={index}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  delay: index * 0.1
                }
              }
            }}
          >
            <NavItem
              name={item.name}
              href={item.href}
              isActive={activeItem === item.name}
              setActiveItem={setActiveItem}
              icon={item.icon}
              showLabels={showLabels}
            />
          </motion.div>
        ))}

        <motion.div 
          className="my-2 w-full h-px bg-border/50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.5,
            duration: prefersReducedMotion ? 0.1 : 0.3,
            ease: "easeOut"
          }}
        />

        <motion.div 
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: prefersReducedMotion ? 0.1 : 0.4,
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
        >
          <LanguageToggle showLabel={showLabels} />
          <ThemeToggle />
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

// Mobile navbar component - ATUALIZADO
const MobileNavbar = React.memo(function MobileNavbar({
  activeItem,
  setActiveItem,
  isMobileMenuOpen,
  toggleMobileMenu,
}: MobileNavbarProps) {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { navigation } = useTranslation();

  const navItems = useMemo(() => [
    { name: navigation('about'), href: "#about", icon: <Home className="w-4 h-4" /> },
    { name: navigation('tech'), href: "#tech-stack", icon: <Code className="w-4 h-4" /> },
    { name: navigation('projects'), href: "#projects", icon: <Briefcase className="w-4 h-4" /> },
    { name: navigation('contact'), href: "#contact", icon: <Phone className="w-4 h-4" /> },
  ], [navigation]);

  const handleNavItemClick = useCallback(
    (name: string) => {
      setActiveItem(name);
      toggleMobileMenu();
    },
    [setActiveItem, toggleMobileMenu]
  );

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
    document.addEventListener("mousedown", handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, toggleMobileMenu]);

  const buttonVariants = {
    closed: { rotate: 0, scale: 1 },
    open: { 
      rotate: prefersReducedMotion ? 0 : 45,
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    }
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      transition: { duration: prefersReducedMotion ? 0.1 : 0.2, ease: "easeIn" }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: prefersReducedMotion ? 0.2 : 0.4,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  return (
    <>
      <div className="fixed bottom-4 left-4 z-50">
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              className="absolute bottom-full mb-4"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.div 
                className="flex items-center flex-col gap-3 p-3 rounded-md backdrop-blur-lg border shadow-lg bg-background/80 border-border"
                layout={!prefersReducedMotion}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { type: "spring", stiffness: 400, damping: 30, delay: index * 0.05 }
                      }
                    }}
                  >
                    <NavItem
                      name={item.name}
                      href={item.href}
                      isActive={activeItem === item.name}
                      setActiveItem={handleNavItemClick}
                      icon={item.icon}
                      isMobile={false}
                      showLabels={true}
                    />
                  </motion.div>
                ))}
                <motion.div 
                  className="my-2 w-full h-px bg-border/50"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: prefersReducedMotion ? 0.1 : 0.3, ease: "easeOut" }}
                />
                <motion.div 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: prefersReducedMotion ? 0.1 : 0.4, type: "spring", stiffness: 300, damping: 25 }}
                >
                  <LanguageToggle showLabel={true} />
                  <ThemeToggle />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggleMobileMenu}
          variants={buttonVariants}
          animate={isMobileMenuOpen ? "open" : "closed"}
          className="flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-lg border shadow-lg bg-background/80 border-border hover:bg-foreground/10 transition-colors"
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>
    </>
  );
});

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("");
  const [showLabels, setShowLabels] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isUserClicking, setIsUserClicking] = useState(false);
  const { navigation } = useTranslation();

  const navItems = useMemo(() => [
    { name: navigation('about'), href: "#about" },
    { name: navigation('tech'), href: "#tech-stack" },
    { name: navigation('projects'), href: "#projects" },
    { name: navigation('contact'), href: "#contact" },
  ], [navigation]);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleSetActiveItem = useCallback((item: string) => {
    setIsUserClicking(true);
    setActiveItem(item);
    setTimeout(() => {
      setIsUserClicking(false);
    }, 1000);
  }, []);

  useEffect(() => {
    handleResize();
    if (typeof ResizeObserver !== "undefined") {
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(document.documentElement);
      return () => resizeObserver.disconnect();
    } else {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [handleResize]);

  useEffect(() => {
    const sectionObservers: IntersectionObserver[] = [];
    let timeoutId: NodeJS.Timeout;

    const sections = navItems.map((item) => item.href.substring(1));
    const visibleSections = new Set<string>();

    // Debounce function to prevent rapid state changes
    const debouncedSetActiveItem = (sectionName: string) => {
      // Don't update from scroll if user just clicked
      if (isUserClicking) return;
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setActiveItem(sectionName);
      }, 150);
    };

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const activeNav = navItems.find(
              (item) => item.href === `#${section}`
            );
            
            if (!activeNav) return;

            if (entry.isIntersecting) {
              visibleSections.add(activeNav.name);
            } else {
              visibleSections.delete(activeNav.name);
            }

            // Only update if we have visible sections and user is not actively clicking
            if (visibleSections.size > 0 && !isUserClicking) {
              // Get the first visible section (topmost)
              const firstVisibleSection = Array.from(visibleSections)[0];
              
              // Only update if it's different from current active item
              if (firstVisibleSection !== activeItem) {
                debouncedSetActiveItem(firstVisibleSection);
              }
            }
          });
        },
        { 
          rootMargin: "-20% 0px -20% 0px", 
          threshold: [0, 0.1, 0.5, 0.9, 1]
        }
      );

      observer.observe(element);
      sectionObservers.push(observer);
    });

    return () => {
      clearTimeout(timeoutId);
      sectionObservers.forEach((observer) => observer.disconnect());
    };
  }, [activeItem, isUserClicking, navItems]);

  return isMobile ? (
    <MobileNavbar
      activeItem={activeItem}
      setActiveItem={handleSetActiveItem}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
    />
  ) : (
    <DesktopNavbar
      activeItem={activeItem}
      setActiveItem={handleSetActiveItem}
      showLabels={showLabels}
      setShowLabels={setShowLabels}
    />
  );
}
