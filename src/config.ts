import * as AllIcons from "@ant-design/icons-vue";
import { Options } from "./types";
import { allComponents , allImports} from "./antdv";

export const libraryName = "ant-design-vue";
export const iconLibraryName = "@ant-design/icons-vue";
export const prefix = "A"


export const allIcons = Object.keys(AllIcons).filter(v=>/.*(Outlined|Filled|TwoTone)$/.test(v));

export { allComponents } from "./antdv"

const defaultInclude: RegExp[] = [
  /\.vue$/,
  /\.vue\?vue/,
  /\.vue\?v=/,
  /\.((c|m)?j|t)sx?$/
]

const defaultExclude: RegExp[] = [
  /[\\/]node_modules[\\/]/,
  /[\\/]\.git[\\/]/,
  /[\\/]\.nuxt[\\/]/
]

export const defaults:Options = {
  include: defaultInclude,
  exclude: defaultExclude,
  components: allComponents,
  icons: allIcons,
  imports: allImports
}
