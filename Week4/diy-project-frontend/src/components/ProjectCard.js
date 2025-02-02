import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <Link to={`/project/${project.id}`}>View Details</Link>
    </div>
  );
};

export default ProjectCard;