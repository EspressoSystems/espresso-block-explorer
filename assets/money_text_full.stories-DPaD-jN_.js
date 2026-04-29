import{j as c}from"./iframe-Czs2L5m1.js";import{O as t}from"./locale_provider-DjhHC7rP.js";import{P as l}from"./number_formatters_provider-C7_WrEPu.js";import{b as m}from"./bigint-CufIvmoo.js";import{M as u,c as p}from"./monetary_value-DN71IgaJ.js";import{M as i}from"./money_text_full-Cn1Suzc2.js";import"./preload-helper-PPVm8Dsz.js";import"./functional-CFnOe1PN.js";import"./missing_element_error-CMLVwjEG.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";/* empty css               */const d=n=>c.jsx(t,{locale:n.locale,children:c.jsx(l,{children:c.jsx(i,{money:new u(p.decode(n.currency),m.decode(n.amount))})})}),s={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi","zh-CN":"zh-CN","ar-EG":"ar-EG"},H={title:"Components/Text/Money",component:d,argTypes:{locale:{options:Object.keys(s),mapping:s,control:{type:"select",labels:s}},currency:{options:["USD","ETH","XBT","ESP","EUR","JPY","GBP"],mapping:{USD:"USD",ETH:"ETH",XBT:"XBT",ESP:"ESP",EUR:"EUR",JPY:"JPY",GBP:"GBP",CNY:"CNY"},control:{type:"select",labels:["USD","ETH","XBT","ESP","EUR","JPY","GBP"]}},amount:{control:"text"}}},e={args:{locale:"en-US",currency:"ETH",amount:"1000000000000000000"}},r={args:{locale:"en-US",currency:"XBT",amount:"100000000"}},o={args:{locale:"en-US",currency:"BTC",amount:"100000000"}},a={args:{locale:"en-US",currency:"ESP",amount:"1000000000000000000"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'ETH',
    amount: '1000000000000000000'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'XBT',
    amount: '100000000'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'BTC',
    amount: '100000000'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'ESP',
    amount: '1000000000000000000'
  }
}`,...a.parameters?.docs?.source}}};const X=["ETHFull","XBTFull","BTCFull","ESPFull"];export{o as BTCFull,a as ESPFull,e as ETHFull,r as XBTFull,X as __namedExportsOrder,H as default};
