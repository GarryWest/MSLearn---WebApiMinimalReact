import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Port for the development server
    proxy: {
      "/pizzas": {
        target: "http://localhost:5100", // Mock server port
        changeOrigin: true, // Change the origin of the host header to the target URL
        secure: false, // If the target server uses HTTPS, set this to true
        ws: true, // Enable WebSocket proxying
        configure: (proxy, options) => {
          // You can customize the proxy here if needed
          // For example, you can add custom headers or modify the request
          proxy.on("error", (err, req, res) => {
            console.log("Proxy error:", err);
          });
          proxy.on("proxyReq", (proxyReq, req, res) => {
            console.log("Sending request to target:", req.method, req.url);
          });
          proxy.on("proxyRes", (proxyRes, req, res) => {
            console.log(
              "Received response from target:",
              proxyRes.statusCode,
              req.url
            );
          });
        },
      },
    },
  },
});
