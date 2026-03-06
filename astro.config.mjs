// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://dynamicsa.com.ar",
  vite: {
    plugins: [tailwindcss()],
  },
});
