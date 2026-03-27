/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: "#1F2937",
        'accent-orange': "#F97316",
        'accent-cyan': "#22D3EE",
        'dark-bg': "#111827",
        'dark-surface': "#1F2937",
        'light-bg': "#F9FAFB",
        'light-surface': "#FFFFFF",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
};
