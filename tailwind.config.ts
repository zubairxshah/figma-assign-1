import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myPink: "#f98585",
        myBlack: "#21243D",
        recentBackground:"#f4e2e2",
        heroElipse:"#AA9F9F4F",
        footerBackground: "#FAF5F5",
        shadowButton:"#414141",
        background: "#f6f1f1",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
