import{d as o,k as p,o as c,c as r,a,n as t,b as e,f as i,F as d,s as m,h as u}from"./index-E4aI3LCl.js";import{F as h,E as v}from"./Footer-D3g3aB2b.js";import{p as g}from"./EsMenu-DaP7wCVq.js";const f=`# npm
$ npm install esui-v

# pnpm
$ pnpm add esui-v

# yarn
$ yarn add esui-v
`,b=`// main.ts
import { createApp } from 'vue'
import EsUi from 'esui-v'
import 'esui-v/theme/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(EsUi)
app.mount('#app')
`,x=`// tsconfig.json
{
  "compilerOptions": {
    "types": ["esui-v/global"]
  }
}
`,E=`// demo.vue
<template>
  <EsButton>按钮</EsButton>
</template>

// ...
import { EsButton } from 'esui-v'

// main.ts
import 'esui-v/theme/es-button.css'
`,I=o({name:"InstallPage",__name:"index",setup(_){const n=p([{title:"安装",id:"install",part:[{label:"默认安装",id:"default-install"}]},{title:"用法",id:"usage",part:[{label:"完整引入",id:"full-import"},{label:"手动按需引入",id:"ondemand-import"},{label:"Volar支持",id:"volar"}]}]),{e:s}=u("content");return(j,B)=>{const l=m("highlightjs");return c(),r(d,null,[a("div",{class:t(e(s)("container"))},[a("div",{class:t(e(s)("section"))},[a("h1",{id:"install",class:t([e(s)("title"),e(s)("headline")])},"安装",2),a("p",{class:t(e(s)("text"))},"安装 Es UI, 设计优美的组件库",2)],2),a("div",{class:t(e(s)("section"))},[a("h2",{id:"default-install",class:t([e(s)("subheading"),e(s)("headline")])},"默认安装",2),a("p",{class:t(e(s)("text"))},"使用你喜欢的包管理工具将 Es UI 添加到项目中",2),i(l,{language:"javascript",code:f})],2),a("div",{class:t(e(s)("section"))},[a("h1",{id:"usage",class:t([e(s)("title"),e(s)("headline")])},"用法",2)],2),a("div",{class:t(e(s)("section"))},[a("h2",{id:"full-import",class:t([e(s)("subheading"),e(s)("headline")])},"完整引入",2),a("p",{class:t(e(s)("text"))},"如果你对打包后的文件体积不在乎，使用完整引入使开发更方便快捷。",2),i(l,{language:"javascript",code:b})],2),a("div",{class:t(e(s)("section"))},[a("h2",{id:"ondemand-import",class:t([e(s)("subheading"),e(s)("headline")])},"手动按需引入",2),a("p",{class:t(e(s)("text"))},"手动按需引入能够很好的控制打包后的文件体积。",2),i(l,{language:"javascript",code:E})],2),a("div",{class:t(e(s)("section"))},[a("h2",{id:"volar",class:t([e(s)("subheading"),e(s)("headline")])},"Volar 支持",2),a("p",{class:t(e(s)("text"))},"如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。",2),i(l,{language:"javascript",code:x})],2),i(h,{next:{path:e(g)("button"),label:"Button 按钮"}},null,8,["next"])],2),a("div",{class:t(e(s)("nav"))},[i(v,{items:n.value},null,8,["items"])],2)],64)}}});export{I as default};
