"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function SocialButton({ href, icon, label }: SocialButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="outline"
        size="lg"
        className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg shadow-md transition-all hover:bg-white/20 hover:scale-105"
        asChild
      >
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          {icon}
          <span>{label}</span>
        </Link>
      </Button>
    </motion.div>
  );
}
