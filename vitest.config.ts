// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Necessário para trabalhar com React
    globals: true, // Habilita o uso de globals como 'describe', 'it', etc.
    coverage: {
      provider: "v8", // Usado para cobertura de testes
      reporter: ["text", "json", "html"], // Tipos de relatórios de cobertura
      reportsDirectory: "./coverage", // Onde os relatórios serão gerados
    },
  },
});
