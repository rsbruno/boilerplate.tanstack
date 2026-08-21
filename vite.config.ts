import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { devtools } from "@tanstack/devtools-vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const config = defineConfig({
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      router: {
        routeFileIgnorePattern: "_components|_utils|_schemas|_layout",
        generatedRouteTree: "./routes/index.ts",
        routesDirectory: "./pages",
        routeFileIgnorePrefix: "-",
        entry: "routes/router",
        quoteStyle: "double"
      }
    }),
    viteReact()
  ],
  server: { port: 7071 },
  resolve: { tsconfigPaths: true }
});

export default config;
