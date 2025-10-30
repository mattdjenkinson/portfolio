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
}: {
  children: ReactNode;
  className?: string;
}) => {
  const childrenArray = Children.toArray(children);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={cn(
        "mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:px-8",
        className,
      )}
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
