/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "gray-50": "#EBEDF0",
      "gray-100": "#E1E3E6",
      "gray-300": "#AAAEB3",
      "gray-400": "#909499",
      "gray-500": "#76787A",
      "gray-600": "#5D5F61",
      "gray-700": "#454647",
      "gray-800": "#2C2D2E",
      "gray-900": "#18181B",
      "gray-1000": "#0A0A0A",
      "black-700": "#111112",
      "green-60": "#779D38",
      "green-80": "#9BCE48",
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    lineHeight: {
      5: "1.219rem",
      6: "1.381rem",
    },
    extend: {
      colors: {
        "gray-850": "#232324",
        "gray-950": "#141414",
        "primary-100": "#1C2212",
        "primary-200": "rgba(191, 255, 87, 0.2)",
        "primary-300": "#526C29",
        "primary-400": "#9BCE48",
        "primary-500": "#BFFF57",
        "twitter-300": "#4FB5FF",
        blur: "#18181B99",
      },
      spacing: {
        3.7: "0.938rem",
        17: "4.375rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
