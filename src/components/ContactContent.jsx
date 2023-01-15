import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SiTwitter, SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

const ContactContent = () => {
  const [formState, setFormState] = useState({
    name: "",
    email_from: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: "",
    submitSuccess: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameError = "";
    let emailError = "";
    let messageError = "";
    if (!formState.name) {
      nameError = "Name is required";
    }
    if (!formState.email_from) {
      emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email_from)) {
      emailError = "Email address is invalid";
    }
    if (!formState.message) {
      messageError = "Message is required";
    }
    if (nameError || emailError || messageError) {
      setFormState({
        ...formState,
        nameError,
        emailError,
        messageError,
      });
      return;
    }
    emailjs
      .sendForm(
        "service_h2hf4xv",
        "template_g4m2txk",
        e.target,
        "LNRgZGBjTISl-5911"
      )
      .then((response) => {
        console.log(response);
        setFormState((prevState) => {
          return {
            ...prevState,
            submitSuccess: true,
          };
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <AnimatePresence>
      <motion.div
        className="md:px-32 pt-12 flex flex-col justify-between"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="">
          <h2 className="text-3xl text-center text-myGreen font-medium mb-8">
            Contact Me
          </h2>
          <motion.form
            className="w-full md:max-w-4xl px-16 mb-16 mx-auto"
            onSubmit={handleSubmit}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block text-myGreen font-medium mb-2"
                  for="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-myBlue text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name.."
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-myGreen font-medium mb-2"
                  for="email_from"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-myBlue text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray/300"
                  placeholder="example@email.com"
                  name="email_from"
                  type="email"
                  id="email_from"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block text-myGreen font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <motion.textarea
                  className="appearance-none block w-full bg-myBlue text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                ></motion.textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div>
                <div>
                  {formState.submitSuccess && <p>Success</p>}
                  {formState.nameError && <p>{formState.nameError}</p>}
                  {formState.emailError && <p>{formState.emailError}</p>}
                  {formState.messageError && <p>{formState.messageError}</p>}
                </div>
              </div>

              <div className="w-full px-3">
                <motion.button
                  className="text-myGreen opacity-80 font-medium py-2 px-4 hover:opacity-100 hover:text-myYellow"
                  type="submit"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Send
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>
        <motion.footer
          className="text-center mt-2 px-4 flex flex-col justify-between md:mt-48"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-myGreen font-medium">Follow me on:</div>
          <div className="mt-2 flex flex-col justify-end items-start py-8 opacity-75">
            <motion.a
              href="/"
              className="text-myGreen hover:text-myYellow flex items-center my-0.5"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SiInstagram className="mr-4" />
              https://instagram.com/jcabrit0
            </motion.a>
            <motion.a
              className="text-myGreen hover:text-myYellow flex items-center my-0.5"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SiTwitter className="mr-4" />
              https://twitter.com/Cabrit0Dev
            </motion.a>
            <motion.a
              href="/"
              className="text-myGreen hover:text-myYellow flex items-center my-0.5"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SiLinkedin className="mr-4" />
              https://linkedin.com/in/cabritodev
            </motion.a>
            <motion.a
              href="/"
              className="text-myGreen hover:text-myYellow flex items-center my-0.5"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SiGithub className="mr-4" />
              https://github.com/cabritodev
            </motion.a>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-myYellow opacity-70">©Cabrit0 2023</p>
          </div>
        </motion.footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactContent;
