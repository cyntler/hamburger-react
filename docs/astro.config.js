import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    react(),
    tailwind(), // https://github.com/withastro/astro/blob/main/packages/integrations/tailwind/src/index.ts
  ],
});
