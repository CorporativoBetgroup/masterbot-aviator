/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        base: 'linear-gradient(to right bottom, #001431, #001f60, #002691, #0026c0, #1412eb);',
        'background': "url('/wallpaper.png')",
        'home': "url('/ELEMENTOS-HOME.png')",
        'background-botao': "url('/background-botao.png')"
      }
    },
  },
  plugins: [],
}
