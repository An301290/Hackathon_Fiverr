module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        big: "500px",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      spacing: {
        22: "88px",
        23: "91px",
        25: "108px",
        40: "204px",
        100: "560px",
        110: "613",
        115: "730px"
        
      },
      letterSpacing: {
        wide: "0.2px",
        wide2: "0.3px",
      },
      textColor: {
        primary: "#373F41",
        secondary: "#3C64B1",
        white: "#FFFFFF",
      },
      backgroundColor: {
        primary: "#3C64B1",
        navbarbg: "#F3F6FA",
        white: "#FFFFFF",
        signBtn: "#56BC8F",
        grayEntries:"#F4F5F4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
