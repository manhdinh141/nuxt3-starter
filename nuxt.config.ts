// https://v3.nuxtjs.org/api/configuration/nuxt.config
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
  experimental: {
    reactivityTransform: true,
  },
  vite: {
    plugins: [
      // ...
      AutoImport({
        resolvers: [ElementPlusResolver({
          ssr: true,
        })],
      }),
      Components({
        resolvers: [ElementPlusResolver({
          ssr: true,
        })],
      }),
    ],
  },

  webpack: {
    plugins: [
      // ...
      AutoImport({
        resolvers: [ElementPlusResolver({
          ssr: true,
        })],
      }),
      Components({
        resolvers: [ElementPlusResolver({
          ssr: true,
        })],
      }),
    ],
  },
})
