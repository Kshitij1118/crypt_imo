import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Updated 'purge' to 'content'
  darkMode: "class", // 'media' or 'class' are valid options
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      screens: {
        mf: "1000px",
      },
      keyframes: {
        slideIn: {
          // Updated keyframe name to use camelCase
          "0%": {
            transform: "translateX(120%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-out", // Updated animation name to match keyframe
      },
    },
  },
  plugins: [forms], // Use the imported plugin
};

export default config;
