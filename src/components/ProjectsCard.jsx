import React from "react";

const ProjectsCard = (project) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-between bg-myGreenDark">
      <img
        src={project.img}
        alt={project.name}
        className="w-full h-96 px-16 md:px-20 py-2 rounded-2xl"
      />
      <div className="px-6 py-4">
        <h2 className="text-2xl font-medium text-myGreen">{project.name}</h2>
        <p className="text-myBege text-md mt-2">{project.description}</p>
        <div className="flex flex-wrap mt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1 text-sm text-white bg-myGreen rounded-full mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center">
          <button className="text-myGreen text-sm font-medium px-4 py-2 rounded-lg duration-300 hover:text-myYellow hover:scale-110 hover:translate-x-1 hover:-translate-y-2">
            Live Site
          </button>
          <button className="text-myGreen text-sm font-medium px-4 py-2 rounded-lg duration-300 hover:text-myYellow hover:scale-110 hover:translate-x-1 hover:-translate-y-2">
            Code Repository
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
