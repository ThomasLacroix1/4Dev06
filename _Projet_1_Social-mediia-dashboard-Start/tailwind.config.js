/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        forground:"hsl(var(--forground)/<alpha-value>)",
        background:"hsl(var(--background)/<alpha-value>)",
        topBackgroundPattern:"hsl(var(--top-background-pattern)/<alpha-value>)",
        cardBackground:"hsl(var(--card-background)/<alpha-value>)",
        cardHoverBackground:"hsl(var(--card-hover-background)/<alpha-value>)",
        text:"hsl(var(--text)/<alpha-value>)"
      },
    },
  },
  plugins: [],
}

