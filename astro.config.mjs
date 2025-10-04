import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://patricksvilla.xyz",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],

  i18n: {
    locales: ["en", "de"], // Locales you want to support
    defaultLocale: "en", // Default locale (fallback),
  },
});
