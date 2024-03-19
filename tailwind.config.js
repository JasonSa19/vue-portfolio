module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  corePlugins: {
    container: false,
  },
  theme: {
    boxShadow: {
      custom: "0px 0px 50px 16px rgba(0,0,0,0.14)",
    },

    extend: {
      lineHeight: {
        headline: "110%",
      },
      borderRadius: {
        "3xl": "40px",
        full: "999px",
      },
      colors: {
        blue: "#0761E9",
        grey: "#272830",
        lightgrey: "#707070",
      },
      fontFamily: {
        headline: ['"Raleway"', "serif"],
        standard: ['"Quicksand"', "sans-serif"],
      },
      fontSize: {
        base: "1.125rem",
        sm: "1.25rem",
        md: "1.5rem",
        lg: "1.75rem",
        xl: "2rem",
        "2xl": "3.75rem",
        "3xl": "6.75rem",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "90%",
          margin: "0 auto",
          "@screen 2xl": {
            maxWidth: "1620px",
          },
        },
      });
    },
  ],
};
