import{j as c}from"./iframe-BtlXJKZ1.js";import{O as t}from"./locale_provider-Ghcznv9j.js";import{P as l}from"./number_formatters_provider-uduEK5FV.js";import{M as m,c as u,b as p}from"./monetary_value-BBaBP7s4.js";import{M as i}from"./money_text_full-BJiWhaEl.js";import"./preload-helper-PPVm8Dsz.js";import"./functional-CHI4evRY.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";/* empty css               */const d=n=>c.jsx(t,{locale:n.locale,children:c.jsx(l,{children:c.jsx(i,{money:new m(u.decode(n.currency),p.decode(n.amount))})})}),s={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi","zh-CN":"zh-CN","ar-EG":"ar-EG"},f={title:"Components/Text/Money",component:d,argTypes:{locale:{options:Object.keys(s),mapping:s,control:{type:"select",labels:s}},currency:{options:["USD","ETH","XBT","ESP","EUR","JPY","GBP"],mapping:{USD:"USD",ETH:"ETH",XBT:"XBT",ESP:"ESP",EUR:"EUR",JPY:"JPY",GBP:"GBP",CNY:"CNY"},control:{type:"select",labels:["USD","ETH","XBT","ESP","EUR","JPY","GBP"]}},amount:{control:"text"}}},e={args:{locale:"en-US",currency:"ETH",amount:"1000000000000000000"}},r={args:{locale:"en-US",currency:"XBT",amount:"100000000"}},o={args:{locale:"en-US",currency:"BTC",amount:"100000000"}},a={args:{locale:"en-US",currency:"ESP",amount:"1000000000000000000"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const H=["ETHFull","XBTFull","BTCFull","ESPFull"];export{o as BTCFull,a as ESPFull,e as ETHFull,r as XBTFull,H as __namedExportsOrder,f as default};
