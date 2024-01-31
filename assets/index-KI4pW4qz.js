import{d as A,l as n,o as B,v as S,w as r,h as u,a as l,n as s,b as e,e as t,f as o,g as j}from"./index-jt5A6YvX.js";import{F as D,E as N}from"./Footer-pA9vZmAn.js";import{T as p}from"./Table--ZUwi-5c.js";import{p as g}from"./EsMenu-DaP7wCVq.js";const T=l("span",null,"  ",-1),U=`<template>
  <EsRadio v-model="gender" name="gender" label="girl" checked @change="changeHandle">女</EsRadio>  
  <EsRadio v-model="gender" name="gender" label="man">男</EsRadio>  
</template>

// ...
import { ref } from 'vue'
const gender = ref<string>('')

const changeHandle = (e: Event) => {
  console.log(e)
}
`,H=`<template>
  <EsRadio v-model="gender" name="gender" label="girl" disabled>女</EsRadio>   
</template>

// ...
import { ref } from 'vue'
const gender = ref<string>('')
`,q=A({name:"RadioPage",__name:"index",setup(I){const{b:h,e:a}=j("content"),d=n(""),f=n([{title:"Radio 单选框",id:"radio"},{title:"基本使用",id:"base-radio"},{title:"禁用单选框",id:"disabled-radio"},{title:"API",id:"radio-api",part:[{label:"Attributes",id:"radio-attributes"},{label:"Events",id:"radio-events"},{label:"Slots",id:"radio-slots"}]}]),x=n([{label:"属性名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"},{label:"默认值",key:"value"}]),y=n([{name:"v-model",explain:"用于数据的双向绑定",type:"string",value:"-"},{name:"label",explain:"用于定义单选框的值和id和label的for属性",type:"string",value:"-"},{name:"name",explain:"用于定义单选框的name",type:"string",value:"-"},{name:"checked",explain:"是否默认选中",type:"boolean",value:"false"},{name:"disabled",explain:"是否禁用单选框",type:"boolean",value:"false"}]),E=n([{label:"事件名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"}]),k=n([{name:"change",explain:"单选框值变化时触发",type:"(event: Event) => void"}]),_=n([{label:"插槽名",key:"name"},{label:"说明",key:"explain"}]),V=n([{name:"default",explain:"自定义默认内容"}]),R=v=>{console.log(v)};return(v,i)=>{const m=u("EsRadio"),b=u("highlightjs"),C=u("EsScrollBar");return B(),S(C,null,{default:r(()=>[l("div",{class:s(e(h)())},[l("div",{class:s(e(a)("container"))},[l("div",{class:s(e(a)("section"))},[l("h1",{id:"radio",class:s([e(a)("title"),e(a)("headline")])},"Radio 单选框",2),l("p",{class:s(e(a)("text"))},"单选框允许用户在多个选项中选取一个选项。",2),l("div",{class:s(e(a)("section"))},[l("p",{class:s(e(a)("text"))},"如果有多个选择用户只能选择一个，单选框就是最好的选择。",2)],2)],2),l("div",{class:s(e(a)("section"))},[l("h2",{id:"base-radio",class:s([e(a)("title"),e(a)("headline")])},"基本用法",2),l("p",{class:s(e(a)("text"))},[t("使用"),l("code",{class:s(e(a)("code"))},"v-model",2),t("来进行数据的双向绑定 。")],2),l("p",{class:s(e(a)("text"))},[t(" 使用"),l("code",{class:s(e(a)("code"))},"name",2),t("来定义这组单选框。 使用"),l("code",{class:s(e(a)("code"))},"label",2),t("来定义单选框的值和id和文字label的for属性。 使用"),l("code",{class:s(e(a)("code"))},"checked",2),t("实现单选框的默认选中。 ")],2),l("div",{class:s(e(a)("play"))},[l("div",{class:s(e(a)("finished-product"))},[o(m,{modelValue:d.value,"onUpdate:modelValue":i[0]||(i[0]=c=>d.value=c),name:"gender",label:"girl",checked:"",onChange:R},{default:r(()=>[t("女")]),_:1},8,["modelValue"]),T,o(m,{modelValue:d.value,"onUpdate:modelValue":i[1]||(i[1]=c=>d.value=c),name:"gender",label:"man"},{default:r(()=>[t("男")]),_:1},8,["modelValue"])],2),o(b,{language:"javascript",code:U})],2)],2),l("div",{class:s(e(a)("section"))},[l("h2",{id:"disabled-radio",class:s([e(a)("title"),e(a)("headline")])},"禁用单选框",2),l("p",{class:s(e(a)("text"))},[t("使用"),l("code",{class:s(e(a)("code"))},"disabled",2),t("来禁用单选框 。")],2),l("div",{class:s(e(a)("play"))},[l("div",{class:s(e(a)("finished-product"))},[o(m,{modelValue:d.value,"onUpdate:modelValue":i[2]||(i[2]=c=>d.value=c),name:"gender",label:"girl",disabled:""},{default:r(()=>[t("女")]),_:1},8,["modelValue"])],2),o(b,{language:"javascript",code:H})],2)],2),l("div",{class:s(e(a)("section"))},[l("h2",{id:"radio-api",class:s([e(a)("title"),e(a)("headline")])},"API",2)],2),l("div",{class:s(e(a)("section"))},[l("h2",{id:"radio-attributes",class:s([e(a)("title"),e(a)("headline")])},"Attributes",2),o(p,{columns:x.value,data:y.value},null,8,["columns","data"])],2),l("div",{class:s(e(a)("section"))},[l("h2",{id:"radio-events",class:s([e(a)("title"),e(a)("headline")])},"Events",2),o(p,{columns:E.value,data:k.value},null,8,["columns","data"])],2),l("div",{class:s(e(a)("section"))},[l("h2",{id:"radio-slots",class:s([e(a)("title"),e(a)("headline")])},"Slots",2),o(p,{columns:_.value,data:V.value},null,8,["columns","data"])],2),o(D,{last:{label:"Input 输入框",path:e(g)("input")},next:{label:"checkbox 多选框",path:e(g)("checkbox")}},null,8,["last","next"])],2),l("div",{class:s(e(a)("nav"))},[o(N,{items:f.value},null,8,["items"])],2)],2)]),_:1})}}});export{q as default};