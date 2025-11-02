"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Children, ReactNode } from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

const ContentContainer = ({
  children,
  className,
  margin = "-100px",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  margin?: string;
}) => {
  const childrenArray = Children.toArray(children);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={containerVariants}
      className={cn(
        "z-10 mx-auto max-w-7xl px-6 pt-10 pb-10 lg:px-8",
        className,
      )}
      id={id}
    >
      {childrenArray.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.section>
  );
};

export default ContentContainer;
