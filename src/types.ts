export type PresetImport = string | [string,string]


export interface Options {
  icons: false | PresetImport[]
  components: false | PresetImport[]
  imports: PresetImport[]
  extractStyle: boolean
}


declare module "@nuxt/schema" {
  interface NuxtConfig {
    antd?: Partial<Options>
  }
  interface NuxtOptions {
    //@ts-expect-error this is a config
    antd?: Partial<Options>
  }

}
