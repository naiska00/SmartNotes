/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['16px', '24px'],
      sm: ['20px', '28px'],
      base: ['20px', '30px'],
      lg: ['24px', '33.6px'],
      xl: ['48px', '57.6px'],
      xxl: ['59px', '62.54px'],
      },
    extend: {
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        },
      colors: {
        'black': "#080808",
        'green': "#048C80",
        'beige': "#EFECE6",
        },
      backgroundImage: {
        gradGreen: "linear-gradient(234.07deg, #AAD9D1 0%, #017373 125.68%)",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}

