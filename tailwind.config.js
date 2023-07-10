/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        'grey-off': '#36454f',
        'black-off': '#101314',
        'white-off': '#fffffa',
      },
      boxShadow: {
        'left': '5px 5px 5px 0px rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [],
}
