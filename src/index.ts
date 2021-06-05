import { components } from "@open-rpc/generator"
import hooks from "./hooks"

const component: components.IComponentModule = {
  hooks: hooks,

  staticPath: (language: string, type?: string)=> {
    if(!type || type?.search("nostatic") > -1) return undefined 
    return `${__dirname}/templates/${type}/${language}`
  },
  
}

export default component;