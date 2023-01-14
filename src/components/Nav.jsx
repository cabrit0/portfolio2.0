import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-slate-800 flex items-center justify-between px-8 md:px-16 nav-h">
      <Link to="/" className="nav-link text-myGreen font-medium text-xl ">
        Home
      </Link>
      <div className="hidden md:flex">
        <Link
          to="/about"
          className="nav-link text-myGreen font-medium mx-8 text-lg duration-300 hover:scale-110"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="nav-link text-myGreen font-medium mx-8 text-lg duration-300 hover:scale-110"
        >
          Projects
        </Link>
        <Link
          to="/technologies"
          className="nav-link text-myGreen font-medium mx-8 text-lg duration-300 hover:scale-110"
        >
          Technologies
        </Link>
        <Link
          to="/contact"
          className="nav-link text-myGreen font-medium mx-8 text-lg duration-300 hover:scale-110"
        >
          Contact
        </Link>
      </div>
      <button
        className="md:hidden block text-myGreen hover:text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <BiMenu className="w-6 h-6" />
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 left-0 w-full h-full z-50 bg-myBlue"
          >
            <div className="pt-24 mb-10 px-20 flex flex-col justify-center ">
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="block text-myGreen my-3 text-2xl font-bold hover:translate-x-8 hover:-translate-y-2 hover:scale-110 hover:text-myYellow duration-300"
              >
                _About
              </Link>
              <Link
                to="/projects"
                onClick={handleLinkClick}
                className="block text-myGreen my-3 text-2xl font-bold hover:translate-x-8 hover:-translate-y-2 hover:scale-110 hover:text-myYellow duration-300"
              >
                _Projects
              </Link>
              <Link
                to="/technologies"
                onClick={handleLinkClick}
                className="block text-myGreen my-3 text-2xl font-bold hover:translate-x-8 hover:-translate-y-2 hover:scale-110 hover:text-myYellow duration-300"
              >
                _Technologies
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="block text-myGreen my-3 text-2xl font-bold hover:translate-x-8 hover:-translate-y-2 hover:scale-110 hover:text-myYellow duration-300"
              >
                _Contact
              </Link>
            </div>
            <div className="py-6 px-20 flex flex-col justify-center">
              <h2 className="py-3 text-myGreen text-2xl">Send me a message</h2>
              <p className="flex w-40 text-myGreen opacity-80 hover:font-bold duration-300 hover:scale-105 hover:-translate-y-1 hover:translate-x-2 hover:opacity-100 hover:text-myYellow">
                cabrito0o.dev@gmail.com
              </p>
              <p className="flex w-40 text-myGreen opacity-80 hover:font-bold duration-300 hover:scale-105 hover:-translate-y-1 hover:translate-x-2 hover:opacity-100 hover:text-myYellow">
                www.linkedin.com/in/cabrit0/
              </p>
              <button className="flex w-40 text-myGreen opacity-80 hover:font-bold duration-300 hover:scale-105 hover:-translate-y-1 hover:translate-x-2 hover:opacity-100 hover:text-myYellow">
                Download my CV
              </button>
            </div>
            <div className="py-6">
              <p className="flex justify-center mt-24 text-myYellow text-2xl font-light">
                @Com calma e com alma! 🚀👨‍💻
              </p>
              <div className="absolute top-2 left-2 md:top-5 md:left-10 p-4 text-myGreen text-3xl ">
                cabrit0
              </div>
            </div>
            <button
              className="absolute top-2 right-2 md:top-5 md:right-5 p-4 text-myGreen text-lg hover:text-myRed duration-300 hover:scale-110 hover:-translate-y-1"
              onClick={handleLinkClick}
            >
              Back
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
