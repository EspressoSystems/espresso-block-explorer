import{j as l}from"./iframe-CKCSKCZk.js";import{O as S}from"./LocaleProvider-ZOKW40Kc.js";import{P as d}from"./NumberFormattersProvider-CCFFQgJj.js";import{M as i,c as U}from"./monetary_value-q68MMcLV.js";import{M as E}from"./MoneyText-DICOGhXe.js";import"./preload-helper-PPVm8Dsz.js";import"./assert-BI051aL8.js";import"./string-Bj9RBsFG.js";/* empty css               */const g=u=>l.jsx(S,{locale:u.locale,children:l.jsx(d,{children:l.jsx(E,{money:new i(U.decode(u.currency),BigInt(u.amount))})})}),p={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi","zh-CN":"zh-CN","ar-EG":"ar-EG"},H={title:"Components/Text/Money",component:g,argTypes:{locale:{options:Object.keys(p),mapping:p,control:{type:"select",labels:p}},currency:{options:["USD","ETH","XBT","ESP","EUR","JPY","GBP"],mapping:{USD:"USD",ETH:"ETH",XBT:"XBT",ESP:"ESP",EUR:"EUR",JPY:"JPY",GBP:"GBP",CNY:"CNY"},control:{type:"select",labels:["USD","ETH","XBT","ESP","EUR","JPY","GBP"]}},amount:{control:"text"}}},e={args:{locale:"en-US",currency:"ETH",amount:"1000000000000000000"}},r={args:{locale:"en-US",currency:"USD",amount:"100"}},a={args:{locale:"en-US",currency:"ETH",amount:"1000000000000000000"}},n={args:{locale:"en-US",currency:"XBT",amount:"100000000"}},o={args:{locale:"en-US",currency:"BTC",amount:"100000000"}},c={args:{locale:"en-US",currency:"ESP",amount:"1000000000000000000"}},s={args:{locale:"en-US",currency:"EUR",amount:"100"}},t={args:{locale:"en-US",currency:"JPY",amount:"1"}},m={args:{locale:"en-US",currency:"GBP",amount:"100"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'XBT',
    amount: '100000000'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'BTC',
    amount: '100000000'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Y=["Money","USD","ETH","XBT","BTC","ESP","EUR","JPY","GBP"];export{o as BTC,c as ESP,a as ETH,s as EUR,m as GBP,t as JPY,e as Money,r as USD,n as XBT,Y as __namedExportsOrder,H as default};
