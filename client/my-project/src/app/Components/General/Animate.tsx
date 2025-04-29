"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollAnimateProps {
  children: ReactNode;
  direction?: "top" | "bottom" | "left" | "right";
  duration?: number;
  delay?: number;
}

const getAnimation = (direction: string) => {
  const offset = 100;

  switch (direction) {
    case "top":
      return {
        hidden: { y: -offset, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      };
    case "bottom":
      return {
        hidden: { y: offset, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      };
    case "left":
      return {
        hidden: { x: -offset, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      };
    case "right":
      return {
        hidden: { x: offset, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      };
    default:
      return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  }
};

const ScrollAnimate = ({
  children,
  direction = "bottom",
  duration = 0.5,
  delay = 0,
}: ScrollAnimateProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animate every time it comes into view
    threshold: 0.2, // How much visible before triggering
  });

  const variants = getAnimation(direction);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimate;
