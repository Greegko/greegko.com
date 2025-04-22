import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  base: "/cv",
  plugins: [solid(), tailwindcss()],
  server: {
    port: 8080,
  },
});
