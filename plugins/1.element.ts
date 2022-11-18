import ElementPlus, { ID_INJECTION_KEY } from 'element-plus'
import 'element-plus/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 10000),
    current: 0,
  })

  nuxtApp.vueApp.use(ElementPlus)
})
