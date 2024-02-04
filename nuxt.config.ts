export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    apiBase: process.env.API_BASE,
    public: {
      apiBase: process.env.API_BASE,
    }
  },
  css: ['/assets/styles/utilities/variables.scss', '/assets/styles/main.scss'],
  modules: [
    '@nuxt/image'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'sk'
      },
      titleTemplate: '%s | Vue3Nuxt',
      title: 'Vue3Nuxt',
    }
  }
})
