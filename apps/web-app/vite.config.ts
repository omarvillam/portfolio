import {vitePlugin as remix} from "@remix-run/dev";
import {defineConfig} from "vite";
import {installGlobals} from "@remix-run/node";
import {nxCopyAssetsPlugin} from "@nx/vite/plugins/nx-copy-assets.plugin";
import {nxViteTsPaths} from "@nx/vite/plugins/nx-tsconfig-paths.plugin";

installGlobals();

export default defineConfig({
  server: {port: 3000, fs: {allow: ['../..']}},
  plugins: [remix(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
  ssr: {
    noExternal: [/^@portfolio\//]
  }
});