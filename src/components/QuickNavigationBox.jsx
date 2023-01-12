import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./QuickNavigationBox.css";

const QuickNavigation = () => {
  const [activeDot, setActiveDot] = useState(0);
  const pages = ["/", "/about", "/projects", "/contact"];

  useEffect(() => {
    const handleDotClick = (e) => {
      if (e.target.tagName === "SPAN") {
        const dotIndex = Array.from(e.target.parentNode.children).indexOf(
          e.target
        );
        setActiveDot(dotIndex);
      }
    };

    const quickNavigationBox = document.getElementById("quick-navigation-box");
    quickNavigationBox.addEventListener("click", handleDotClick);

    return () => {
      quickNavigationBox.removeEventListener("click", handleDotClick);
    };
  }, []);

  return (
    <div className="quick-navigation-box" id="quick-navigation-box">
      {pages.map((page, index) => (
        <Link to={page} key={page}>
          <span className={`dot ${index === activeDot ? "active" : ""}`}></span>
        </Link>
      ))}
    </div>
  );
};

export default QuickNavigation;
