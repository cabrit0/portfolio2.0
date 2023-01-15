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
    technologies: [
      "React",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "CSS",
      "Tailwind",
    ],
    liveURL: "https://fitness4u-n7f4.onrender.com",
    repoURL: "https://github.com/cabrit0/fitness_ai_frontend",
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
    liveURL: "https://feriasapp.onrender.com",
    repoURL: "https://github.com/cabrit0/FeriasAPP_API",
  },
  {
    name: "CryptoParter",
    img: crypto,
    description:
      "WebAplication with data of various coins. data updated constantly. simple but useful.",
    technologies: ["React", "NodeJS"],
    liveURL: "https://crypto-partner.netlify.app",
    repoURL: "https://github.com/cabrit0/cryptoPartner",
  },
  {
    name: "Agenda para alunos",
    img: agenda,
    description:
      "webApp to scedule school works, login system. CRUD operations on REST API created by me.",
    technologies: ["JavaScript", "Nodejs", "MongoDB", "CSS", "ExpressJS"],
    liveURL: "https://agenda-app-crud-v1.herokuapp.com/",
    repoURL: "https://github.com/cabrit0/AGENDA",
  },
  {
    name: "Despesas4U",
    img: expenseTracker,
    description: "Simple app to track expenses with animated chart.",
    technologies: ["React", "NodeJS", "ExpressJS"],
    liveURL: "https://despesa4u.netlify.app/",
    repoURL: "https://github.com/cabrit0/Despesa4U",
  },
  {
    name: "Password Generator",
    img: passwordGenerator,
    description:
      "Simple app so generate passwords. strength can be selected based on low and upper letters, numbers and symbols.",
    technologies: ["JavaScript", "HTML", "CSS"],
    liveURL: "https://cabrit0.github.io/passwordGen/",
    repoURL: "https://github.com/cabrit0/passwordGen",
  },
];
