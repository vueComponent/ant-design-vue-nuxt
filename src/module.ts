import { addComponent, createResolver, defineNuxtModule, useNuxt } from '@nuxt/kit'
import { libraryName,defaults } from "./config"
import { resolveComponents,resolveImports } from "./core"
import type { Options } from './types'
import { resolveOptions } from './core/options'

export default defineNuxtModule<Partial<Options>>({
  meta: {
    name: libraryName,
    configKey: 'antd'
  },
  // Default configuration options of the Nuxt module
  defaults,
  setup (_options, nuxt) {
    const options = _options as Options;

    resolveOptions()
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    nuxt.options.imports.autoImport !== false && resolveImports(options)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    nuxt.options.components !== false && resolveComponents(options)

    if (options.extractStyle) {
      extractStyle()
    }

    // const resolver = createResolver(import.meta.url)
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolver.resolve('./runtime/plugin'))
  }
})

function extractStyle() {
  const nuxt = useNuxt()
  // The spa does not need to be injected with css.
  if (!nuxt.options.ssr) {
    return;
  }
  // When generating, replace process.env.NODE_ENV to production (defaults to prerender).
  // And antd relies on process.env.NODE_ENV when generating css prefixes.
  if (nuxt.options.dev === false && nuxt.options.nitro.static) {
    nuxt.options.nitro.replace ??= {};
    nuxt.options.nitro.replace["process.env.NODE_ENV"] = "'production'";
  }

  // Adding auxiliary components
  const resolver = createResolver(import.meta.url)
  addComponent({
    name: 'AExtractStyle',
    filePath: resolver.resolve('./runtime/components/AExtractStyle.vue')
  })
}
