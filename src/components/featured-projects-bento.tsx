"use client";

import { getFeaturedProjects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { TechStackList } from "./tech-stack-list";

const FeaturedProjectBentoGrid = () => {
  const projects = getFeaturedProjects();
  const [project1, project2, project3, project4] = projects;

  return (
    <div className="mt-10 grid w-full gap-4 lg:grid-cols-3 lg:grid-rows-2">
      {/* Project 1 - Left column (Mobile view) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3, delay: 0 }}
        className="min-h-[400px] lg:row-span-2"
      >
        <Link
          href={`/projects/${project1.id}`}
          className="group relative block h-full cursor-pointer"
        >
          <div className="bg-card absolute inset-px h-full w-full rounded-lg transition-colors lg:rounded-l-4xl" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
              <p className="mt-2 text-lg font-medium tracking-tight">
                {project1.title}
              </p>
              <TechStackList techStack={project1.techStack} />
            </div>
            <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
              <div className="border-muted absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] bg-gray-900 shadow-2xl transition-all duration-300 ease-out group-hover:scale-105 dark:shadow-none dark:outline dark:outline-white/20">
                <Image
                  alt={project1.title}
                  src={project1.images.mobile}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px h-full w-full rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl dark:outline-white/15" />
        </Link>
      </motion.div>

      {/* Project 2 - Top right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="min-h-[200px] max-lg:row-start-1"
      >
        <Link
          href={`/projects/${project2.id}`}
          className="group relative block h-full cursor-pointer"
        >
          <div className="bg-card absolute inset-px h-full w-full rounded-lg transition-colors max-lg:rounded-t-4xl" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <p className="mt-2 text-lg font-medium tracking-tight">
                {project2.title}
              </p>
              <TechStackList techStack={project2.techStack} />
              <p className="text-muted-foreground py-4 text-sm text-ellipsis">
                {project2.shortDescription}
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px h-full w-full rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl dark:outline-white/15" />
        </Link>
      </motion.div>

      {/* Project 3 - Bottom middle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "150px" }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="min-h-[200px] max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
      >
        <Link
          href={`/projects/${project3.id}`}
          className="group relative block h-full cursor-pointer"
        >
          <div className="bg-card absolute inset-px h-full w-full rounded-lg transition-colors" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <p className="mt-2 text-lg font-medium tracking-tight">
                {project3.title}
              </p>
              <TechStackList techStack={project3.techStack} />

              <p className="text-muted-foreground py-4 text-sm text-ellipsis">
                {project3.shortDescription}
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px h-full w-full rounded-lg shadow-sm outline outline-black/5 dark:outline-white/15" />
        </Link>
      </motion.div>

      {/* Project 4 - Right column (Code/Desktop view) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="min-h-[400px] lg:row-span-2"
      >
        <Link
          href={`/projects/${project4.id}`}
          className="group relative block h-full cursor-pointer"
        >
          <div className="bg-card absolute inset-px h-full w-full rounded-lg transition-colors max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
              <p className="mt-2 text-lg font-medium tracking-tight">
                {project4.title}
              </p>
              <TechStackList techStack={project4.techStack} />
            </div>
            <div className="relative min-h-120 w-full grow">
              <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10 transition-all duration-300 ease-out group-hover:scale-105 dark:bg-gray-900/60 dark:shadow-none">
                <Image
                  alt={project4.title}
                  src={project4.images.fullscreen}
                  fill
                  className="object-cover object-top-left"
                />
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px h-full w-full rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl dark:outline-white/15" />
        </Link>
      </motion.div>
    </div>
  );
};

export default FeaturedProjectBentoGrid;
