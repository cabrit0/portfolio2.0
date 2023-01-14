import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-800 flex flex-col items-center justify-center bg-myGreen-800 p-8">
      <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
        About
      </h1>
      <p className="text-lg md:text-xl text-myBege opacity-80 mb-8">
        A successful website does three things: It attracts the right kinds of
        visitors. Guides them to the main services or product you offer. Collect
        Contact details for future ongoing relation.
      </p>
      <div className="w-4/5">
        <p className="text-lg md:text-xl text-white mb-4">
          I am a FrontEnd developer with self-taught skills and a creative
          spirit. I am curious by nature and pay special attention to
          technologies, always with the ambition to develop new knowledge and
          participate in challenging projects.
        </p>
        <p className="text-lg md:text-xl text-myBege opacity-80 mb-4">
          My mantra is "com calma e com alma," which means "with calm and with
          soul." I believe that this approach is essential in developing
          high-quality, visually striking, and user-friendly websites.
        </p>
        <p className="text-lg md:text-xl text-white">
          In my portfolio, you'll find a selection of my latest projects. I hope
          they inspire you to reach out to me to discuss how we can work
          together to create something truly special.
        </p>
      </div>
    </div>
  );
};

export default About;
