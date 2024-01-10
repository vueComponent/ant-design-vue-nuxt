export default defineNuxtConfig({
  modules: ['../src/module'],
  antd: {
    extractStyle: true
  },
  imports:{
    autoImport:true
  },
  vite:{
    resolve:{
      alias:{
        'ant-design-vue/es':"ant-design-vue/es",
        'ant-design-vue':"ant-design-vue/es"
      }
    }
  }
})
