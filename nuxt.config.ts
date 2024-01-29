// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr     : false,
  devtools: { enabled: true },
  app     : {
    head: {
      charset: 'utf-8',
      title  : '特訓4/kai_group',
      meta   : [
        { name: 'theme-color', content: '#000000' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { property: 'og:image', content: '/ogp.png' },
        { property: 'og:type', content: 'article' },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" }, 
      ],
    },
  },
  css: [
    '@acab/reset.css',
    '~/assets/scss/base.scss',
  ],
})
