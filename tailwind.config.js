module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  corePlugins: {
    container: false,
  },
  theme: {
    borderRadius: {
      "3xl": "40px",
      full: "999px",
    },
    extend: {
      colors: {
        blue: "#0761E9",
        grey: "rgb(39, 40, 48)",
      },
      fontFamily: {
        headline: ['"Raleway"', "serif"],
        standard: ['"Quicksand"', "sans-serif"],
      },
      fontSize: {
        base: "1.125rem",
        md: "1.5rem",
        xl: "2rem",
        "2xl": "4rem",
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
