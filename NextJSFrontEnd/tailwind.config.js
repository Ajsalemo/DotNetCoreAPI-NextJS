module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      inset: {
        "-16": "-4rem",
        12: "3rem",
      },
      width: {
        "fit-content": "fit-content",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
