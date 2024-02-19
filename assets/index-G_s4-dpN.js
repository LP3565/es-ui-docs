import{d as _,l as i,o as A,v as B,w as N,h as c,a,n as t,b as e,e as d,f as s,g as T}from"./index--9Hnqm5g.js";import{p as g}from"./EsMenu-DaP7wCVq.js";import{F,E as H}from"./Footer-845KTPyZ.js";import{T as r}from"./Table-44CwVaMs.js";const D=a("span",null,"  ",-1),S=a("span",null,"  ",-1),z=a("span",null,"  ",-1),K=`
  <EsInput v-model="username" placeholder="请输入用户名" />
  <EsInput @change="changeHandle" v-model="email" label="Email" mold="filled" />
</template>
// ...
import { ref } from 'vue'

const username = ref<string>('')
const email = ref<string>('')

const changeHandle = (text: string) => {
  console.log(text)
}
`,L=`<template>
  <EsInput v-model="password" label="Password" mold="filled" type="password" />
</template>
// ...
import { ref } from 'vue'
const password = ref<string>('')
`,M=`<template>
  <EsInput v-model="username" placeholder="请输入用户名" disabled />
  <EsInput v-model="name" label="Name" mold="filled" disabled />  
</template>
//...
import { ref } from 'vue'

const username = ref<string>('')
const name = ref<string>('')
`,O=`<template>
  <EsInput v-model="username" placeholder="请输入用户名" :max="10" />
  <EsInput v-model="phone" label="Phone" mold="filled" :max="8" />
</template>
//..
import { ref } from 'vue'

const username = ref<string>('')
const phone = ref<string>('')
`,W=_({name:"InputPage",__name:"index",setup(R){const y=i([{title:"Input 输入框",id:"input"},{title:"基本使用",id:"base-input"},{title:"密码框",id:"password-input"},{title:"禁用输入框",id:"disabled-input"},{title:"控制输入长度",id:"length-input"},{title:"API",id:"input-api",part:[{label:"Attributes",id:"input-attributes"},{label:"Events",id:"input-events"},{label:"Exposes",id:"input-exposes"}]}]),E=i([{label:"属性名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"},{label:"默认值",key:"value"}]),V=i([{name:"v-model",explain:"实现双向数据绑定",type:"string",value:"-"},{name:"mold",explain:"设置输入框的形状",type:"'default' | 'filled'",value:"default"},{name:"type",explain:"设置输入框的类型",type:"'text' | 'password'",value:"text"},{name:"label",explain:'使用在 mold="filled" 的情况下才能使用, 输入框的 label',type:"string",value:"-"},{name:"placeholder",explain:'使用在 mold="default" 的情况下才能使用, 输入框的 placeholder 属性',type:"string",value:"-"},{name:"disabled",explain:"禁用输入框",type:"boolean",value:"false"},{name:"max",explain:"输入框最大输入长度",type:"number",value:"-"}]),I=i([{label:"事件名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"}]),w=i([{name:"change",explain:"当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发",type:"(value: string) => void"},{name:"input",explain:"输入框内容发生改变时触发",type:"(value: string) => void"},{name:"blur",explain:"当输入框失去焦点时触发",type:"(event: FocusEvent) => void"},{name:"focus",explain:"输入框获取焦点时触发",type:"(event: FocusEvent) => void"},{name:"keydown",explain:"当输入框获取焦点并按下键盘时触发",type:"(event: KeyboardEvent) => void"}]),k=i([{label:"名称",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"}]),C=i([{name:"input",explain:"input HTML元素",type:"object"}]),u=i(""),v=i(""),b=i(""),f=i(""),x=i(""),U=h=>{console.log(h)},{b:j,e:l}=T("content");return(h,n)=>{const p=c("EsInput"),m=c("highlightjs"),P=c("EsScrollBar");return A(),B(P,null,{default:N(()=>[a("div",{class:t(e(j)())},[a("div",{class:t(e(l)("container"))},[a("div",{class:t(e(l)("section"))},[a("h1",{id:"input",class:t([e(l)("title"),e(l)("headline")])},"Input 输入框",2),a("p",{class:t(e(l)("text"))},"用户对文本的输入和编辑",2),a("div",{class:t(e(l)("section"))},[a("p",{class:t(e(l)("text"))},"输入框允许用户输入内容，所以大多数出现在表单和对话框。",2)],2)],2),a("div",{class:t(e(l)("section"))},[a("h2",{id:"base-input",class:t([e(l)("title"),e(l)("headline")])},"基本用法",2),a("p",{class:t(e(l)("text"))},[d(" 使用 "),a("code",{class:t(e(l)("code"))},"mold",2),d(" 来定义输入框的形状, 使用"),a("code",{class:t(e(l)("code"))},"v-model",2),d("来进行数据的双向绑定 。 ")],2),a("p",{class:t(e(l)("text"))},[d(" 只有 "),a("code",{class:t(e(l)("code"))},'mold="filled"',2),d("的情况下 设置label 属性才有效，但是默认输入框可以使用"),a("code",{class:t(e(l)("code"))},"placeholder",2),d(", 而"),a("code",{class:t(e(l)("code"))},'mold="filled"',2),d("使用不了。 ")],2),a("div",{class:t(e(l)("play"))},[a("div",{class:t(e(l)("finished-product"))},[s(p,{modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=o=>u.value=o),placeholder:"请输入用户名"},null,8,["modelValue"]),D,s(p,{onChange:U,modelValue:v.value,"onUpdate:modelValue":n[1]||(n[1]=o=>v.value=o),label:"Email",mold:"filled"},null,8,["modelValue"])],2),s(m,{language:"javascript",code:K})],2)],2),a("div",{class:t(e(l)("section"))},[a("h2",{id:"password-input",class:t([e(l)("title"),e(l)("headline")])},"密码框",2),a("p",{class:t(e(l)("text"))},[d("使用 "),a("code",{class:t(e(l)("code"))},"type",2),d(" 来定义输入框的类型。")],2),a("div",{class:t(e(l)("play"))},[a("div",{class:t(e(l)("finished-product"))},[s(p,{modelValue:f.value,"onUpdate:modelValue":n[2]||(n[2]=o=>f.value=o),label:"Password",mold:"filled",type:"password"},null,8,["modelValue"])],2),s(m,{language:"javascript",code:L})],2)],2),a("div",{class:t(e(l)("section"))},[a("h2",{id:"disabled-input",class:t([e(l)("title"),e(l)("headline")])},"禁用输入框",2),a("p",{class:t(e(l)("text"))},[d("使用 "),a("code",{class:t(e(l)("code"))},"disabled",2),d(" 来禁用输入框。")],2),a("div",{class:t(e(l)("play"))},[a("div",{class:t(e(l)("finished-product"))},[s(p,{modelValue:u.value,"onUpdate:modelValue":n[3]||(n[3]=o=>u.value=o),placeholder:"请输入用户名",disabled:""},null,8,["modelValue"]),S,s(p,{modelValue:b.value,"onUpdate:modelValue":n[4]||(n[4]=o=>b.value=o),label:"Name",mold:"filled",disabled:""},null,8,["modelValue"])],2),s(m,{language:"javascript",code:M})],2)],2),a("div",{class:t(e(l)("section"))},[a("h2",{id:"length-input",class:t([e(l)("title"),e(l)("headline")])},"控制输入长度",2),a("p",{class:t(e(l)("text"))},[d("使用 "),a("code",{class:t(e(l)("code"))},"max or min",2),d(" 来控制输入框的最大输入长度和最小输入长度。")],2),a("div",{class:t(e(l)("play"))},[a("div",{class:t(e(l)("finished-product"))},[s(p,{modelValue:u.value,"onUpdate:modelValue":n[5]||(n[5]=o=>u.value=o),placeholder:"请输入用户名",max:10},null,8,["modelValue"]),z,s(p,{modelValue:x.value,"onUpdate:modelValue":n[6]||(n[6]=o=>x.value=o),label:"Phone",mold:"filled",max:8},null,8,["modelValue"])],2),s(m,{language:"javascript",code:O})],2)],2),a("div",{class:t(e(l)("section"))},[a("h2",{id:"input-api",class:t([e(l)("title"),e(l)("headline")])},"API",2)],2),a("div",{class:t(e(l)("section"))},[a("h2",{id:"input-attributes",class:t([e(l)("title"),e(l)("headline")])},"Attributes",2),s(r,{columns:E.value,data:V.value},null,8,["columns","data"])],2),a("div",{class:t(e(l)("section"))},[a("h2",{id:"input-events",class:t([e(l)("title"),e(l)("headline")])},"Events",2),s(r,{columns:I.value,data:w.value},null,8,["columns","data"])],2),a("div",{class:t(e(l)("section"))},[a("h2",{id:"input-exposes",class:t([e(l)("title"),e(l)("headline")])},"Exposes",2),s(r,{columns:k.value,data:C.value},null,8,["columns","data"])],2),s(F,{last:{path:e(g)("button"),label:"Button 按钮"},next:{path:e(g)("radio"),label:"Radio 单选框"}},null,8,["last","next"])],2),a("div",{class:t(e(l)("nav"))},[s(H,{items:y.value},null,8,["items"])],2)],2)]),_:1})}}});export{W as default};
