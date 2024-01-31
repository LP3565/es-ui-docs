import{d as x,l as n,o as f,v as _,w as i,h as o,a,n as t,b as e,f as l,e as k,y as C,g as E}from"./index-jt5A6YvX.js";import{T as c}from"./Table--ZUwi-5c.js";import{F as B,E as w}from"./Footer-pA9vZmAn.js";import{p as A}from"./EsMenu-DaP7wCVq.js";const z=`<template>
   <EsButton @click="clickHandle">点击</EsButton>
</template>

// ...
import { EsMessage } from 'esui-v'

const clickHandle = () => {
  EsMessage({
    content: '设置提示信息！',
    mold: 'info',
    duration: 3000,
    onClose: () => {
      console.log('关闭')
    },
    onOpen: () => {
      console.log('显示')
    },
    showClose: true,
    zIndex: 888,
  })
}

`,O=x({name:"MessagePage",__name:"index",setup(I){const m=()=>{C({content:"设置提示信息！",mold:"info",duration:3e3,onClose:()=>{console.log("关闭")},onOpen:()=>{console.log("显示")},showClose:!0,zIndex:888})},d=n([{title:"Message 消息提示",id:"message"},{title:"基本使用",id:"base-message"},{title:"API",id:"message-api",part:[{label:"Attributes",id:"message-attributes"},{label:"Events",id:"message-events"}]}]),r=n([{label:"属性名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"},{label:"默认值",key:"value"}]),p=n([{name:"mold",explain:"消息的样式",type:"enum",value:"-"},{name:"content",explain:"消息内容",type:"string",value:"-"},{name:"duration",explain:"消息存在的时间，如果为 0 则永不消失",type:"boolean",value:"number"},{name:"showClose",explain:"显示删除按钮",type:"boolean",value:"false"},{name:"zIndex",explain:"css的z-index属性",type:"number",value:"-"}]),u=n([{label:"事件名",key:"name"},{label:"说明",key:"explain"},{label:"类型",key:"type"}]),v=n([{name:"onClose",explain:"关闭时触发",type:"() => void"},{name:"onOpen",explain:"显示时触发",type:"() => void"}]),{b:g,e:s}=E("content");return(M,N)=>{const b=o("EsButton"),h=o("highlightjs"),y=o("EsScrollBar");return f(),_(y,null,{default:i(()=>[a("div",{class:t(e(g)())},[a("div",{class:t(e(s)("container"))},[a("div",{class:t(e(s)("section"))},[a("h1",{id:"message",class:t([e(s)("title"),e(s)("headline")])},"Message 消息提示",2),a("p",{class:t(e(s)("text"))},"全局显示反馈信息。",2)],2),a("div",{class:t(e(s)("section"))},[a("h2",{id:"base-message",class:t([e(s)("title"),e(s)("headline")])},"基本用法",2),a("div",{class:t(e(s)("play"))},[a("div",{class:t(e(s)("finished-product"))},[l(b,{onClick:m},{default:i(()=>[k("点击")]),_:1})],2),l(h,{language:"javascript",code:z})],2)],2),a("div",{class:t(e(s)("section"))},[a("h2",{id:"message-api",class:t([e(s)("title"),e(s)("headline")])},"API",2)],2),a("div",{class:t(e(s)("section"))},[a("h2",{id:"message-attributes",class:t([e(s)("title"),e(s)("headline")])},"Attributes",2),l(c,{columns:r.value,data:p.value},null,8,["columns","data"])],2),a("div",{class:t(e(s)("section"))},[a("h2",{id:"message-events",class:t([e(s)("title"),e(s)("headline")])},"Events",2),l(c,{columns:u.value,data:v.value},null,8,["columns","data"])],2),l(B,{last:{label:"Drawer 抽屉",path:e(A)("drawer")}},null,8,["last"])],2),a("div",{class:t(e(s)("nav"))},[l(w,{items:d.value},null,8,["items"])],2)],2)]),_:1})}}});export{O as default};
