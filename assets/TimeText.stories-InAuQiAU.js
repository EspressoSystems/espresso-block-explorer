import{j as t}from"./iframe-nNwJoZIu.js";import{P as i}from"./DateTimeFormattersProvider-DlYJyFQm.js";import{O as c}from"./LocaleProvider-CUxd5RFv.js";import{T as l}from"./TimeText-cnSQtSPW.js";const p=({locale:n,date:m})=>t.jsx(c,{locale:n,children:t.jsx(i,{children:t.jsx(l,{date:new Date(m)})})}),r={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},f={title:"Components/Text/Time",component:p,argTypes:{locale:{options:Object.values(r),mapping:r,control:{type:"select",labels:Object.keys(r)}}}},e={args:{date:new Date().toISOString(),locale:"en-US"}};var o,a,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    date: new Date().toISOString(),
    locale: 'en-US'
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const g=["Time"];export{e as Time,g as __namedExportsOrder,f as default};
