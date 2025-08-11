import{j as a}from"./iframe-B8QM7YzT.js";import{O as g}from"./LocaleProvider-COHzpDxl.js";import{P as u}from"./NumberFormattersProvider-C3nNPFFr.js";import{B as b}from"./ByteSizeText-DhKL_JWn.js";const x=t=>a.jsx(g,{locale:t.locale,children:a.jsx(u,{children:a.jsx(b,{bytes:t.bytes})})}),o={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},E={title:"Components/Text/Bytes",component:x,argTypes:{locale:{options:Object.keys(o),mapping:o,control:{type:"select",labels:o}}}},e={args:{bytes:200,locale:"en-US"}},s={args:{bytes:2048,locale:"en-US"}},r={args:{bytes:4096*1024,locale:"en-US"}};var n,c,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    bytes: 200,
    locale: 'en-US'
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,i;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    bytes: 2048,
    locale: 'en-US'
  }
}`,...(i=(p=s.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var d,y,S;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    bytes: 4096 * 1024,
    locale: 'en-US'
  }
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const h=["SmallBytes","NormalBytes","LargeBytes"];export{r as LargeBytes,s as NormalBytes,e as SmallBytes,h as __namedExportsOrder,E as default};
