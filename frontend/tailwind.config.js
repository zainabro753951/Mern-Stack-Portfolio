const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        themePurple: "#FF6D5A",
        themeGolden: "#F4C430",
        gradientStart: "#5137A1",
        gradientEnd: "#DB6268",
        themeBlue: "#342EAD",
        themeGray: "#B5B5C0",
        PGardientStart: "#FEEBEA",
        PGardientEnd: "#D5D4EF",
        blueGardientStart: "#ffffff",
        blueGardientEnd: "#918AFE",
        EduGardientStart: "#FFF4F3",
        EduGardientEnd: "#E1F0FE",
      },
      backgroundImage: {
        hero: "url('imgs/hero_bg_2.svg')",
        portfolio: "url('imgs/protfolio_bg2.png')",
        projects: "url('imgs/projects1.svg')",
        footer: "url('imgs/footer_bg.svg')",
        aboutHero: "url('imgs/About/aboutHero.svg')",
        aboutEducation: "url('imgs/About/ed_and_skill_bg.png')",
        portfolioHero: "url(../../../imgs/Portflio/portflio.svg)",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        lexend_deca: ["Lexend Deca", "serif"],
      },
      screens: {
        xs: "300px",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
