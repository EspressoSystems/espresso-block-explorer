import{j as o}from"./iframe-CkJJG84G.js";import{O as n}from"./locale_provider-D4HbO8u7.js";import{P as c}from"./number_formatters_provider-Ch-9Dh1T.js";import{B as l}from"./byte_size_text-D3X2F5ka.js";import"./preload-helper-PPVm8Dsz.js";import"./functional-6Z2QHHX7.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";const m=t=>o.jsx(n,{locale:t.locale,children:o.jsx(c,{children:o.jsx(l,{bytes:t.bytes})})}),a={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},B={title:"Components/Text/Bytes",component:m,argTypes:{locale:{options:Object.keys(a),mapping:a,control:{type:"select",labels:a}}}},e={args:{bytes:200,locale:"en-US"}},r={args:{bytes:2048,locale:"en-US"}},s={args:{bytes:4096*1024,locale:"en-US"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    bytes: 200,
    locale: 'en-US'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    bytes: 2048,
    locale: 'en-US'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    bytes: 4096 * 1024,
    locale: 'en-US'
  }
}`,...s.parameters?.docs?.source}}};const U=["SmallBytes","NormalBytes","LargeBytes"];export{s as LargeBytes,r as NormalBytes,e as SmallBytes,U as __namedExportsOrder,B as default};
