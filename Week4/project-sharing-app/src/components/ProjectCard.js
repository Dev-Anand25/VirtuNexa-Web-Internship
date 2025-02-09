import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-gray-600">{project.description}</p>
          {project.file && (
            <p className="text-sm text-blue-500">Uploaded File: {project.file.name}</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
