"use client";
import { motion } from "framer-motion";

type AnimationType = "slide" | "fade" | "wave" | "scale";

interface AnimatedTextProps {
  text: string;
  className?: string;
  animationType?: AnimationType;
}

export default function AnimatedText({
  text,
  className,
  animationType = "fade",
}: AnimatedTextProps) {
  const words = text.split("  ");

  const animations: Record<AnimationType, any> = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.8 } },
    },
    slide: {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 100 },
      },
    },
    wave: {
      hidden: { opacity: 0, y: 10 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
      }),
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 100 },
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={animations[animationType]}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          custom={index}
          variants={animations[animationType]}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
