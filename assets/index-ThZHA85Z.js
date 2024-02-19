import{d as V,l as i,o as _,v as C,w as k,h as u,a as t,n as a,b as e,e as d,f as l,g as A}from"./index--9Hnqm5g.js";import{F as B,E as j}from"./Footer-845KTPyZ.js";import{T as v}from"./Table-44CwVaMs.js";import{p as b}from"./EsMenu-DaP7wCVq.js";const D=t("span",null,"  ",-1),N=`<template>
  <EsSwitch v-model="isSwitch" id="test1" />
  <EsSwitch v-model="isSwitch2" id="test2" />
</template>

//...
const isSwitch = ref(false)
const isSwitch2 = ref(false)
`,T=`<template>
  <EsSwitch v-model="isDisabled" :disabled="true" id="disabled" />
</template>
`,G=V({__name:"index",setup(U){const p=i(!1),h=i(!1),m=i(!1),w=i([{title:"Switch 开关",id:"switch"},{title:"基本使用",id:"base-switch"},{title:"禁用开关",id:"disabled-switch"},{title:"API",id:"switch-api",part:[{label:"Attributes",id:"switch-attributes"},{label:"Events",id:"switch-events"}]}]),f=i([{label:"属性名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"},{label:"默认值",key:"value"}]),x=i([{name:"v-model",explain:"控制开关的状态",type:"boolean",value:"false"},{name:"id",explain:"开关的标识，必填",type:"string",value:"-"},{name:"disabled",explain:"是否禁用开关",type:"boolean",value:"false"},{name:"name",explain:"开关名称",type:"string",value:"-"}]),y=i([{label:"事件名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"}]),S=i([{name:"change",explain:"开关状态发生变化时触发",type:"(event: Event) => void"}]),{b:E,e:s}=A("content");return(F,c)=>{const o=u("EsSwitch"),r=u("highlightjs"),g=u("EsScrollBar");return _(),C(g,null,{default:k(()=>[t("div",{class:a(e(E)())},[t("div",{class:a(e(s)("container"))},[t("div",{class:a(e(s)("section"))},[t("h1",{id:"switch",class:a([e(s)("title"),e(s)("headline")])},"Switch 开关",2),t("p",{class:a(e(s)("text"))},"设置打开或关闭的状态。",2),t("div",{class:a(e(s)("section"))},[t("p",{class:a(e(s)("text"))},"开关能够清晰的分辨当前的状态。",2)],2)],2),t("div",{class:a(e(s)("section"))},[t("h2",{id:"base-switch",class:a([e(s)("title"),e(s)("headline")])},"基本用法",2),t("p",{class:a(e(s)("text"))},[d("使用"),t("code",{class:a(e(s)("code"))},"v-model",2),d("来进行控制开关的状态。")],2),t("p",{class:a(e(s)("text"))},[d("必须填写 "),t("code",{class:a(e(s)("code"))},"id",2),d("属性，不然会出现错误。")],2),t("div",{class:a(e(s)("play"))},[t("div",{class:a(e(s)("finished-product"))},[l(o,{modelValue:p.value,"onUpdate:modelValue":c[0]||(c[0]=n=>p.value=n),id:"test1"},null,8,["modelValue"]),D,l(o,{modelValue:h.value,"onUpdate:modelValue":c[1]||(c[1]=n=>h.value=n),id:"test2"},null,8,["modelValue"])],2),l(r,{language:"javascript",code:N})],2)],2),t("div",{class:a(e(s)("section"))},[t("h2",{id:"disabled-switch",class:a([e(s)("title"),e(s)("headline")])},"禁用开关",2),t("p",{class:a(e(s)("text"))},[d("使用"),t("code",{class:a(e(s)("code"))},"disabled",2),d("来禁用开关。")],2),t("div",{class:a(e(s)("play"))},[t("div",{class:a(e(s)("finished-product"))},[l(o,{modelValue:m.value,"onUpdate:modelValue":c[2]||(c[2]=n=>m.value=n),disabled:!0,id:"disabled"},null,8,["modelValue"])],2),l(r,{language:"javascript",code:T})],2)],2),t("div",{class:a(e(s)("section"))},[t("h2",{id:"switch-api",class:a([e(s)("title"),e(s)("headline")])},"API",2)],2),t("div",{class:a(e(s)("section"))},[t("h2",{id:"switch-attributes",class:a([e(s)("title"),e(s)("headline")])},"Attributes",2),l(v,{columns:f.value,data:x.value},null,8,["columns","data"])],2),t("div",{class:a(e(s)("section"))},[t("h2",{id:"switch-events",class:a([e(s)("title"),e(s)("headline")])},"Events",2),l(v,{columns:y.value,data:S.value},null,8,["columns","data"])],2),l(B,{last:{label:"Select 选择器 & Cascader 级联选择器",path:e(b)("select-cascader")},next:{label:"Card 卡片",path:e(b)("card")}},null,8,["last","next"])],2),t("div",{class:a(e(s)("nav"))},[l(j,{items:w.value},null,8,["items"])],2)],2)]),_:1})}}});export{G as default};