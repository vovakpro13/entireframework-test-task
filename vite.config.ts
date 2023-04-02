import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babelMacros from "vite-plugin-babel-macros";

export default defineConfig(() => {
  return {
    plugins: [react(), babelMacros()],
  };
});
