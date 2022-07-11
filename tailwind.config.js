/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "38rem",
        176: "40rem",
        192: "42rem",
        208: "46rem",
        224: "48rem",
        240: "50rem",
        256: "52rem",
        272: "54rem",
        288: "77rem",
      },
      width: {
        112: "28rem",
      },
    },
  },
  plugins: [],
};
