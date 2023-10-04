export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: false,

  typescript: {
    shim: false,
    strict: true,
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/node_modules/vue-ts-responsive-grid-layout/dist/style.css',
  ],

  runtimeConfig: {
    public: {
    },
  },

  modules: ['@vueuse/nuxt'],

  build: {
    transpile: ['vuetify'],
  },
});
