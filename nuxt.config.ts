// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'ElementPlus + Nuxt3',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'ElementPlus + Nuxt3',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  css: ['~/assets/index.scss'],
  experimental: {
    reactivityTransform: true,
  },
})
