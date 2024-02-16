import{j as t}from"./jsx-runtime-5BUNAZ9W.js";import{P as i}from"./DateTimeFormattersProvider-p8Xe1RWn.js";import{O as c}from"./LocaleProvider-VrOFDinN.js";import{T as p}from"./TimeText-gcHKkQ6Q.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const l=({locale:n,date:m})=>t(c,{locale:n,children:t(i,{children:t(p,{date:new Date(m)})})}),r={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},O={title:"Components/Text/Time",component:l,argTypes:{locale:{options:Object.values(r),mapping:r,control:{type:"select",labels:Object.keys(r)}}}},e={args:{date:new Date().toISOString(),locale:"en-US"}};var o,a,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    date: new Date().toISOString(),
    locale: 'en-US'
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const x=["Time"];export{e as Time,x as __namedExportsOrder,O as default};
