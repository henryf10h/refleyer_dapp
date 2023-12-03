import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#ffd700', // Define your custom gold color
        orange: '#ff7f50', // Define your custom orange color
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // No need to redefine 'gradient-to-r' if it's already defined by default
      },
      // Define the specific gradient color stops for the text
      gradientColorStops: {
        'start-gold': '#ffd700',
        'end-orange': '#ff7f50',
      },
    },
  },
  plugins: [],
};

export default config;
