import{j as l}from"./iframe-BYhJ0elB.js";import{O as S}from"./LocaleProvider-DStRSijF.js";import{P as d}from"./NumberFormattersProvider-BlItbZB7.js";import{b as i}from"./bigint-Rw5otYDY.js";import{M as U,c as E}from"./monetary_value-CGCIrnLJ.js";import{M as g}from"./MoneyText-CfP9eB4o.js";import"./preload-helper-PPVm8Dsz.js";import"./assert-B20_bgky.js";import"./string-DO2hqbbz.js";/* empty css               */const y=u=>l.jsx(S,{locale:u.locale,children:l.jsx(d,{children:l.jsx(g,{money:new U(E.decode(u.currency),i.decode(u.amount))})})}),p={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi","zh-CN":"zh-CN","ar-EG":"ar-EG"},f={title:"Components/Text/Money",component:y,argTypes:{locale:{options:Object.keys(p),mapping:p,control:{type:"select",labels:p}},currency:{options:["USD","ETH","XBT","ESP","EUR","JPY","GBP"],mapping:{USD:"USD",ETH:"ETH",XBT:"XBT",ESP:"ESP",EUR:"EUR",JPY:"JPY",GBP:"GBP",CNY:"CNY"},control:{type:"select",labels:["USD","ETH","XBT","ESP","EUR","JPY","GBP"]}},amount:{control:"text"}}},e={args:{locale:"en-US",currency:"ETH",amount:"1000000000000000000"}},r={args:{locale:"en-US",currency:"USD",amount:"100"}},a={args:{locale:"en-US",currency:"ETH",amount:"1000000000000000000"}},o={args:{locale:"en-US",currency:"XBT",amount:"100000000"}},n={args:{locale:"en-US",currency:"BTC",amount:"100000000"}},c={args:{locale:"en-US",currency:"ESP",amount:"1000000000000000000"}},s={args:{locale:"en-US",currency:"EUR",amount:"100"}},t={args:{locale:"en-US",currency:"JPY",amount:"1"}},m={args:{locale:"en-US",currency:"GBP",amount:"100"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'ETH',
    amount: '1000000000000000000'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'USD',
    amount: '100'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'ETH',
    amount: '1000000000000000000'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'XBT',
    amount: '100000000'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'BTC',
    amount: '100000000'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'ESP',
    amount: '1000000000000000000'
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'EUR',
    amount: '100'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'JPY',
    amount: '1'
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'GBP',
    amount: '100'
  }
}`,...m.parameters?.docs?.source}}};const J=["Money","USD","ETH","XBT","BTC","ESP","EUR","JPY","GBP"];export{n as BTC,c as ESP,a as ETH,s as EUR,m as GBP,t as JPY,e as Money,r as USD,o as XBT,J as __namedExportsOrder,f as default};
