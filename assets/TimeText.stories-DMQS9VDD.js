import{j as t}from"./iframe-6sDIVuv1.js";import{P as s}from"./DateTimeFormattersProvider-B9ptiKJK.js";import{O as n}from"./LocaleProvider-qvoseI_m.js";import{T as m}from"./TimeText-7DSwPO8b.js";import"./preload-helper-PPVm8Dsz.js";const i=({locale:o,date:a})=>t.jsx(n,{locale:o,children:t.jsx(s,{children:t.jsx(m,{date:new Date(a)})})}),r={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},S={title:"Components/Text/Time",component:i,argTypes:{locale:{options:Object.values(r),mapping:r,control:{type:"select",labels:Object.keys(r)}}}},e={args:{date:new Date().toISOString(),locale:"en-US"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    date: new Date().toISOString(),
    locale: 'en-US'
  }
}`,...e.parameters?.docs?.source}}};const T=["Time"];export{e as Time,T as __namedExportsOrder,S as default};
