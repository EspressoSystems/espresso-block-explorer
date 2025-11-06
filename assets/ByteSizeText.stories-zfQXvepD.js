import{j as a}from"./iframe-DbeSBdx1.js";import{O as n}from"./LocaleProvider-ShZNSPZC.js";import{P as c}from"./NumberFormattersProvider-Cp-tTNjA.js";import{B as l}from"./ByteSizeText-CHYzxH06.js";import"./preload-helper-PPVm8Dsz.js";const m=t=>a.jsx(n,{locale:t.locale,children:a.jsx(c,{children:a.jsx(l,{bytes:t.bytes})})}),o={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},g={title:"Components/Text/Bytes",component:m,argTypes:{locale:{options:Object.keys(o),mapping:o,control:{type:"select",labels:o}}}},e={args:{bytes:200,locale:"en-US"}},s={args:{bytes:2048,locale:"en-US"}},r={args:{bytes:4096*1024,locale:"en-US"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    bytes: 200,
    locale: 'en-US'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    bytes: 2048,
    locale: 'en-US'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    bytes: 4096 * 1024,
    locale: 'en-US'
  }
}`,...r.parameters?.docs?.source}}};const u=["SmallBytes","NormalBytes","LargeBytes"];export{r as LargeBytes,s as NormalBytes,e as SmallBytes,u as __namedExportsOrder,g as default};
