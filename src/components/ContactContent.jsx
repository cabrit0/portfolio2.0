import React from "react";

import { SiTwitter, SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

const ContactContent = () => {
  return (
    <div className="md:px-12 pt-12 flex flex-col justify-between">
      <h2 className="text-3xl text-center text-myGreen font-medium">
        Contact Me
      </h2>
      <form className="w-full max-w-lg px-16 mb-16 mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-myGreen font-medium mb-2" for="name">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-myBlue text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-myGreen font-medium mb-2" for="email">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-myBlue text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
              id="email"
              type="email"
              placeholder="johndoe@example.com"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block text-myGreen font-medium mb-2"
              for="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-myBlue text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              rows="4"
              placeholder="Write your message here..."
            ></textarea>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <button className=" text-myGreen opacity-80 font-medium py-2 px-4 hover:opacity-100 hover:text-myYellow hover:scale-110 hover:translate-x-1 hover:-translate-y-2">
              Send
            </button>
          </div>
        </div>
      </form>
      <footer className="text-center mt-6 px-4">
        <div className="text-myGreen font-medium">Follow me on:</div>
        <div className="mt-2 flex flex-col justify-end items-start py-8 opacity-75">
          <a
            href="/"
            className="text-myGreen hover:text-myYellow flex items-center my-0.5"
          >
            <SiInstagram className="mr-4" />
            https://instagram.com/jcabrit0
          </a>
          <a
            href="/"
            className="text-myGreen hover:text-myYellow flex items-center my-0.5"
          >
            <SiTwitter className="mr-4" />
            https://twitter.com/Cabrit0Dev
          </a>
          <a
            href="/"
            className="text-myGreen hover:text-myYellow flex items-center my-0.5"
          >
            <SiLinkedin className="mr-4" />
            <p>https://www.linkedin.com/in/cabrit0/</p>
          </a>
          <a
            href="/"
            className="text-myGreen hover:text-myYellow flex items-center my-0.5"
          >
            <SiGithub className="mr-4" />
            <p>https://github.com/cabrit0</p>
          </a>
        </div>
        <div>
          <p className="text-myYellow opacity-70">©Cabrit0 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactContent;
