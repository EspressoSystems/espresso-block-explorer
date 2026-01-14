import{j as t}from"./iframe-CCLKIoat.js";import{O as s}from"./locale_provider-K_0BCaCZ.js";import{P as m}from"./number_formatters_provider-3ltM0G6e.js";import{D as n}from"./date_time_text-BkX9HxlE.js";import"./preload-helper-PPVm8Dsz.js";import"./functional-DsFqNm-o.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./date_time_formatters_provider-D0J5X-TW.js";const i=({locale:o,date:a})=>t.jsx(s,{locale:o,children:t.jsx(m,{children:t.jsx(n,{date:new Date(a)})})}),r={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},u={title:"Components/Text/Date Time",component:i,argTypes:{locale:{options:Object.values(r),mapping:r,control:{type:"select",labels:Object.keys(r)}}}},e={args:{date:new Date().toISOString(),locale:"en-US"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    date: new Date().toISOString(),
    locale: 'en-US'
  }
}`,...e.parameters?.docs?.source}}};const O=["DateTime"];export{e as DateTime,O as __namedExportsOrder,u as default};
