import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {}
  },
  vite: {
    plugins: [
      svgLoader({
      }),
    ],
  },

  modules: ['@nuxtjs/tailwindcss'],
})