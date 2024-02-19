import{d as A,l as o,o as S,v as V,w as i,h as u,a,n as t,b as e,e as d,f as s,g as z}from"./index--9Hnqm5g.js";import{T as m}from"./Table-44CwVaMs.js";import{F as M,E as N}from"./Footer-845KTPyZ.js";import{p as g}from"./EsMenu-DaP7wCVq.js";const T=a("h2",null,"对话框",-1),j=`<template>
  <EsButton @click="open = true">点击</EsButton>
   <EsDialog v-model="open" show-close @close="closeHandle" center :modal="isModal" :z-index="20">
     <template #header> 头部 </template>
     <template #default>
       <h2>对话框</h2>
       <EsButton @click="isModal = !isModal">隐藏遮盖层</EsButton>
     </template>
     <template #footer> 底部 </template>
   </EsDialog>
</template>

// ...
import { ref } from 'vue'

const open = ref<boolean>(false)
const isModal = ref<boolean>(true)

const closeHandle = () => {
  open.value = false
}
`,q=A({name:"DialogPage",__name:"index",setup(H){const c=o(!1),p=o(!0),b=o([{title:"Dialog 对话框",id:"dialog"},{title:"基本使用",id:"base-dialog"},{title:"API",id:"dialog-api",part:[{label:"Attributes",id:"dialog-attributes"},{label:"Events",id:"dialog-events"},{label:"Slots",id:"dialog-slots"}]}]),h=()=>{c.value=!1},f=o([{label:"属性名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"},{label:"默认值",key:"value"}]),x=o([{name:"v-model",explain:"控制对话框显示隐藏",type:"boolean",value:"-"},{name:"center",explain:"对话框中文字居中",type:"boolean",value:"false"},{name:"top",explain:"对话框距离top的距离",type:"string",value:"50vh"},{name:"showClose",explain:"显示关闭按钮",type:"boolean",value:"false"},{name:"zIndex",explain:"css的z-index属性",type:"number",value:"9"},{name:"width",explain:"对话框的宽度",type:"string",value:"50%"},{name:"modal",explain:"是否出现遮盖层",type:"boolean",value:"true"}]),y=o([{label:"事件名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"}]),E=o([{name:"close",explain:"点击遮盖层或关闭按钮时触发",type:"() => void"}]),_=o([{label:"插槽名",key:"name"},{label:"说明",key:"explain"}]),k=o([{name:"default",explain:"自定义默认内容"},{name:"header",explain:"自定义头部内容"},{name:"footer",explain:"自定义底部内容"}]),{b:C,e:l}=z("content");return(I,n)=>{const v=u("EsButton"),D=u("EsDialog"),B=u("highlightjs"),w=u("EsScrollBar");return S(),V(w,null,{default:i(()=>[a("div",{class:t(e(C)())},[a("div",{class:t(e(l)("container"))},[a("div",{class:t(e(l)("section"))},[a("h1",{id:"dialog",class:t([e(l)("title"),e(l)("headline")])},"Dialog 对话框",2),a("p",{class:t(e(l)("text"))},"向用户通报任务或关键信息。",2)],2),a("div",{class:t(e(l)("section"))},[a("h2",{id:"base-dialog",class:t([e(l)("title"),e(l)("headline")])},"基本用法",2),a("p",{class:t(e(l)("text"))},[d("使用"),a("code",{class:t(e(l)("code"))},"v-model",2),d("来控制对话框的显示与隐藏。")],2),a("div",{class:t(e(l)("play"))},[a("div",{class:t(e(l)("finished-product"))},[s(v,{onClick:n[0]||(n[0]=r=>c.value=!0)},{default:i(()=>[d("点击")]),_:1}),s(D,{modelValue:c.value,"onUpdate:modelValue":n[2]||(n[2]=r=>c.value=r),"show-close":"",onClose:h,center:"",modal:p.value,"z-index":20},{header:i(()=>[d(" 头部 ")]),default:i(()=>[T,s(v,{onClick:n[1]||(n[1]=r=>p.value=!p.value)},{default:i(()=>[d("隐藏遮盖层")]),_:1})]),footer:i(()=>[d(" 底部 ")]),_:1},8,["modelValue","modal"])],2),s(B,{language:"javascript",code:j})],2)],2),a("div",{class:t(e(l)("section"))},[a("h2",{id:"dialog-api",class:t([e(l)("title"),e(l)("headline")])},"API",2)],2),a("div",{class:t(e(l)("section"))},[a("h2",{id:"dialog-attributes",class:t([e(l)("title"),e(l)("headline")])},"Attributes",2),s(m,{columns:f.value,data:x.value},null,8,["columns","data"])],2),a("div",{class:t(e(l)("section"))},[a("h2",{id:"dialog-events",class:t([e(l)("title"),e(l)("headline")])},"Events",2),s(m,{columns:y.value,data:E.value},null,8,["columns","data"])],2),a("div",{class:t(e(l)("section"))},[a("h2",{id:"dialog-slots",class:t([e(l)("title"),e(l)("headline")])},"Slots",2),s(m,{columns:_.value,data:k.value},null,8,["columns","data"])],2),s(M,{last:{label:"Alert 提示",path:e(g)("alert")},next:{label:"Drawer 抽屉",path:e(g)("drawer")}},null,8,["last","next"])],2),a("div",{class:t(e(l)("nav"))},[s(N,{items:b.value},null,8,["items"])],2)],2)]),_:1})}}});export{q as default};
