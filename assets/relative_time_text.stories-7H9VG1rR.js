import{j as e}from"./iframe-C0Hnu7F5.js";import{P as s}from"./date_time_formatters_provider-CfHgi1rZ.js";import{O as n}from"./locale_provider-DiHDaUDA.js";import{P as i,R as c}from"./relative_time_since_date_text-5Vk5RJ1c.js";import"./preload-helper-PPVm8Dsz.js";const m=({locale:a,date:o})=>e.jsx(i,{children:e.jsx(n,{locale:a,children:e.jsx(s,{children:e.jsx(c,{date:new Date(o)})})})}),r={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},v={title:"Components/Text/Relative Time",component:m,argTypes:{locale:{options:Object.values(r),mapping:r,control:{type:"select",labels:Object.keys(r)}}}},t={args:{date:new Date().toISOString(),locale:"en-US"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    date: new Date().toISOString(),
    locale: 'en-US'
  }
}`,...t.parameters?.docs?.source}}};const T=["RelativeTime"];export{t as RelativeTime,T as __namedExportsOrder,v as default};
