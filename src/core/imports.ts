import { addImportsSources } from "@nuxt/kit";
import type { Options } from "../types";

export const resolveImports = (config:Options, filePath: string) => {
  const { imports } = config
  const  allImports = imports ? imports : []
  addImportsSources({
    from: filePath,
    imports: [...allImports]
  })
}
