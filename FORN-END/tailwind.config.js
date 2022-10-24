module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff5500",
        "primary-page-text": "#fff",
        "btn-primary": "#030303",
        opacity: "#333",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui")],
};
