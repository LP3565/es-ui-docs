import{d as D,l as i,o as c,v as F,w as r,h as b,a,n as t,b as l,e as d,f as s,c as u,i as p,t as h,F as f,g as N,_ as I}from"./index-jt5A6YvX.js";import{T as y}from"./Table--ZUwi-5c.js";import{F as P,E as V}from"./Footer-pA9vZmAn.js";import{p as g}from"./EsMenu-DaP7wCVq.js";const w={class:"test-box"},L=`<template>
 <EsScrollBar :height="300">
   <div class="item" v-for="item in 20" :key="item">{{ item }}</div>
 </EsScrollBar>
</template>
`,U=`<template>
 <EsScrollBar :height="300">
   <div class="test-box">
      <div class="test" v-for="item in 20" :key="item">{{ item }}</div>
    </div>
 </EsScrollBar>
</template>
`,q=`<template>
  <div>
    <EsButton mold="primary" @click="add">添加</EsButton>
    <EsButton mold="error" @click="remove">删除</EsButton>
   </div>

  <EsScrollBar :height="400">
    <div class="item" v-for="item in list" :key="item">{{ item }}</div>
   </EsScrollBar>
</template>

// ...
import { ref } from 'vue'

const list = ref<number>(0)

const add = () => {
  list.value += 1
}

const remove = () => {
  list.value -= 1
}
`,G=D({name:"ScrollbarPage",__name:"index",setup(H){const{b:k,e}=N("content"),E=i([{title:"Scrollbar 滚动容器",id:"scrollbar"},{title:"基本使用",id:"base-scrollbar"},{title:"自适应",id:"auto-scrollbar"},{title:"水平滚动",id:"horizontal-scrollbar"},{title:"API",id:"scrollbar-api",part:[{label:"Attributes",id:"scrollbar-attributes"},{label:"Events",id:"scrollbar-events"},{label:"Slots",id:"scrollbar-slots"}]}]),m=i(5),S=i([{label:"属性名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"},{label:"默认值",key:"value"}]),x=i([{name:"height",explain:"滚动容器的高度",type:"number",value:"-"}]),B=i([{label:"事件名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"}]),C=i([{name:"scroll",explain:"滚动时触发",type:"({top: number, left: number}) => void"}]),A=i([{label:"插槽名",key:"name"},{label:"说明",key:"explain"}]),j=i([{name:"default",explain:"自定义插槽内容"}]),T=()=>{m.value+=1},z=()=>{m.value-=1};return(J,K)=>{const n=b("EsScrollBar"),v=b("highlightjs"),_=b("EsButton");return c(),F(n,null,{default:r(()=>[a("div",{class:t(l(k)())},[a("div",{class:t(l(e)("container"))},[a("div",{class:t(l(e)("section"))},[a("h1",{id:"scrollbar",class:t([l(e)("title"),l(e)("headline")])},"Scrollbar 滚动容器",2),a("p",{class:t(l(e)("text"))},"用于替换原生滚动条。",2)],2),a("div",{class:t(l(e)("section"))},[a("h2",{id:"base-scrollbar",class:t([l(e)("title"),l(e)("headline")])},"基本用法",2),a("p",{class:t(l(e)("text"))},[d("使用"),a("code",{class:t(l(e)("code"))},"height",2),d("来设置滚动容器的高度，不然就继承父类的高度。")],2),a("div",{class:t(l(e)("play"))},[a("div",{class:t(l(e)("finished-product"))},[s(n,{height:300},{default:r(()=>[(c(),u(f,null,p(20,o=>a("div",{class:"item",key:o},h(o),1)),64))]),_:1})],2),s(v,{language:"javascript",code:L})],2)],2),a("div",{class:t(l(e)("section"))},[a("h2",{id:"auto-scrollbar",class:t([l(e)("title"),l(e)("headline")])},"自适应",2),a("div",{class:t(l(e)("play"))},[a("div",{class:t(l(e)("finished-product"))},[a("div",null,[s(_,{mold:"primary",onClick:T},{default:r(()=>[d("添加")]),_:1}),s(_,{mold:"error",onClick:z},{default:r(()=>[d("删除")]),_:1})]),s(n,{height:400},{default:r(()=>[(c(!0),u(f,null,p(m.value,o=>(c(),u("div",{class:"item",key:o},h(o),1))),128))]),_:1})],2),s(v,{language:"javascript",code:q})],2)],2),a("div",{class:t(l(e)("section"))},[a("h2",{id:"horizontal-scrollbar",class:t([l(e)("title"),l(e)("headline")])},"水平滚动",2),a("div",{class:t(l(e)("play"))},[a("div",{class:t(l(e)("finished-product"))},[s(n,null,{default:r(()=>[a("div",w,[(c(),u(f,null,p(20,o=>a("div",{class:"test",key:o},h(o),1)),64))])]),_:1})],2),s(v,{language:"javascript",code:U})],2)],2),a("div",{class:t(l(e)("section"))},[a("h2",{id:"scrollbar-api",class:t([l(e)("title"),l(e)("headline")])},"API",2)],2),a("div",{class:t(l(e)("section"))},[a("h2",{id:"scrollbar-attributes",class:t([l(e)("title"),l(e)("headline")])},"Attributes",2),s(y,{columns:S.value,data:x.value},null,8,["columns","data"])],2),a("div",{class:t(l(e)("section"))},[a("h2",{id:"scrollbar-events",class:t([l(e)("title"),l(e)("headline")])},"Events",2),s(y,{columns:B.value,data:C.value},null,8,["columns","data"])],2),a("div",{class:t(l(e)("section"))},[a("h2",{id:"scrollbar-slots",class:t([l(e)("title"),l(e)("headline")])},"Slots",2),s(y,{columns:A.value,data:j.value},null,8,["columns","data"])],2),s(P,{last:{label:"Tag 标签",path:l(g)("tag")},next:{label:"Steps 步骤条",path:l(g)("steps")}},null,8,["last","next"])],2),a("div",{class:t(l(e)("nav"))},[s(V,{items:E.value},null,8,["items"])],2)],2)]),_:1})}}}),W=I(G,[["__scopeId","data-v-a983f8f4"]]);export{W as default};
