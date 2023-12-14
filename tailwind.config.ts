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
        torange: '#ff7f50', // Define your custom orange color
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // No need to redefine 'gradient-to-r' if it's already defined by default
      },
      // Define the specific gradient color stops for the text
      gradientColorStops: {
        'start-gold': '#ffd700',
        'end-torange': '#ff7f50',
      },
      boxShadow: {
        'custom-torange': '0 4px 14px 0 rgba(255, 127, 80, 0.25)', // example RGBA format
      }
    },
  },
  plugins: [],
};

export default config;
