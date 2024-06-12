export default defineNuxtConfig({
  modules: ['../src/module'],
  antd: {
    extractStyle: true
  },
  imports:{
    autoImport: true
  }
})
