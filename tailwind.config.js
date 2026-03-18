/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1F7A63",
          secondary: "#1E3A5F",
        },
        success: "#16A34A",
        danger: "#DC2626",
        neutral: {
          light: "#F9FAFB",
          dark: "#111827",
          muted: "#6B7280",
        },
      },
    },
  },
  plugins: [],
}