import React from "react";
import HeroContent from "../components/HeroContent";
import QuickNavigationBox from "../components/QuickNavigationBox";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-800" >
      <HeroContent />
      <QuickNavigationBox />
    </div>
  );
};

export default HomePage;
