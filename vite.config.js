import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/expense-splitter/",
  plugins: [tailwindcss()],
  server: {
    port: 3001,
  },
});
