import{j as l}from"./iframe-CmLG4Pok.js";import{O as S}from"./locale_provider-Be6w3M1T.js";import{P as d}from"./number_formatters_provider-CF2CsDka.js";import{M as i,c as U,b as E}from"./monetary_value-BBaBP7s4.js";import{M as g}from"./money_text-Uf49ry7U.js";import"./preload-helper-PPVm8Dsz.js";import"./functional-CHI4evRY.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";/* empty css               */const y=u=>l.jsx(S,{locale:u.locale,children:l.jsx(d,{children:l.jsx(g,{money:new i(U.decode(u.currency),E.decode(u.amount))})})}),p={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi","zh-CN":"zh-CN","ar-EG":"ar-EG"},J={title:"Components/Text/Money",component:y,argTypes:{locale:{options:Object.keys(p),mapping:p,control:{type:"select",labels:p}},currency:{options:["USD","ETH","XBT","ESP","EUR","JPY","GBP"],mapping:{USD:"USD",ETH:"ETH",XBT:"XBT",ESP:"ESP",EUR:"EUR",JPY:"JPY",GBP:"GBP",CNY:"CNY"},control:{type:"select",labels:["USD","ETH","XBT","ESP","EUR","JPY","GBP"]}},amount:{control:"text"}}},e={args:{locale:"en-US",currency:"ETH",amount:"1000000000000000000"}},r={args:{locale:"en-US",currency:"USD",amount:"100"}},a={args:{locale:"en-US",currency:"ETH",amount:"1000000000000000000"}},o={args:{locale:"en-US",currency:"XBT",amount:"100000000"}},n={args:{locale:"en-US",currency:"BTC",amount:"100000000"}},c={args:{locale:"en-US",currency:"ESP",amount:"1000000000000000000"}},s={args:{locale:"en-US",currency:"EUR",amount:"100"}},t={args:{locale:"en-US",currency:"JPY",amount:"1"}},m={args:{locale:"en-US",currency:"GBP",amount:"100"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const X=["Money","USD","ETH","XBT","BTC","ESP","EUR","JPY","GBP"];export{n as BTC,c as ESP,a as ETH,s as EUR,m as GBP,t as JPY,e as Money,r as USD,o as XBT,X as __namedExportsOrder,J as default};
