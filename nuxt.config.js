// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  nitro: { compressPublicAssets: true },

  modules: [
    ['@nuxtjs/tailwindcss'],
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }]
  ],
  imports: {
    dirs: ['stores'],
  },

  css: [
    "@/assets/css/base.postcss"
  ],

  googleFonts: {
    families: {
      'Noto Sans TC': [300, 400, 500, 700],
    },
    display: 'swap',
  },

  app: {
    head: {
      title: 'Serina Wu',
      htmlAttrs: { lang: 'zh' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
      meta: [
        { hid: 'description', name: 'description', content: '' },
      ]
    }
  },

  compatibilityDate: '2025-03-16'
})