import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/projects/${id}`)
      .then((response) => setProject(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h3>Steps:</h3>
      <ul>
        {project.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetail;