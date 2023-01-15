import React from "react";
import { motion } from "framer-motion";

import programer from "../assets/cabrit0_programer.png";
import soldering from "../assets/cabrit0_soldering.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const AboutPageContent = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="">
        <div className=" flex items-center justify-center py-12">
          <div className="text-center px-8 md:px-72">
            <h1 className="text-4xl py-4 md:text-5xl font-medium text-myGreen">
              About me
            </h1>
            <div className="md:flex-row items-center justify-center md:my-24">
              <p className="flex flex-col text-lg md:text-3xl text-myBege opacity-90 my-2">
                <div className="w-full flex">
                  <FaQuoteLeft className="w-2 h-2 text-myYellow ml-2" />
                </div>
                <span className="flex px-2">
                  A successful website does three things: It attracts the right
                  kinds of visitors, Guides them to the main services or product
                  you offer and Collect Contact details for future ongoing
                  relation.
                </span>
                <div className="w-full flex items-end justify-end">
                  <FaQuoteRight className="w-2 h-2 text-myYellow mr-2 text-right" />
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 px-8 md:px-44 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
            className="px-8 md:mt-10 flex flex-col justify-between"
          >
            <p className="text-md md:text-xl text-myBege opacity-60">
              I am a FrontEnd developer with self-taught skills and a creative
              spirit. I am curious by nature and pay special attention to
              technologies, always with the ambition to develop new knowledge
              and participate in challenging projects.
            </p>
            <motion.img
              src={programer}
              alt="programer"
              className="w-52 h-w-52 md:w-72 md:h-72 md:mt-16 m-auto"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.4 }}
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.4 }}
            className="px-8 md:mt-10 flex flex-col justify-between"
          >
            <p className="text-md md:text-xl text-myBege opacity-60">
              Currently working with electronics, but have a passion for
              programming and looking to change my career to align with my
              passions. I strive to create websites that are different,
              creative, and professional.
            </p>
            <motion.img
              src={soldering}
              alt="programer"
              className="w-52 h-w-52 md:w-72 md:h-72 md:mt-16 m-auto"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPageContent;
