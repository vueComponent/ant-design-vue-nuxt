export type PresetImport = string | [string,string]


export interface Options {
  icons: false | PresetImport[]
  components: false | PresetImport[]
  imports: PresetImport[]
  extractStyle: boolean
}


declare module "@nuxt/schema" {
  interface NuxtOptions {
    antd?: Partial<Options>
  }
}
