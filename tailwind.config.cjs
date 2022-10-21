/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "gray-300": "#B7B7B7",
      "gray-400": "#2F2F37",
      "gray-500": "#7D7D7D",
      "gray-800": "#18181B",
      "black-700": "#111112",
    },
    fontSize: {
      xl: "1.5rem",
      "2xl": "2rem",
    },
    extend: {
      colors: {
        "bright-green": "#BFFF57",
      },
    },
  },
};
