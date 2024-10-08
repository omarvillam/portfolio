import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import {installGlobals} from "@remix-run/node";
installGlobals();

export default defineConfig({
  server: { port: 3000, fs: { allow: ['../..'] } },
  plugins: [remix({ ssr: false })],
});