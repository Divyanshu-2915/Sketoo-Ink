/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        glass: ['GlassAntiqua', 'sans'],
        nixie: ['NixieOne', 'sans'],
        anton : ['Anton', 'sans-serif'],
        kalniaLight : ['Kalnia', 'serif'],
      },},
  },
  plugins: [],
}
