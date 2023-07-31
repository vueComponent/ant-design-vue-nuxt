import { Options } from "../types";
import {  iconLibraryName, libraryName, prefix } from "../config"
import { addComponent } from "@nuxt/kit";

export const resolveComponents = (config:Options) =>{
  const { components, icons } = config;
  const allComponents = components === false ? [] : components;
  allComponents.forEach(component => {
    addComponent({
      export: component,
      name: prefix + component,
      filePath: libraryName + '/es'
    })
  })

  const allIcons = icons === false ? [] : icons;
  allIcons.forEach(icon=>{
    addComponent({
      export: icon,
      name: icon,
      filePath: iconLibraryName
    })
  })
}
