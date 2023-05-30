export type PresetImport = string | [name: string, as?: string, from?: string]


/** Used to filter files that need to automatically import styles and other functions */
export interface TransformOptions {
  include: RegExp[]
  exclude: RegExp[]
}

export interface Options extends TransformOptions {
  icons: false | string[]
  components: false | string[]
  imports: string[]
}
