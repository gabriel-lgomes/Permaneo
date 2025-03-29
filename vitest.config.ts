/// <reference types="vitest" />

import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [React()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/app/setupTests.ts"],
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
  },
});
