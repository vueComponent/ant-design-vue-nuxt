import * as AllIcons from "@ant-design/icons-vue";
import type { Options } from "./types";
import { allComponents , allImports} from "./antdv";

export const libraryName = "ant-design-vue";
export const iconLibraryName = "@ant-design/icons-vue";
export const prefix = "A"


export const allIcons = Object.keys(AllIcons).filter(v=>/.*(Outlined|Filled|TwoTone)$/.test(v));

export { allComponents } from "./antdv"

export const defaults:Options = {
  components: allComponents,
  icons: allIcons,
  imports: allImports
}
