import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-slate-800 flex justify-between px-6 py-3 nav-h">
      <Link to="/" className="text-myGreen font-medium text-lg">
        Home
      </Link>
      <div>
        <Link to="/about" className="text-myGreen font-medium mr-4">
          About
        </Link>
        <Link to="/contact" className="text-myGreen font-medium">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
