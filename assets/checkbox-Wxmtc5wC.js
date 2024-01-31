import{d as B,l as c,o as U,v as j,w as b,h as m,a,n as s,b as e,e as o,f as t,g as D}from"./index-jt5A6YvX.js";import{F as N,E as T}from"./Footer-pA9vZmAn.js";import{T as h}from"./Table--ZUwi-5c.js";import{p as v}from"./EsMenu-DaP7wCVq.js";const H=a("span",null,"  ",-1),P=a("span",null,"  ",-1),w=`<template>
  <EsCheckbox v-model="hobby.code" name="hobby" label="code" @change="changeHandle">写代码</EsCheckbox>
  <EsCheckbox v-model="hobby.game" name="hobby" label="game">打游戏</EsCheckbox>
  <EsCheckbox v-model="hobby.sleep" name="hobby" label="sleep">睡觉</EsCheckbox>
</template>

// ...
import { ref } from 'vue'
const hobby = ref({
  code: false,
  game: false,
  sleep: false,
})

const changeHandle = (e: Event) => {
  console.log(e)
}
`,F=`<template>
  <EsCheckbox v-model="exercise.ropeSkipping" name="exercise" label="ropeSkipping" disabled>跳绳</EsCheckbox>  
</template>

// ...
import { ref } from 'vue'
const exercise = ref({
  ropeSkipping: false,
})

`,J=B({name:"CheckboxPage",__name:"checkbox",setup(I){const{b:k,e:l}=D("content"),d=c({code:!1,game:!1,sleep:!1}),u=c({ropeSkipping:!1}),f=c([{title:"Checkbox 复选框",id:"checkbox"},{title:"基本使用",id:"base-checkbox"},{title:"禁用复选框",id:"disabled-checkbox"},{title:"API",id:"checkbox-api",part:[{label:"Attributes",id:"checkbox-attributes"},{label:"Events",id:"checkbox-events"},{label:"Slots",id:"checkbox-slots"}]}]),g=c([{label:"属性名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"},{label:"默认值",key:"value"}]),y=c([{name:"v-model",explain:"用于数据的双向绑定",type:"string",value:"-"},{name:"label",explain:"用于定义复选框id和label的for属性",type:"string",value:"-"},{name:"name",explain:"用于定义复选框的name",type:"string",value:"-"},{name:"checked",explain:"是否默认选中",type:"boolean",value:"false"},{name:"disabled",explain:"是否禁用复选框",type:"boolean",value:"false"}]),C=c([{label:"事件名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"}]),E=c([{name:"change",explain:"复选框值变化时触发",type:"(event: Event) => void"}]),V=c([{label:"插槽名",key:"name"},{label:"说明",key:"explain"}]),_=c([{name:"default",explain:"自定义默认内容"}]),S=r=>{console.log(r)};return(r,n)=>{const p=m("EsCheckbox"),x=m("highlightjs"),A=m("EsScrollBar");return U(),j(A,null,{default:b(()=>[a("div",{class:s(e(k)())},[a("div",{class:s(e(l)("container"))},[a("div",{class:s(e(l)("section"))},[a("h1",{id:"checkbox",class:s([e(l)("title"),e(l)("headline")])},"Checkbox 复选框",2),a("p",{class:s(e(l)("text"))},"复选框允许用户从一组选择项中选择多个。",2),a("div",{class:s(e(l)("section"))},[a("p",{class:s(e(l)("text"))},"如果有多个选择用户可以选择多个，复选框就是最好的选择。",2)],2)],2),a("div",{class:s(e(l)("section"))},[a("h2",{id:"base-checkbox",class:s([e(l)("title"),e(l)("headline")])},"基本用法",2),a("p",{class:s(e(l)("text"))},[o("使用"),a("code",{class:s(e(l)("code"))},"v-model",2),o("来进行数据的双向绑定 。")],2),a("p",{class:s(e(l)("text"))},[o(" 使用"),a("code",{class:s(e(l)("code"))},"name",2),o("来定义这组复选框。 使用"),a("code",{class:s(e(l)("code"))},"label",2),o("来定义复选框id和文字label的for属性。 使用"),a("code",{class:s(e(l)("code"))},"checked",2),o("实现单选框的默认选中。 ")],2),a("div",{class:s(e(l)("play"))},[a("div",{class:s(e(l)("finished-product"))},[t(p,{modelValue:d.value.code,"onUpdate:modelValue":n[0]||(n[0]=i=>d.value.code=i),name:"hobby",label:"code",onChange:S},{default:b(()=>[o("写代码")]),_:1},8,["modelValue"]),H,t(p,{modelValue:d.value.game,"onUpdate:modelValue":n[1]||(n[1]=i=>d.value.game=i),name:"hobby",label:"game"},{default:b(()=>[o("打游戏")]),_:1},8,["modelValue"]),P,t(p,{modelValue:d.value.sleep,"onUpdate:modelValue":n[2]||(n[2]=i=>d.value.sleep=i),name:"hobby",label:"sleep"},{default:b(()=>[o("睡觉")]),_:1},8,["modelValue"])],2),t(x,{language:"javascript",code:w})],2)],2),a("div",{class:s(e(l)("section"))},[a("h2",{id:"disabled-checkbox",class:s([e(l)("title"),e(l)("headline")])},"禁用复选框",2),a("p",{class:s(e(l)("text"))},[o("使用"),a("code",{class:s(e(l)("code"))},"disabled",2),o("来禁用复选框 。")],2),a("div",{class:s(e(l)("play"))},[a("div",{class:s(e(l)("finished-product"))},[t(p,{modelValue:u.value.ropeSkipping,"onUpdate:modelValue":n[3]||(n[3]=i=>u.value.ropeSkipping=i),name:"exercise",label:"ropeSkipping",disabled:""},{default:b(()=>[o("跳绳")]),_:1},8,["modelValue"])],2),t(x,{language:"javascript",code:F})],2)],2),a("div",{class:s(e(l)("section"))},[a("h2",{id:"checkbox-api",class:s([e(l)("title"),e(l)("headline")])},"API",2)],2),a("div",{class:s(e(l)("section"))},[a("h2",{id:"checkbox-attributes",class:s([e(l)("title"),e(l)("headline")])},"Attributes",2),t(h,{columns:g.value,data:y.value},null,8,["columns","data"])],2),a("div",{class:s(e(l)("section"))},[a("h2",{id:"checkbox-events",class:s([e(l)("title"),e(l)("headline")])},"Events",2),t(h,{columns:C.value,data:E.value},null,8,["columns","data"])],2),a("div",{class:s(e(l)("section"))},[a("h2",{id:"checkbox-slots",class:s([e(l)("title"),e(l)("headline")])},"Slots",2),t(h,{columns:V.value,data:_.value},null,8,["columns","data"])],2),t(N,{last:{label:"Radio 单选框",path:e(v)("radio")},next:{label:"select 选择器 & Cascader 级联选择器",path:e(v)("select-cascader")}},null,8,["last","next"])],2),a("div",{class:s(e(l)("nav"))},[t(T,{items:f.value},null,8,["items"])],2)],2)]),_:1})}}});export{J as default};
