export default defineNuxtConfig({
  modules: ['../src/module'],

  antd: {
    extractStyle: true
  },

  imports:{
    autoImport: true
  },

  compatibilityDate: '2024-09-27'
})