import{j as o}from"./iframe-C4ZPvz3S.js";import{O as t}from"./LocaleProvider-Ifjl9SJa.js";import{P as c}from"./NumberFormattersProvider-SZx-qAnO.js";import{N as l}from"./NumberText-B9xVU4B6.js";import"./preload-helper-PPVm8Dsz.js";const p=({locale:n,number:m})=>o.jsx(t,{locale:n,children:o.jsx(c,{children:o.jsx(l,{number:m})})}),s={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi"},S={title:"Components/Text/Number",component:p,argTypes:{locale:{options:Object.keys(s),mapping:s,control:{type:"select",labels:s}}}},e={args:{number:.04824,locale:"en-US"}},r={args:{number:6.25,locale:"en-US"}},a={args:{number:12345678905e-2,locale:"en-US"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    number: 0.04824,
    locale: 'en-US'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    number: 6.25,
    locale: 'en-US'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    number: 123456789.05,
    locale: 'en-US'
  }
}`,...a.parameters?.docs?.source}}};const N=["SmallNumber","NormalNumber","LargeNumber"];export{a as LargeNumber,r as NormalNumber,e as SmallNumber,N as __namedExportsOrder,S as default};
