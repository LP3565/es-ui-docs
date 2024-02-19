import{d as r,l as d,o as m,v as u,w as v,h as i,a,n as t,b as s,f as l,g as h}from"./index--9Hnqm5g.js";import{F as g,E as f}from"./Footer-845KTPyZ.js";import{p as b}from"./EsMenu-DaP7wCVq.js";const _=`# npm
$ npm install esui-v

# pnpm
$ pnpm add esui-v

# yarn
$ yarn add esui-v
`,x=`// main.ts
import { createApp } from 'vue'
import EsUi from 'esui-v'
import 'esui-v/theme/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(EsUi)
app.mount('#app')
`,E=`// tsconfig.json
{
  "compilerOptions": {
    "types": ["esui-v/global"]
  }
}
`,B=`// demo.vue
<template>
  <EsButton>按钮</EsButton>
</template>

// ...
import { EsButton } from 'esui-v'

// main.ts
import 'esui-v/theme/es-button.css'
`,V=r({name:"InstallPage",__name:"index",setup(j){const n=d([{title:"安装",id:"install",part:[{label:"默认安装",id:"default-install"}]},{title:"用法",id:"usage",part:[{label:"完整引入",id:"full-import"},{label:"手动按需引入",id:"ondemand-import"},{label:"Volar支持",id:"volar"}]}]),{b:p,e}=h("content");return(C,y)=>{const o=i("highlightjs"),c=i("EsScrollBar");return m(),u(c,{ref:"scrollRef"},{default:v(()=>[a("div",{class:t(s(p)())},[a("div",{class:t(s(e)("container"))},[a("div",{class:t(s(e)("section"))},[a("h1",{id:"install",class:t([s(e)("title"),s(e)("headline")])},"安装",2),a("p",{class:t(s(e)("text"))},"安装 Es UI, 设计优美的组件库",2)],2),a("div",{class:t(s(e)("section"))},[a("h2",{id:"default-install",class:t([s(e)("subheading"),s(e)("headline")])},"默认安装",2),a("p",{class:t(s(e)("text"))},"使用你喜欢的包管理工具将 Es UI 添加到项目中",2),l(o,{language:"javascript",code:_})],2),a("div",{class:t(s(e)("section"))},[a("h1",{id:"usage",class:t([s(e)("title"),s(e)("headline")])},"用法",2)],2),a("div",{class:t(s(e)("section"))},[a("h2",{id:"full-import",class:t([s(e)("subheading"),s(e)("headline")])},"完整引入",2),a("p",{class:t(s(e)("text"))},"如果你对打包后的文件体积不在乎，使用完整引入使开发更方便快捷。",2),l(o,{language:"javascript",code:x})],2),a("div",{class:t(s(e)("section"))},[a("h2",{id:"ondemand-import",class:t([s(e)("subheading"),s(e)("headline")])},"手动按需引入",2),a("p",{class:t(s(e)("text"))},"手动按需引入能够很好的控制打包后的文件体积。",2),l(o,{language:"javascript",code:B})],2),a("div",{class:t(s(e)("section"))},[a("h2",{id:"volar",class:t([s(e)("subheading"),s(e)("headline")])},"Volar 支持",2),a("p",{class:t(s(e)("text"))},"如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。",2),l(o,{language:"javascript",code:E})],2),l(g,{next:{path:s(b)("button"),label:"Button 按钮"}},null,8,["next"])],2),a("div",{class:t(s(e)("nav"))},[l(f,{items:n.value},null,8,["items"])],2)],2)]),_:1},512)}}});export{V as default};
