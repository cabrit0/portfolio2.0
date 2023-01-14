import React from "react";
import { motion } from "framer-motion";

import TechnologiesCard from "../components/TechnologiesCard";
import {
  technologies,
  technologiesIWantToLearn,
} from "../store/TechnologiesInfo";

const TechnologiesContent = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center px-4 md:px-12 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="my-8">
        <h2 className="text-3xl text-center my-4 text-myGreen font-medium">
          Technologies I Use
        </h2>
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              className="relative card"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                delay: (index + 1) * 0.2,
              }}
            >
              <TechnologiesCard
                icon={tech.icon}
                title={tech.title}
                description={tech.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="my-8">
        <h2 className="text-3xl text-center my-4 text-myGreen font-medium">
          What I want to learn..
        </h2>
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologiesIWantToLearn.map((tech, index) => (
            <motion.div
              key={tech.title}
              className="relative card"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                delay: (index + 1) * 0.2,
              }}
            >
              <TechnologiesCard
                icon={tech.icon}
                title={tech.title}
                description={tech.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
export default TechnologiesContent;
