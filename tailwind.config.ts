import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#4D6C4A",
        accent: "#E7EFE7",
        complimentary: "#04E824",
        // accent: "#113E21",
        // accent: "#04E824",
        black: "#000",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Frank Ruhl Libre", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1350px', // Changed from default 1024px to 1440px
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
} satisfies Config;
