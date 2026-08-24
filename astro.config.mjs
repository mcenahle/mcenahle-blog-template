// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.mcenahle.dev",
  trailingSlash: "always",
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  integrations: [icon(), pagefind()],
});
