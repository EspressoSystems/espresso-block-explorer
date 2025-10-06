import{j as e}from"./iframe-DygLW6I0.js";import{P as m}from"./DateTimeFormattersProvider-BiVnDCug.js";import{O as c}from"./LocaleProvider-BTog8Eg4.js";import{P as l}from"./NowProvider-DQJHzESf.js";import{R as p}from"./RelativeTimeText-Dw-jd3cC.js";const d=({locale:n,date:i})=>e.jsx(l,{children:e.jsx(c,{locale:n,children:e.jsx(m,{children:e.jsx(p,{date:new Date(i)})})})}),r={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},j={title:"Components/Text/Relative Time",component:d,argTypes:{locale:{options:Object.values(r),mapping:r,control:{type:"select",labels:Object.keys(r)}}}},t={args:{date:new Date().toISOString(),locale:"en-US"}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    date: new Date().toISOString(),
    locale: 'en-US'
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const R=["RelativeTime"];export{t as RelativeTime,R as __namedExportsOrder,j as default};
