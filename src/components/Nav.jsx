import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";
import { BiMenuAltRight } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-slate-800 flex items-center justify-between px-6 py-3 nav-h">
      <Link to="/" className="nav-link text-myGreen font-medium text-xl">
        Home
      </Link>
      <div className="hidden md:flex">
        <Link
          to="/about"
          className="nav-link text-myGreen font-medium mr-4 text-lg"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="nav-link text-myGreen font-medium mr-4 text-lg"
        >
          Projects
        </Link>
        <Link
          to="/technologies"
          className="nav-link text-myGreen font-medium mr-4 text-lg"
        >
          Technologies
        </Link>
        <Link
          to="/contact"
          className="nav-link text-myGreen font-medium text-lg"
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
            <div className="py-20 flex flex-col justify-center items-center">
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="block text-myGreen my-3 text-2xl font-bold hover:scale-110 hover:text-myYellow"
              >
                About
              </Link>
              <Link
                to="/projects"
                onClick={handleLinkClick}
                className="block text-myGreen my-3 text-2xl font-bold hover:scale-110 hover:text-myYellow"
              >
                Projects
              </Link>
              <Link
                to="/technologies"
                onClick={handleLinkClick}
                className="block text-myGreen my-3 text-2xl font-bold hover:scale-110 hover:text-myYellow"
              >
                Technologies
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="block text-myGreen my-3 text-2xl font-bold hover:scale-110 hover:text-myYellow"
              >
                Contact
              </Link>
            </div>
            <p className="flex justify-center mt-24 text-myYellow text-2xl font-light">
              @Com calma e com alma! 🚀👨‍💻
            </p>
            <button
              className="absolute top-0 right-0 p-4 text-myGreen text-lg hover:text-myRed"
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
