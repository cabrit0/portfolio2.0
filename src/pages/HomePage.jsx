import React from "react";
import HeroContent from "../components/HeroContent";
import QuickNavigationBox from "../components/QuickNavigationBox";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-800">
      <HeroContent />
      <div className="firefly-bg z-5">
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
      </div>
      <QuickNavigationBox />
    </div>
  );
};

export default HomePage;
