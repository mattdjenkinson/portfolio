"use client";

import { motion } from "motion/react";

export function ProjectPageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      {description && (
        <p className="text-muted-foreground mt-4 text-lg">{description}</p>
      )}
    </motion.div>
  );
}
