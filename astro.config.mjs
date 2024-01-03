import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx()],
  site: "https://credo.codes",
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});