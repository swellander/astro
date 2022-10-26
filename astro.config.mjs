import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  adapter: vercel(),
  integrations: [react(), tailwind()],
  output: "server",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
