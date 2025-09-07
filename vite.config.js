import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://CCesar-c.github.io/Task-Manager-Reack-vite/", // replace with your repo name
});
