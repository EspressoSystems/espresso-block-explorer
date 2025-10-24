import{j as t}from"./iframe-Cfh0eePN.js";import{O as s}from"./LocaleProvider-D8Kjh7eq.js";import{P as n}from"./NumberFormattersProvider-BkhnvKth.js";import{D as m}from"./DateTimeText-C2Q7-R2m.js";import"./preload-helper-PPVm8Dsz.js";import"./DateTimeFormattersProvider-DyCnSpYr.js";const i=({locale:o,date:a})=>t.jsx(s,{locale:o,children:t.jsx(n,{children:t.jsx(m,{date:new Date(a)})})}),r={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},S={title:"Components/Text/Date Time",component:i,argTypes:{locale:{options:Object.values(r),mapping:r,control:{type:"select",labels:Object.keys(r)}}}},e={args:{date:new Date().toISOString(),locale:"en-US"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    date: new Date().toISOString(),
    locale: 'en-US'
  }
}`,...e.parameters?.docs?.source}}};const f=["DateTime"];export{e as DateTime,f as __namedExportsOrder,S as default};
