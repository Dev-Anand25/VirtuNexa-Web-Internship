"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    if (title && description) {
      onAddProject({ title, description, file });
      setTitle("");
      setDescription("");
      setFile(null);
    }
  };

  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-col gap-2">
        <Input
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full"
        />
        <Textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="flex items-center gap-2">
        <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <Button onClick={handleSubmit} className="w-full">
        Share Project
      </Button>
    </div>
  );
}
