"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NavItem from "./navitem";
import { ThemeToggle } from "../theme-toggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Stacks", href: "#stacks" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("");

  return (
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
  );
}
