/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // Slate 900
        heading: '#e2e8f0',    // Slate 200
        text: '#94a3b8',       // Slate 400
        accent: '#5eead4',     // Teal 300

        // Semantic names matching Brittany's palette
        navy: '#0f172a',
        'light-navy': '#1e293b', // Slate 800
        'lightest-navy': '#334155', // Slate 700
        slate: '#94a3b8',
        'light-slate': '#cbd5e1', // Slate 300
        'lightest-slate': '#e2e8f0', // Slate 200
        teal: '#5eead4',
        green: '#64ffda',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
