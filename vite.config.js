import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://invoice-app-api.mms-it.com/api/v2",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});