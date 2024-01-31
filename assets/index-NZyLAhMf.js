import{d as A,l as i,o as M,v as S,w as u,h as c,a as l,n as t,b as e,e as d,f as s,g as U}from"./index-jt5A6YvX.js";import{T as b}from"./Table--ZUwi-5c.js";import{F as N,E as T}from"./Footer-pA9vZmAn.js";import{p as w}from"./EsMenu-DaP7wCVq.js";const j=l("p",null,"这是抽屉",-1),H=`<template>
   <EsButton @click="open = true">点击</EsButton>
    <div>
      <EsRadio v-model="direction" label="top" name="direction">top</EsRadio>
      <EsRadio v-model="direction" label="right" name="direction" checked>right</EsRadio>
      <EsRadio v-model="direction" label="bottom" name="direction">buttom</EsRadio>
      <EsRadio v-model="direction" label="left" name="direction">left</EsRadio>
    </div>
    <EsDrawer v-model="open" :modal="isModal" @close="closeHandle" :direction="direction">
      <p>这是抽屉</p>
      <EsButton @click="isModal = !isModal">隐藏遮盖层</EsButton>
   </EsDrawer>
</template>

// ...
import {ref} from 'vue'

const open = ref<boolean>(false)
const isModal = ref<boolean>(false)

const direction = ref<'right' | 'top' | 'left' | 'bottom'>('right')

const closeHandle = () => {
  open.value = false
}
`,G=A({name:"DrawergPage",__name:"index",setup(P){const m=i(!1),v=i(!1),r=i("right"),E=()=>{m.value=!1},g=i([{title:"Drawer 抽屉",id:"drawer"},{title:"基本使用",id:"base-drawer"},{title:"API",id:"drawer-api",part:[{label:"Attributes",id:"drawer-attributes"},{label:"Events",id:"drawer-events"},{label:"Slots",id:"drawer-slots"}]}]),h=i([{label:"属性名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"},{label:"默认值",key:"value"}]),x=i([{name:"v-model",explain:"控制抽屉显示隐藏",type:"boolean",value:"-"},{name:"size",explain:"抽屉的大小",type:"string",value:"28%"},{name:"modal",explain:"是否不出现遮盖层",type:"boolean",value:"false"},{name:"direction",explain:"抽屉出现的方向",type:"enum",value:"right"}]),y=i([{label:"事件名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"}]),V=i([{name:"close",explain:"点击遮盖层时触发",type:"() => void"}]),k=i([{label:"插槽名",key:"name"},{label:"说明",key:"explain"}]),_=i([{name:"default",explain:"自定义默认内容"}]),{b:B,e:a}=U("content");return(z,o)=>{const f=c("EsButton"),p=c("EsRadio"),C=c("EsDrawer"),D=c("highlightjs"),R=c("EsScrollBar");return M(),S(R,null,{default:u(()=>[l("div",{class:t(e(B)())},[l("div",{class:t(e(a)("container"))},[l("div",{class:t(e(a)("section"))},[l("h1",{id:"drawer",class:t([e(a)("title"),e(a)("headline")])},"Drawer 抽屉",2),l("p",{class:t(e(a)("text"))},"屏幕边缘滑出的浮层面板。",2),l("div",{class:t(e(a)("section"))},[l("p",{class:t(e(a)("test"))},"一些设置操作就可以放在抽屉中。",2)],2)],2),l("div",{class:t(e(a)("section"))},[l("h2",{id:"base-drawer",class:t([e(a)("title"),e(a)("headline")])},"基本用法",2),l("p",{class:t(e(a)("text"))},[d("使用"),l("code",{class:t(e(a)("code"))},"v-model",2),d("来控制抽屉的显示与隐藏。")],2),l("p",{class:t(e(a)("text"))},[d("使用"),l("code",{class:t(e(a)("code"))},"direction",2),d("来控制抽屉出现的方向。")],2),l("div",{class:t(e(a)("play"))},[l("div",{class:t(e(a)("finished-product"))},[s(f,{onClick:o[0]||(o[0]=n=>m.value=!0)},{default:u(()=>[d("点击")]),_:1}),l("div",null,[s(p,{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=n=>r.value=n),label:"top",name:"direction"},{default:u(()=>[d("top")]),_:1},8,["modelValue"]),s(p,{modelValue:r.value,"onUpdate:modelValue":o[2]||(o[2]=n=>r.value=n),label:"right",name:"direction",checked:""},{default:u(()=>[d("right")]),_:1},8,["modelValue"]),s(p,{modelValue:r.value,"onUpdate:modelValue":o[3]||(o[3]=n=>r.value=n),label:"bottom",name:"direction"},{default:u(()=>[d("buttom")]),_:1},8,["modelValue"]),s(p,{modelValue:r.value,"onUpdate:modelValue":o[4]||(o[4]=n=>r.value=n),label:"left",name:"direction"},{default:u(()=>[d("left")]),_:1},8,["modelValue"])]),s(C,{modelValue:m.value,"onUpdate:modelValue":o[6]||(o[6]=n=>m.value=n),modal:v.value,onClose:E,direction:r.value},{default:u(()=>[j,s(f,{onClick:o[5]||(o[5]=n=>v.value=!v.value)},{default:u(()=>[d("隐藏遮盖层")]),_:1})]),_:1},8,["modelValue","modal","direction"])],2),s(D,{language:"javascript",code:H})],2)],2),l("div",{class:t(e(a)("section"))},[l("h2",{id:"drawer-api",class:t([e(a)("title"),e(a)("headline")])},"API",2)],2),l("div",{class:t(e(a)("section"))},[l("h2",{id:"drawer-attributes",class:t([e(a)("title"),e(a)("headline")])},"Attributes",2),s(b,{columns:h.value,data:x.value},null,8,["columns","data"])],2),l("div",{class:t(e(a)("section"))},[l("h2",{id:"drawer-events",class:t([e(a)("title"),e(a)("headline")])},"Events",2),s(b,{columns:y.value,data:V.value},null,8,["columns","data"])],2),l("div",{class:t(e(a)("section"))},[l("h2",{id:"drawer-slots",class:t([e(a)("title"),e(a)("headline")])},"Slots",2),s(b,{columns:k.value,data:_.value},null,8,["columns","data"])],2),s(N,{last:{label:"Dialog 对话框",path:e(w)("dialog")},next:{label:"Message 消息提示",path:e(w)("message")}},null,8,["last","next"])],2),l("div",{class:t(e(a)("nav"))},[s(T,{items:g.value},null,8,["items"])],2)],2)]),_:1})}}});export{G as default};
