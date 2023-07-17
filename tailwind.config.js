/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Common_Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        PrimaryBlack: "#17151D",
        PrimaryPink: "#FFA9D9",
        PrimaryYellow: "#FFD035",
        PrimaryRed: "#EB0028",
        PrimaryBlue: "#12BCFF",
        PrimaryGreen: "#4DD78A",
        BgWhite: "#FFF"
      },
      fontFamily: {
        Euclid: ["Euclid Circular A", "sans-serif"],
        ObjectSans:["Instrument Sans", "sans-serif"],
        RocGrotesk:[ 'Hanken Grotesk', "sans-serif"],
        DMMono:['DM Mono', "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      xs: "420px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
