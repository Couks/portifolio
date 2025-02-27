"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "../theme-toggle";
import { Home, Briefcase, Phone, Star } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about", icon: <Home /> },
  { name: "Projects", href: "#projects", icon: <Briefcase /> },
  { name: "Experience", href: "#experience", icon: <Star /> },
  { name: "Contact", href: "#contact", icon: <Phone /> },
];

interface NavItemProps {
  name: string;
  href: string;
  isActive: boolean;
  setActiveItem: (item: string) => void;
  index: number;
  iconOnly?: boolean;
  icon?: React.ReactNode;
}

export function NavItem({
  name,
  href,
  isActive,
  setActiveItem,
  index,
  iconOnly = false,
  icon = null,
}: NavItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.4, delay: index * 0.2 }}
    >
      <Link
        href={href}
        onClick={() => setActiveItem(name)}
        className={`px-3 py-2 rounded-full text-sm font-medium ${
          isActive
            ? "text-primary dark:text-secondary sm:bg-foreground/10 sm:dark:bg-white"
            : "text-foreground hover:text-primary "
        }`}
      >
        {iconOnly ? icon : name}
      </Link>
    </motion.div>
  );
}

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("");

  return (
    <>
      <motion.nav
        initial={{ x: "-80%" }}
        animate={{ x: "calc(100vw - 100%)" }}
        transition={{ type: "spring", duration: 2, bounce: 0.6 }}
        className="fixed top-2 w-full hidden md:block z-50 "
      >
        <div className="flex w-fit mx-auto px-2 gap-8 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-20 backdrop-blur-md shadow-lg rounded-full">
          <div className="flex justify-around items-center gap-4 h-12">
            <div className="hidden md:flex gap-2">
              {navItems.map((item, index) => (
                <NavItem
                  key={item.name}
                  name={item.name}
                  href={item.href}
                  isActive={activeItem === item.name}
                  setActiveItem={setActiveItem}
                  index={index}
                />
              ))}
            </div>
            <div className="bg-gray-900 dark:bg-white bg w-[2px] h-6 rounded-full"></div>
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      <motion.nav
        initial={{ x: "-80%" }}
        animate={{ x: "calc(100vw - 100%)" }}
        transition={{ type: "spring", duration: 2, bounce: 0.6 }}
        className="fixed bottom-2 w-full block md:hidden z-50"
      >
        <div className="flex w-fit mx-auto px-2 gap-8 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-20 backdrop-blur-md shadow-lg rounded-full">
          <div className="flex justify-around items-center gap-4 h-12">
            <div className="flex gap-8">
              {navItems.map((item, index) => (
                <NavItem
                  key={item.name}
                  name={item.name}
                  href={item.href}
                  isActive={activeItem === item.name}
                  setActiveItem={setActiveItem}
                  index={index}
                  iconOnly={true}
                  icon={item.icon}
                />
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>
    </>
  );
}
