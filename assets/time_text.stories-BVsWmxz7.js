import{j as t}from"./iframe-DIKNrIIb.js";import{P as s}from"./date_time_formatters_provider-DhcWWpu8.js";import{O as n}from"./locale_provider-DYOAFLcG.js";import{T as m}from"./time_text-DhxGW57C.js";import"./preload-helper-PPVm8Dsz.js";const i=({locale:o,date:a})=>t.jsx(n,{locale:o,children:t.jsx(s,{children:t.jsx(m,{date:new Date(a)})})}),r={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},S={title:"Components/Text/Time",component:i,argTypes:{locale:{options:Object.values(r),mapping:r,control:{type:"select",labels:Object.keys(r)}}}},e={args:{date:new Date().toISOString(),locale:"en-US"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    date: new Date().toISOString(),
    locale: 'en-US'
  }
}`,...e.parameters?.docs?.source}}};const T=["Time"];export{e as Time,T as __namedExportsOrder,S as default};
