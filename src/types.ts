export type PresetImport = string 


export interface Options {
  icons: false | PresetImport[]
  components: false | PresetImport[]
  imports: PresetImport[]
}
