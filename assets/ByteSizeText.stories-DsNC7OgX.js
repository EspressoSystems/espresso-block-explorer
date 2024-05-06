import{j as a}from"./jsx-runtime-Cd6u8K_H.js";import{O as g}from"./LocaleProvider-JyRdHYHm.js";import{P as b}from"./NumberFormattersProvider-tVQRDxSF.js";import{B as u}from"./ByteSizeText-BbEJ-VQc.js";import"./index-UfW7PFvU.js";import"./_commonjsHelpers-BosuxZz1.js";const B=t=>a(g,{locale:t.locale,children:a(b,{children:a(u,{bytes:t.bytes})})}),o={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},O={title:"Components/Text/Bytes",component:B,argTypes:{locale:{options:Object.keys(o),mapping:o,control:{type:"select",labels:o}}}},e={args:{bytes:200,locale:"en-US"}},r={args:{bytes:2048,locale:"en-US"}},s={args:{bytes:4096*1024,locale:"en-US"}};var n,c,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const j=["SmallBytes","NormalBytes","LargeBytes"];export{s as LargeBytes,r as NormalBytes,e as SmallBytes,j as __namedExportsOrder,O as default};
