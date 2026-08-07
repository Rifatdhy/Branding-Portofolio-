"use client";

import { motion } from "motion/react";

interface KineticTextProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "normal" | "fast" | "slow";
}

export function KineticText({ children, direction = "left", speed = "normal" }: KineticTextProps) {
  const duration = speed === "fast" ? 10 : speed === "slow" ? 40 : 20;

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-block"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="inline-block"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
