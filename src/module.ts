import { defineNuxtModule } from '@nuxt/kit'
import { libraryName,defaults } from "./config"
import { resolveComponents,resolveImports } from "./core"
import { Options } from './types'
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
    nuxt.options.imports.autoImport !== false && resolveImports(options)
    nuxt.options.components !== false && resolveComponents(options)


    // const resolver = createResolver(import.meta.url)
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
