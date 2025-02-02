import React, { useState } from "react";

const ProjectForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [steps, setSteps] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, images, steps });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="file"
        multiple
        onChange={(e) => setImages([...e.target.files])}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectForm;