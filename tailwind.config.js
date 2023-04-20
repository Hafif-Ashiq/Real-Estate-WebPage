/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        title_color: "#054457",
        main_title_color: "#1F2744",
        paragraph: "#73788C",
        primary: "#FEFEFE",
        secondary: "#F5F5F5",
        text_primary: "#69B99D",
        text_secondary: "#8E8E8E",
        text_light: "#A6A6A6",
        text_logo: "#4BA586",
        tagline_color: "#F8F9FE",
        border_color: "#DEDCDA",
        name_color: "#0B2E29",
        prof_color: "#767676",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"]
      },
      
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    
    },
  },
  plugins: [],
};
