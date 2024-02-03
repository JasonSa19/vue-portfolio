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
      },
      fontFamily: {
        headline: ['"Raleway"', "serif"],
        standard: ['"Quicksand"', "sans-serif"],
      },
      fontSize: {
        base: "1.125rem",
        lg: "1.5rem",
        xl: "6.75rem",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1620px",
          margin: "0 auto",
          "@screen 2xl": {
            maxWidth: "92%",
          },
        },
      });
    },
  ],
};
