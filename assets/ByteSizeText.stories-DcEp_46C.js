import{j as a}from"./jsx-runtime-BlAj40OV.js";import{O as g}from"./LocaleProvider-B0_30C1H.js";import{P as u}from"./NumberFormattersProvider-DANbX_lC.js";import{B as b}from"./ByteSizeText-Dv1cMyzR.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const x=t=>a.jsx(g,{locale:t.locale,children:a.jsx(u,{children:a.jsx(b,{bytes:t.bytes})})}),o={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},L={title:"Components/Text/Bytes",component:x,argTypes:{locale:{options:Object.keys(o),mapping:o,control:{type:"select",labels:o}}}},e={args:{bytes:200,locale:"en-US"}},r={args:{bytes:2048,locale:"en-US"}},s={args:{bytes:4096*1024,locale:"en-US"}};var n,c,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    bytes: 200,
    locale: 'en-US'
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    bytes: 2048,
    locale: 'en-US'
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var d,y,S;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    bytes: 4096 * 1024,
    locale: 'en-US'
  }
}`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const O=["SmallBytes","NormalBytes","LargeBytes"];export{s as LargeBytes,r as NormalBytes,e as SmallBytes,O as __namedExportsOrder,L as default};
