import{j as e}from"./iframe-DCPSZz_3.js";import{P as s}from"./DateTimeFormattersProvider-cQ3P3CXT.js";import{O as i}from"./LocaleProvider-BWtINspZ.js";import{P as n}from"./NowProvider-NCwNHFL9.js";import{R as m}from"./RelativeTimeSinceDateText-BT_07pYp.js";import"./preload-helper-PPVm8Dsz.js";const c=({locale:o,date:a})=>e.jsx(n,{children:e.jsx(i,{locale:o,children:e.jsx(s,{children:e.jsx(m,{date:new Date(a)})})})}),r={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},T={title:"Components/Text/Relative Time",component:c,argTypes:{locale:{options:Object.values(r),mapping:r,control:{type:"select",labels:Object.keys(r)}}}},t={args:{date:new Date().toISOString(),locale:"en-US"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    date: new Date().toISOString(),
    locale: 'en-US'
  }
}`,...t.parameters?.docs?.source}}};const f=["RelativeTime"];export{t as RelativeTime,f as __namedExportsOrder,T as default};
