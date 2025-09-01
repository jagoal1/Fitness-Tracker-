/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",   // Blue
        accent: "#1E3A8A",    // Dark Blue
        success: "#22C55E",   // Green
        danger: "#EF4444",    // Red
      },
    },
  },
  plugins: [],
}
