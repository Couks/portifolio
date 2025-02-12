"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NavItem from "./navitem";

const navItems = [
  { name: "Sobre", href: "#sobre" },
  { name: "Stacks", href: "#stacks" },
  { name: "Projetos", href: "#projetos" },
  { name: "Experiência", href: "#experiencia" },
  { name: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("");

  return (
    <motion.nav className="fixed top-2 hidden md:block md:left-32 right-32 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div className="text-2xl font-bold text-gray-800">
            Matheus Castro
          </motion.div>
          <div className="hidden md:flex space-x-4">
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
        </div>
      </div>
    </motion.nav>
  );
}
