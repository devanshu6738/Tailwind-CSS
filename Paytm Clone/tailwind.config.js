/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        "bullu":"#00BAF2",
        "darkbullu":"#002970",
        "kyc":"#F5F5F6",
        "hoverbullu":"#00AFE3",
        "darkbulluu":"#0F4A8A",
        "hoverdarkbullu":"#0D3E80",
        "backcolor":'#F5F7F9',
        "bullcolor":"#4CCFF6"
      },
      screens:{
        "verySmall":{'max':'399px'},
        "large":{"max":"1070px"},
        "medium":{"max":"768px"},
      }
    },
    
  },
  plugins: [],
}

