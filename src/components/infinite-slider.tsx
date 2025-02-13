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
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const technologies = [
  { name: "React Native", icon: SiReact },
  { name: "React JS", icon: SiReact },
  { name: "Next JS", icon: SiNextdotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Docker", icon: SiDocker },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "REST API", icon: TbApi },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Expo", icon: SiExpo },
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
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
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
          <div
            key={`${tech.name}-${index}`}
            className="flex flex-col items-center justify-center"
          >
            <tech.icon className="text-4xl text-black dark:text-primary" />
            <span className="mt-2 text-sm font-medium text-foreground whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
