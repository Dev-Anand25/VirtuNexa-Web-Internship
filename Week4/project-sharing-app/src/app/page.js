"use client";

import { useState } from "react";
import ProjectForm from "@/components/ProjectForm";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectSharingApp() {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Project Sharing App</h1>
      <ProjectForm onAddProject={addProject} />
      <div className="space-y-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}