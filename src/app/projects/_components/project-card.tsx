"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TechStackList } from "@/components/tech-stack-list";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="group relative block h-full"
      >
        <div className="bg-card relative flex h-full flex-col overflow-hidden rounded-lg shadow-sm outline outline-black/5 transition-all duration-300 hover:shadow-md dark:outline-white/15">
          {/* Project Image */}
          <div className="relative h-48 w-full overflow-hidden bg-gray-900">
            <Image
              src={project.images.fullscreen}
              alt={project.title}
              fill
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Project Content */}
          <div className="flex flex-1 flex-col p-6">
            <h2 className="text-xl font-semibold tracking-tight">
              {project.title}
            </h2>

            <p className="text-muted-foreground mt-2 line-clamp-3 text-sm">
              {project.shortDescription}
            </p>

            {/* Tech Stack */}
            <div className="mt-4 mb-4">
              <TechStackList techStack={project.techStack} />
            </div>

            {/* View Project Link */}
            <div className="mt-auto">
              <Button variant="secondary" className="" size="sm">
                View Project
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
