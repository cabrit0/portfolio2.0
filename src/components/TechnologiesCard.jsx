import React from "react";
import { motion } from "framer-motion";

const TechnologiesCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="relative card">
      <div className="header flex flex-col items-center justify-center pt-2">
        <Icon className="text-4xl text-myGreen" />
        <p className="text-xl text-center text-myGreen font-medium py-2">
          {title}
        </p>
      </div>

      <motion.div
        className="description absolute bottom-0 left-0 right-0 bg-myBege text-myGreenDark text-center justify-center font-bold"
        initial={{ height: "0%", opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        whileHover={{ height: "100%", opacity: 1 }}
        whileTap={{ height: "100%", opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="p-4">{description}</div>
      </motion.div>
    </div>
  );
};

export default TechnologiesCard;
