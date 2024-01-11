<script lang="ts" setup>
import { createCache, extractStyle, StyleProvider } from "ant-design-vue"
import { useNuxtApp, useHead } from "#imports";
const cache = createCache()

const app = useNuxtApp()

// Real-time style extraction at ssr
// Pre-rendered extraction styles for ssg
app.hook('app:rendered', () => {
  useHead({
    style: [extractStyle(cache, true)]
  })
})
</script>

<template>
  <StyleProvider :cache="cache">
    <slot />
  </StyleProvider>
</template>
