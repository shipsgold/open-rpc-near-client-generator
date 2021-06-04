import { components } from "@open-rpc/generator"
import hooks from "./hooks"

const component: components.IComponentModule = {
  hooks: hooks,
  staticPath: (language, type)=> {
   return `${__dirname}/templates/${type}/${language}`
  }
}

export default component;