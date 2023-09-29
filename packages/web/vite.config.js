import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  resolve: {
    alias: {},
  },
  server: {
    port: 8080,
  },
  plugins: [
    solid(),
    viteStaticCopy({
      targets: [{ src: "../../node_modules/@shoelace-style/shoelace/dist/assets", dest: "shoelace" }],
    }),
  ],
});
