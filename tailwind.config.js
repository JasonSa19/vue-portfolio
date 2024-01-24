module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  corePlugins: {
    container: false,
  },
  theme: {
    screens: {
      "2xl": { max: "1680px" },
      xl: { max: "1440px" },
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "480px" },
    },
    borderRadius: {
      "3xl": "40px",
      full: "999px",
    },
    extend: {
      colors: {
        blue: "#0761E9",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1620px",
          "@screen 2xl": {
            maxWidth: "92%",
          },
        },
      });
    },
  ],
};
