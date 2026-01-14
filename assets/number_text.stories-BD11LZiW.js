import{j as a}from"./iframe-CCLKIoat.js";import{O as t}from"./locale_provider-K_0BCaCZ.js";import{P as c}from"./number_formatters_provider-3ltM0G6e.js";import{N as l}from"./number_text-BXbb_2Rl.js";import"./preload-helper-PPVm8Dsz.js";import"./functional-DsFqNm-o.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";const p=({locale:m,number:n})=>a.jsx(t,{locale:m,children:a.jsx(c,{children:a.jsx(l,{number:n})})}),s={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},f={title:"Components/Text/Number",component:p,argTypes:{locale:{options:Object.keys(s),mapping:s,control:{type:"select",labels:s}}}},e={args:{number:.04824,locale:"en-US"}},r={args:{number:6.25,locale:"en-US"}},o={args:{number:12345678905e-2,locale:"en-US"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    number: 0.04824,
    locale: 'en-US'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    number: 6.25,
    locale: 'en-US'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    number: 123456789.05,
    locale: 'en-US'
  }
}`,...o.parameters?.docs?.source}}};const j=["SmallNumber","NormalNumber","LargeNumber"];export{o as LargeNumber,r as NormalNumber,e as SmallNumber,j as __namedExportsOrder,f as default};
