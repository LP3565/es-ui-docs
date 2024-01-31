import{d as V,l as s,o as y,v as S,w as k,h as u,a,n as t,b as e,e as n,f as c,g as O}from"./index-jt5A6YvX.js";import{F as z,E as A}from"./Footer-pA9vZmAn.js";import{T as B}from"./Table--ZUwi-5c.js";import{p}from"./EsMenu-DaP7wCVq.js";const E=a("li",null,"Select选择器：用户从数据列表中选取需要的数据。",-1),j=a("li",null,"Cascader级联选择器： 当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。",-1),w=[E,j],F=a("span",null,"  ",-1),I=`<template>
  <EsSelect :options="selectOptions" v-model="selectValue" title="Form" />
</template>

// ... 
import { ref } from 'vue'
import { CascaderOption } from 'esui-v/components/select/select'

const selectOptions = ref<CascaderOption[]>([
  {
    label: 'Input',
    value: 'input'
  },
  {
    label: 'Radio',
    value: 'radio'
  },
  {
    label: 'Button',
    value: 'button'
  }
])

const selectValue = ref<string[]>([])

const cascaderOptions = ref<CascaderOption[]>([
  {
    label: '广东省',
    value: 'gd',
    children: [
      {
        label: '广州市',
        value: 'gz',
        children: [
          {
            label: '海珠区',
            value: 'hz'
          }
        ]
      },
      {
        label: '深圳市',
        value: 'sz',
        children: [
          {
            label: '宝安区',
            value: 'ba'
          }
        ]
      }
    ]
  },
  {
    label: '山西省',
    value: 'sx',
    children: [
      {
        label: '太同市',
        value: 'tt',
        children: [
          {
            label: '新荣区',
            value: 'xr'
          }
        ]
      },
      {
        label: '太原市',
        value: 'ty',
        children: [
          {
            label: '小店区',
            value: 'xd'
          }
        ]
      }
    ]
  },
  {
    label: '安徽省',
    value: 'ah',
    children: [
      {
        label: '黄山市',
        value: 'hs',
        children: [
          {
            label: '黄山区',
            value: 'hsq'
          }
        ]
      },
      {
        label: '合肥市',
        value: 'hf',
        children: [
          {
            label: '蜀山区',
            value: 'ss'
          }
        ]
      }
    ]
  }
])

const cascaderValue = ref<string[]>([])

`,D=V({name:"SelectPage",__name:"index",setup(N){const{b,e:l}=O("content"),h=s([{title:"Select 选择器 & Cascader 级联选择器",id:"select"},{title:"基本使用",id:"base-select"},{title:"API",id:"select-api",part:[{label:"Attributes",id:"select-attributes"}]}]),m=s([{label:"Input",value:"input"},{label:"Radio",value:"radio"},{label:"Button",value:"button"}]),d=s([]),x=s([{label:"广东省",value:"gd",children:[{label:"广州市",value:"gz",children:[{label:"海珠区",value:"hz"}]},{label:"深圳市",value:"sz",children:[{label:"宝安区",value:"ba"}]}]},{label:"山西省",value:"sx",children:[{label:"太同市",value:"tt",children:[{label:"新荣区",value:"xr"}]},{label:"太原市",value:"ty",children:[{label:"小店区",value:"xd"}]}]},{label:"安徽省",value:"ah",children:[{label:"黄山市",value:"hs",children:[{label:"黄山区",value:"hsq"}]},{label:"合肥市",value:"hf",children:[{label:"蜀山区",value:"ss"}]}]}]),r=s([]),f=s([{label:"属性名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"},{label:"默认值",key:"value"}]),_=s([{name:"v-model",explain:"用于数据的双向绑定",type:"string[] | number[]",value:"-"},{name:"options",explain:"选项的数据源",type:"object",value:"-"},{name:"title",explain:"选择框的标题",type:"string",value:"-"}]);return(T,o)=>{const v=u("EsSelect"),g=u("highlightjs"),C=u("EsScrollBar");return y(),S(C,null,{default:k(()=>[a("div",{class:t(e(b)())},[a("div",{class:t(e(l)("container"))},[a("div",{class:t(e(l)("section"))},[a("h1",{id:"select",class:t([e(l)("title"),e(l)("headline")])},"Select 选择器 & Cascader 级联选择器",2),a("p",{class:t(e(l)("text"))},"选择组件用于从选项列表中收集用户提供的信息。",2),a("div",{class:t(e(l)("section"))},[a("p",{class:t(e(l)("text"))},[n(" 我觉得 Select选择器 和 Cascader级联选择器 功能差不多所以就封装成一个了： "),a("ul",{class:t(e(l)("list"))},w,2)],2)],2)],2),a("div",{class:t(e(l)("section"))},[a("h2",{id:"base-select",class:t([e(l)("title"),e(l)("headline")])},"基本用法",2),a("p",{class:t(e(l)("text"))},[n(" 使用"),a("code",{class:t(e(l)("code"))},"v-model",2),n("来进行数据的双向绑定 。 ")],2),a("p",{class:t(e(l)("text"))},[n(" 使用 "),a("code",{class:t(e(l)("code"))},"options",2),n("来渲染数据列表。 ")],2),a("div",{class:t(e(l)("play"))},[a("div",{class:t(e(l)("finished-product"))},[c(v,{options:x.value,modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=i=>r.value=i),title:"Address"},null,8,["options","modelValue"]),F,c(v,{options:m.value,modelValue:d.value,"onUpdate:modelValue":o[1]||(o[1]=i=>d.value=i),title:"Form"},null,8,["options","modelValue"])],2),c(g,{language:"javascript",code:I})],2)],2),a("div",{class:t(e(l)("section"))},[a("h2",{id:"select-api",class:t([e(l)("title"),e(l)("headline")])},"API",2)],2),a("div",{class:t(e(l)("section"))},[a("h2",{id:"select-attributes",class:t([e(l)("title"),e(l)("headline")])},"Attributes",2),c(B,{columns:f.value,data:_.value},null,8,["columns","data"])],2),c(z,{last:{path:e(p)("checkbox"),label:"Checkbox 复选框"},next:{path:e(p)("switch"),label:"Switch 开关"}},null,8,["last","next"])],2),a("div",{class:t(e(l)("nav"))},[c(A,{items:h.value},null,8,["items"])],2)],2)]),_:1})}}});export{D as default};
