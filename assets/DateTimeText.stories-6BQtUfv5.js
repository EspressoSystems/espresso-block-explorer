import{j as t}from"./iframe-Dz1tcGmB.js";import{O as s}from"./LocaleProvider-BX3D0wrI.js";import{P as n}from"./NumberFormattersProvider-bfM2GBl7.js";import{D as m}from"./DateTimeText-DkzI5dcJ.js";import"./preload-helper-PPVm8Dsz.js";import"./DateTimeFormattersProvider-CA5szNsR.js";const i=({locale:o,date:a})=>t.jsx(s,{locale:o,children:t.jsx(n,{children:t.jsx(m,{date:new Date(a)})})}),r={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},S={title:"Components/Text/Date Time",component:i,argTypes:{locale:{options:Object.values(r),mapping:r,control:{type:"select",labels:Object.keys(r)}}}},e={args:{date:new Date().toISOString(),locale:"en-US"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    date: new Date().toISOString(),
    locale: 'en-US'
  }
}`,...e.parameters?.docs?.source}}};const f=["DateTime"];export{e as DateTime,f as __namedExportsOrder,S as default};
