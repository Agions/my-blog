// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@element-plus/nuxt"],
  $production: {
    routeRules: {
      "/**": { isr: true },
    },
  },
  $development: {
    routeRules: {
      "/**": { isr: true },
    },
  },
});
