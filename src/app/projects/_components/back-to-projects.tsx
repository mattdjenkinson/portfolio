"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const BackToProjectsButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-18 left-4 z-30 md:bottom-4"
    >
      <Link href="/projects">
        <Button variant="secondary" className="">
          <ArrowLeftIcon className="size-4" />
          Back to projects
        </Button>
      </Link>
    </motion.div>
  );
};

export default BackToProjectsButton;
