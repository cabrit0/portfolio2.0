import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../store/ProjectsData";

const ProjectsContent = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center px-4 md:px-12 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl text-center my-4 text-myGreen font-medium">
        My Projects
      </h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-48 py-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="h-full m-2 p-2 items-center"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              delay: (index + 1) * 0.2,
            }}
          >
            <ProjectsCard
              name={project.name}
              img={project.img}
              description={project.description}
              technologies={project.technologies}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsContent;
