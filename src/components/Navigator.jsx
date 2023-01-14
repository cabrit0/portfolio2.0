import React, { useState } from "react";

const Navigatior = () => {
  const pages = ["Home", "About", "Projects", "Technologies", "Contact"];
  const [currentPage, setCurrentPage] = useState("Home");

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="navigation-box">
      {pages.map((page) => (
        <div
          key={page}
          className={`selector ${currentPage === page ? "filled" : "empty"}`}
          onClick={() => handleClick(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Navigatior;
