import React from "react";
import TechnologiesCard from "../components/TechnologiesCard";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiRedux, SiMongodb, SiTensorflow } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const technologies = [
  {
    icon: FaHtml5,
    title: "HTML",
    description:
      "Hypertext Markup Language (HTML) is the standard markup language for creating web pages.",
  },
  {
    icon: FaCss3,
    title: "CSS",
    description:
      "Cascading Style Sheets (CSS) is a stylesheet language used for describing the presentation of a document written in HTML",
  },
  {
    icon: FaJs,
    title: "JavaScript",
    description:
      "JavaScript is a programming language that is primarily used to create interactive front-end web applications",
  },
  {
    icon: FaNodeJs,
    title: "Node.js",
    description:
      "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser",
  },
  {
    icon: FaNpm,
    title: "NPM",
    description:
      "NPM is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js",
  },
  {
    icon: FaReact,
    title: "React",
    description:
      "React is a JavaScript library for building user interfaces. It allows developers to build reusable UI components and manage the state of their applications",
  },
  {
    icon: SiRedux,
    title: "Redux",
    description:
      "Redux is a JavaScript library for managing application state. It helps manage the state of complex applications and allows for predictable changes to the state",
  },
  {
    icon: SiMongodb,
    title: "MongoDB",
    description:
      "MongoDB is a document-oriented NoSQL database used for high volume data storage",
  },
];

const technologiesIWantToLearn = [
  {
    icon: TbBrandReactNative,
    title: "React Native",
    description:
      "React Native is a framework for building mobile applications using React. It allows developers to build native mobile apps using JavaScript and React",
  },
  {
    icon: FaPython,
    title: "Python",
    description:
      "Python is a high-level, interpreted programming language for general-purpose programming. It is widely used for web development, scientific computing, data analysis, artificial intelligence, and more",
  },
  {
    icon: SiTensorflow,
    title: "TensorFlow",
    description:
      "TensorFlow is an open-source machine learning framework for building and deploying machine learning models",
  },
];

const TechnologiesContent = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-12 py-12">
      <div className="my-12">
        <h2 className="text-3xl text-center my-4 text-myGreen font-medium">
          Technologies I Use
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-4">
          {technologies.map((tech) => (
            <TechnologiesCard
              key={tech.title}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
            />
          ))}
        </div>
      </div>
      <div className="my-12">
        <h2 className="text-3xl text-center my-4 text-myGreen font-medium">
          What I want to learn..
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {technologiesIWantToLearn.map((tech) => (
            <TechnologiesCard
              key={tech.title}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TechnologiesContent;
