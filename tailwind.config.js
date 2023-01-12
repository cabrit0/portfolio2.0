/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myBlue: "#3D405B",
        myBege: "#F4F1DE",
        myRed: "#E07A5F",
        myGreen: "#81B29A",
        myGreenDark: "#354f52",
        myYellow: "#F2CC8F",
      },
    },
  },
  plugins: [],
};
