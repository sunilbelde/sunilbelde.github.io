/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme-aware colors using CSS variables with opacity support
        lightGreen: {
          DEFAULT: 'rgb(var(--color-light-green))',
          10: 'rgba(var(--color-light-green), 0.1)',
          20: 'rgba(var(--color-light-green), 0.2)',
          40: 'rgba(var(--color-light-green), 0.4)',
          60: 'rgba(var(--color-light-green), 0.6)',
          80: 'rgba(var(--color-light-green), 0.8)',
        },
        darkGreen: {
          DEFAULT: 'rgb(var(--color-dark-green))',
          10: 'rgba(var(--color-dark-green), 0.1)',
          20: 'rgba(var(--color-dark-green), 0.2)',
          30: 'rgba(var(--color-dark-green), 0.3)',
          40: 'rgba(var(--color-dark-green), 0.4)',
          60: 'rgba(var(--color-dark-green), 0.6)',
          80: 'rgba(var(--color-dark-green), 0.8)',
        },
        accent: 'rgb(var(--color-accent))',

        // Background colors
        lightBackground: 'var(--bg-secondary)',
        darkBackground: 'var(--bg-light)',

        // Utility colors
        darkBlack: 'rgb(var(--color-black))',
        grayColor: 'rgb(var(--color-gray))',
        yellowColor: 'rgb(var(--color-yellow))',

        // Semantic colors for easier theming
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        textMuted: 'var(--text-muted)',
        border: 'var(--border-color)',
        borderLight: 'var(--border-light)',
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        light: 'var(--bg-light)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
      },
      borderColor: {
        primary: 'var(--border-color)',
        light: 'var(--border-light)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
