"use client";

import type React from "react";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiDocker,
  SiTailwindcss,
  SiGraphql,
  SiExpo,
  SiHtml5,
  SiCss3,
  SiPhp,
} from "react-icons/si";

import { FaNode, FaVuejs } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const technologies = [
  { name: "React Native", icon: SiReact },
  { name: "Next JS", icon: SiNextdotjs },
  { name: "React JS", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Docker", icon: SiDocker },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "REST API", icon: TbApi },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Expo", icon: SiExpo },
  { name: "Vue JS", icon: FaVuejs },
  { name: "Node JS", icon: FaNode },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "PHP", icon: SiPhp },
];

const InfiniteSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(sliderRef);

  useEffect(() => {
    if (inView) {
      controls.start({
        x: [0, -100 * technologies.length],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
            repeatDelay: 0,
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, inView]);

  return (
    <div
      id="stacks"
      className="w-full overflow-hidden bg-white dark:bg-background py-6"
      ref={sliderRef}
    >
      <motion.div
        className="flex items-center space-x-16 md:space-x-24"
        animate={controls}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex flex-col items-center justify-center"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <tech.icon className="text-4xl text-black dark:text-primary" />
            <span className="mt-2 text-sm font-medium text-foreground whitespace-nowrap">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
