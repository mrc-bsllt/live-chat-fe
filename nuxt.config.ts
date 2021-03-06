import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/scss/tailwind.css", "@/assets/scss/main.scss"],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt']
})
