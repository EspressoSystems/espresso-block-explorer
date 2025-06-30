import{j as t}from"./iframe-zEcEksBb.js";import{O as i}from"./LocaleProvider-ysY4q8_d.js";import{P as c}from"./NumberFormattersProvider-DB0fdcoi.js";import{D as p}from"./DateTimeText-gphPxdT2.js";import"./DateTimeFormattersProvider-D90xWuNL.js";const l=({locale:n,date:m})=>t.jsx(i,{locale:n,children:t.jsx(c,{children:t.jsx(p,{date:new Date(m)})})}),r={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},g={title:"Components/Text/Date Time",component:l,argTypes:{locale:{options:Object.values(r),mapping:r,control:{type:"select",labels:Object.keys(r)}}}},e={args:{date:new Date().toISOString(),locale:"en-US"}};var o,a,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    date: new Date().toISOString(),
    locale: 'en-US'
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const j=["DateTime"];export{e as DateTime,j as __namedExportsOrder,g as default};
