/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  
    extend: {
      colors:{
        'javascript' : '#F0DB4F',
        'typescript' : '#3178C6',
        'ruby': '#A91401',
        'rubyonrails' : '#820C02'
      }
    },
  },
  plugins: [],
};
