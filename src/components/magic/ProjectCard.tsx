"use client";

import { motion } from "motion/react";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: index * 0.08 } }}
      exit={{ opacity: 0 }}
      whileHover={{ y: -4 }}
      className="group project-card flex flex-col gap-5 p-6 md:p-8"
    >
      <div>
        <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight leading-tight">
          {project.title}
        </h3>
        <p className="mt-3 leading-relaxed text-sm text-secondary">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.techs.map((tech) => (
          <span key={tech} className="badge border-default bg-surface-alt text-secondary">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}