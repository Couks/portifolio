"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import Link from "next/link";

interface SocialButtonProps extends ButtonProps {
  href: string;
  icon?: React.ReactNode;
  label?: string;
}

export default function AnimatedButton({
  href,
  icon,
  label,
  ...buttonProps
}: SocialButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Button {...buttonProps} asChild>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <span>{label}</span>
          {icon}
        </Link>
      </Button>
    </motion.div>
  );
}
