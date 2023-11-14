import type { Options } from "../types";
import {  iconLibraryName, libraryName, prefix } from "../config"
import { addComponent } from "@nuxt/kit";

export const resolveComponents = (config:Options) =>{
  const { components,icons } = config;
  const allComponents = components === false ? [] : components;
  allComponents.forEach(component=>{
    if (typeof component === 'string'){
      addComponent({
        export: component,
        name: prefix + component,
        filePath: libraryName + '/es'
      })
    }else if (Array.isArray(component)){
      addComponent({
        export: component[0],
        name: prefix + component[1],
        filePath: libraryName + '/es'
      })
    }
  })

  const allIcons = icons === false ? [] : icons;
  allIcons.forEach(icon=>{
    if (typeof  icon === 'string'){
      addComponent({
        export: icon,
        name: icon,
        filePath: iconLibraryName
      })
    }else if (Array.isArray(icon)){
      addComponent({
        export: icon[0],
        name: icon[1],
        filePath: iconLibraryName
      })
    }
  })
}
