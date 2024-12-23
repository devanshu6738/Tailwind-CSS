/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        "small":{"max":"1200px"},
        "vsmall":{"max":"750px"},
        "esmall":{"max":"425px"}
      }
    },
  },
  plugins: [],
}

