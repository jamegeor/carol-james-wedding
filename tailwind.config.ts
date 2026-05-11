import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F6F3',
        ivory: '#FFFEF9',
        warmBeige: '#E8DCC4',
        mossGreen: '#8B9B7E',
        keralaGray: '#9C9C9C',
        earthBrown: '#A67C52',
        fogGray: '#D0CEC9',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
