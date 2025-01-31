const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  const { title, description, images, steps } = req.body;
  const userId = req.user.id; // Assuming you have authentication middleware
  try {
    const projectId = await Project.create(title, description, images, steps, userId);
    res.status(201).json({ message: "Project created successfully", projectId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};