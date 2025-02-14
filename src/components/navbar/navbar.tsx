"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "../theme-toggle";
import { Home, Code, Briefcase, Phone, Star } from "lucide-react"; // Import icons from lucide-react
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about", icon: <Home /> },
  { name: "Stacks", href: "#stacks", icon: <Code /> },
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href}>
        <motion.a
          className={`px-3 py-2 rounded-full text-sm font-medium ${
            isActive
              ? "text-primary dark:text-secondary md:bg-zinc-200 md:dark:bg-white"
              : "text-foreground hover:text-primary"
          }`}
          onClick={() => setActiveItem(name)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {iconOnly ? icon : name}
        </motion.a>
      </Link>
    </motion.div>
  );
}

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("");

  return (
    <>
      <motion.nav className="fixed top-2 w-full hidden md:block z-50 ">
        <div className="flex w-fit mx-auto px-2 gap-8 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-20 backdrop-blur-md shadow-lg rounded-full">
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

      <motion.nav className="fixed bottom-8 w-full block md:hidden z-50">
        <div className="flex w-fit mx-auto px-2 gap-8 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-20 backdrop-blur-md shadow-lg rounded-full">
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
