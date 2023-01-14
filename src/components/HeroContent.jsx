import { motion } from "framer-motion";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col items-center justify-center bg-myGreen-800"
      /* onMouseMove={handleMouseMove} */
    >
      <div className="px-8 text-left text-white">
        <div className="py-8">
          <p className="text-md md:text-lg text-myBege opacity-80 font-bold py-1 md:py-4">
            Hello there, I'm
          </p>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
            className="text-5xl md:text-6xl font-medium text-myGreen "
          >
            <span
            /* style={{
                textShadow: `${mousePosition.x / 50}px ${
                  mousePosition.y / 50
                }px 8px rgba(136, 136, 136, 0.2)`,
              }} */
            >
              João Cabrit0
            </span>
          </motion.h1>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="text-4xl md:text-5xl font-light text-myBege opacity-80"
          >
            a <span className="font-bold text-myGreen">Frontend</span>{" "}
            developer.
          </motion.h2>
        </div>
        <div className="text-left w-4/5">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="text-sm md:text-lg  text-myBege opacity-60"
          >
            Step into the creative world of Front-end development in my
            portfolio. Explore my latest projects and be inspired by my passion
            for visually striking and interactive design.
          </motion.p>{" "}
          <motion.p
            initial={{ y: 20, opacity: 0, x: -20, rotate: -1.2 }}
            animate={{ y: 0, opacity: 1, x: 0, rotate: 0.2 }}
            transition={{ delay: 2.5, duration: 1.5 }}
            whileHover={{ rotate: [-1.2, 0.2], transition: { duration: 1 } }}
            transitionend={{ rotate: -1 }}
            className="text-md text-myRed opacity-40 hover:font-bold hover:scale-125 w-68"
          >
            Join me in pushing the boundaries of digital innovation
          </motion.p>
        </div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="text-sm md:text-lg  text-myBege opacity-60"
        >
          <button className="flex justify-end items-end my-6 opacity-70 text-myBege hover:text-myYellow hover:opacity-100 hover:translate-x-2 hover:-translate-y-1 hover:scale-110 duration-300">
            Download my CV
          </button>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroContent;
