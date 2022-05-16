module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx, html}",
  ],
  // theme: {
  //   extend: {},
  // },
  daisyui: {
    themes: [
      {
        myWebTheme: {

          primary: "#d06acc",

          secondary: "#2a464f",

          accent: "#f3d2f2",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
