import agenda from "../assets/agenda.jpg";
import crypto from "../assets/cryptoPartner.jpg";
import expenseTracker from "../assets/expenseTracker.jpg";
import ferias4U from "../assets/ferias4U.jpg";
import fitness4U from "../assets/fitness4U.jpg";
import passwordGenerator from "../assets/passwordGenerator.jpg";

export const projects = [
  {
    name: "Fullstack Fitness4U",
    img: fitness4U,
    description:
      "WebApp for gym with Login user roles, create workouts, assign workouts to the calendar built in, manage users, private functionality based on roles system.",
    technologies: ["React", "NodeJS", "MongoDB", "ExpressJS", "CSS", "Tailwind"],
  },
  {
    name: "Ferias4U",
    img: ferias4U,
    description:
      "Fullstack WebApp for workers to take its vacations or days off. With login, user roles system, calendar with day off functionality, create day off, user info based on roles system.",
    technologies: [
      "React",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "CSS",
      "Tailwind",
    ],
  },
  {
    name: "CryptoParter",
    img: crypto,
    description:
      "WebAplication with data of various coins. data updated constantly. simple but useful.",
    technologies: ["React", "NodeJS"],
  },
  {
    name: "Agenda para alunos",
    img: agenda,
    description:
      "webApp to scedule school works, login system. CRUD operations on REST API created by me.",
    technologies: ["JavaScript", "Nodejs", "MongoDB", "CSS", "ExpressJS"],
  },
  {
    name: "Expense tracker",
    img: expenseTracker,
    description: "Simple app to track expenses with animated chart.",
    technologies: ["React", "NodeJS", "ExpressJS"],
  },
  {
    name: "Password Generator",
    img: passwordGenerator,
    description:
      "Simple app so generate passwords. strength can be selected based on low and upper letters, numbers and symbols.",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];
