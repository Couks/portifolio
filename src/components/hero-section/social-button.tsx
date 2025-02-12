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
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="outline"
        size="lg"
        className="bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-900"
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
