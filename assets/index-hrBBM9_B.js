import{d as g,l as r,o as S,v as E,w as p,h as c,a as t,n as i,b as e,e as n,f as l,g as B}from"./index-jt5A6YvX.js";import{T as k}from"./Table--ZUwi-5c.js";import{F as C,E as A}from"./Footer-pA9vZmAn.js";import{p as h}from"./EsMenu-DaP7wCVq.js";const N={style:{padding:"10px"}},T=t("br",null,null,-1),I=t("br",null,null,-1),j={style:{padding:"10px",height:"600px"}},P=t("br",null,null,-1),V=t("br",null,null,-1),w=`<template>
 <EsButton mold="primary" @click="next">Next Step</EsButton>
 <EsSteps :current="current" :items="items"/>
</template>

// ...
import { ref } from 'vue'

const current = ref<number>(1)

const next = () => {
  if (current.value < items.value.length) {
    current.value += 1
  } else {
    current.value = 0
  }
}

const items = ref<ItemType[]>([
  {
    title: 'step1',
    description: 'step1 description',
    time: '2024-1-31 15:03',
  },
  {
    title: 'step2',
    description: 'step2 description',
    time: '2024-1-31 15:04',
  },
  {
    title: 'step3',
    description: 'step3 description',
    time: '2024-1-31 15:06',
  },
])
`,z=`<template>
 <EsButton mold="primary" @click="next">Next Step</EsButton>
 <EsSteps :current="current" :items="items" direction="vertical"/>
</template>

// ...
import { ref } from 'vue'

const current = ref<number>(1)

const next = () => {
  if (current.value < items.value.length) {
    current.value += 1
  } else {
    current.value = 0
  }
}

const items = ref<ItemType[]>([
  {
    title: 'step1',
    description: 'step1 description',
    time: '2024-1-31 15:03',
  },
  {
    title: 'step2',
    description: 'step2 description',
    time: '2024-1-31 15:04',
  },
  {
    title: 'step3',
    description: 'step3 description',
    time: '2024-1-31 15:06',
  },
])
`,K=g({name:"StepsPage",__name:"index",setup(F){const a=r(1),_=r([{title:"Steps 步骤条",id:"steps"},{title:"基本使用",id:"base-steps"},{title:"垂直步骤条",id:"vertical-steps"},{title:"API",id:"steps-api",part:[{label:"Attributes",id:"steps-attributes"}]}]),u=()=>{a.value<o.value.length?a.value+=1:a.value=0},o=r([{title:"step1",description:"step1 description",time:"2024-1-31 15:03"},{title:"step2",description:"step2 description",time:"2024-1-31 15:04"},{title:"step3",description:"step3 description",time:"2024-1-31 15:06"}]),b=r([{label:"属性名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"},{label:"默认值",key:"value"}]),x=r([{name:"current",explain:"完成项",type:"number",value:"-"},{name:"items",explain:"步骤条的数据源",type:"Array",value:"-"},{name:"direction",explain:"步骤条的方向",type:"string",value:"horizontal"}]),{b:f,e:s}=B("content");return(D,U)=>{const d=c("EsButton"),m=c("EsSteps"),v=c("highlightjs"),y=c("EsScrollBar");return S(),E(y,null,{default:p(()=>[t("div",{class:i(e(f)())},[t("div",{class:i(e(s)("container"))},[t("div",{class:i(e(s)("section"))},[t("h1",{id:"steps",class:i([e(s)("title"),e(s)("headline")])},"steps 步骤条",2),t("p",{class:i(e(s)("text"))},"引导用于按照流程完成任务。",2)],2),t("div",{class:i(e(s)("section"))},[t("h2",{id:"base-steps",class:i([e(s)("title"),e(s)("headline")])},"基本用法",2),t("p",{class:i(e(s)("text"))},[n("使用"),t("code",{class:i(e(s)("code"))},"items",2),n("来设置步骤条的数据源。")],2),t("p",{class:i(e(s)("text"))},[n("使用"),t("code",{class:i(e(s)("code"))},"current",2),n(" 来设置完成项。")],2),t("div",{class:i(e(s)("play"))},[t("div",N,[l(d,{mold:"primary",onClick:u},{default:p(()=>[n("Next Step")]),_:1}),T,I,l(m,{current:a.value,items:o.value},null,8,["current","items"])]),l(v,{language:"javascript",code:w})],2)],2),t("div",{class:i(e(s)("section"))},[t("h2",{id:"vertical-steps",class:i([e(s)("title"),e(s)("headline")])},"垂直的步骤条",2),t("p",{class:i(e(s)("text"))},[n("使用"),t("code",{class:i(e(s)("code"))},"direction",2),n("来设置步骤条的方向，步骤条的高度和宽度都继承父类。")],2),t("div",{class:i(e(s)("play"))},[t("div",j,[l(d,{mold:"primary",onClick:u},{default:p(()=>[n("Next Step")]),_:1}),P,V,l(m,{current:a.value,items:o.value,direction:"vertical"},null,8,["current","items"])]),l(v,{language:"javascript",code:z})],2)],2),t("div",{class:i(e(s)("section"))},[t("h2",{id:"steps-api",class:i([e(s)("title"),e(s)("headline")])},"API",2)],2),t("div",{class:i(e(s)("section"))},[t("h2",{id:"steps-attributes",class:i([e(s)("title"),e(s)("headline")])},"Attributes",2),l(k,{columns:b.value,data:x.value},null,8,["columns","data"])],2),l(C,{last:{label:"Scrollbar 滚动容器",path:e(h)("scrollbar")},next:{label:"Alert 提示",path:e(h)("alert")}},null,8,["last","next"])],2),t("div",{class:i(e(s)("nav"))},[l(A,{items:_.value},null,8,["items"])],2)],2)]),_:1})}}});export{K as default};
