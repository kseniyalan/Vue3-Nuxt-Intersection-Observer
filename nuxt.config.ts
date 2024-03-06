export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    apiBase: process.env.API_BASE,
    public: {
      apiBase: process.env.API_BASE,
    }
  },
  css: ['/assets/styles/variables/variables.scss', '/assets/styles/main.scss'],
  modules: [
    '@nuxt/image'
  ],
  //ssr: true,
  app: {
    //baseURL: '/Vue3-Nuxt-Intersection-Observer/',
    //buildAssetsDir: 'assets',
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      titleTemplate: '%s | Vue3Nuxt',
      title: 'Vue3Nuxt',
    }
  },
  image: {
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          loading: 'lazy',
          quality: '100',
        },
      }
    },
  }
})
