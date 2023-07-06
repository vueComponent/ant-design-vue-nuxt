<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Ant Design Vue Nuxt
- Package name: @ant-design-vue/nuxt
- Description: My new Nuxt module
-->

# Ant Design Vue Nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

[Ant Design Vue](https://www.antdv.com) module for [Nuxt](https://nuxt.com/)

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@ant-design-vue/nuxt?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ✨ &nbsp;Automatically import components on demand.
- ✨ &nbsp;Automatically import icons from [@ant-design/icons-vue](https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-vue).
- ✨ &nbsp;Automatically import of message, notification and Modal methods.

## Quick Setup

1. Add `@ant-design-vue/nuxt` dependency to your project

```bash
# Using pnpm
pnpm add -D @ant-design-vue/nuxt

# Using yarn
yarn add --dev @ant-design-vue/nuxt

# Using npm
npm install --save-dev @ant-design-vue/nuxt
```

2. Add `@ant-design-vue/nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@ant-design-vue/nuxt'
  ],
  antd:{
    // Options
  }
})
```

That's it! You can now use ant-design-vue in your Nuxt app ✨


## Usage

```vue
<script lang="ts" setup>
const handleMessage = () => {
  message.info("This is a normal message");
}
</script>
<template>
  <a-button @click="handleMessage">
    button
  </a-button>
</template>
```
Reference [Nuxt documentation](https://nuxt.com/docs/guide/directory-structure/components) and [playground](./playground/app.vue) use.

## Options

### components

* Type: `array`

If there are components that are not imported automatically from Ant Design Vue, you need to add the component name here.

e.g.`['Button']`

### imports

* Type: `array`

If you wish to add automatically import content from Ant Design Vue, you can add it here.

### icons

* Type: `array`

If there are components that are not imported automatically from @ant-design/icons-vue, you need to add the component name here.


## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Build for production
npm run build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@ant-design-vue/nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@ant-design-vue/nuxt

[npm-downloads-src]: https://img.shields.io/npm/dm/@ant-design-vue/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@ant-design-vue/nuxt

[license-src]: https://img.shields.io/npm/l/@ant-design-vue/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@ant-design-vue/nuxt

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
