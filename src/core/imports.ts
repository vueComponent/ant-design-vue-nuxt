import { addImportsSources } from "@nuxt/kit";
import type { Options } from "../types";
import { libraryName } from "../config";

export const resolveImports = (config:Options) => {
  const { imports } = config
  const  allImports = imports ? imports : []
  addImportsSources({
    from: libraryName + '/es',
    imports: [...allImports]
  })
}
