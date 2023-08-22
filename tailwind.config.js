/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    colors: {
      forest: "#29331b",
      tree: "#717d3e",
      sand: "#fcf0da",
      land: "#dfa357",
      brick: "#be6c29",
      black: {
        100: "#212123",
      },
      white: "#ffffff",
    },

    keyframes: {
      scaleIn: {
        "0%": { transform: "scale(0)" },
        "70%": { transform: "scale(1.2)" },
        "100%": { transform: "scale(1)" },
      },
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
    animation: {
      scaleIn: "scaleIn 0.4s",
      fadeIn: "fadeIn 0.4s",
    },
  },
  plugins: [],
};
