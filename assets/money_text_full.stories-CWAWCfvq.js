import{j as t,R as u}from"./iframe-6qRHL8kK.js";import{O as T}from"./LocaleProvider-Dn-Cb6v6.js";import{C as i,P as g}from"./NumberFormattersProvider-BaYHxeOC.js";import{b as f}from"./bigint-CUIR6GFU.js";import{M as S,c as x}from"./monetary_value-h2r6a0FR.js";/* empty css               */import"./preload-helper-PPVm8Dsz.js";import"./assert-B11BgmXM.js";import"./string-De_JMoQm.js";function h(e,r,n){for(;e.length<r;)e=n+e;return e}function F(e){const r=e.value/e.currency.significantDigitsMultiplier,n=e.value%e.currency.significantDigitsMultiplier;return`${r}.${h(String(n),e.currency.significantDigits,"0")}`}const d=e=>{const r=e.money,n=F(r);switch(r.currency.alpha3Code){case"ETH":return t.jsx(p,{value:n});case"ESP":return t.jsx(y,{value:n});default:return t.jsx(P,{money:r})}},P=e=>{const r=u.useContext(i),n=e.money,a=r[n.currency.alpha3Code];if(a===null)return t.jsx(_,{money:e.money});const E=Number(n.value)/Number(n.currency.significantDigitsMultiplier);return a.format(E)},_=e=>{const r=u.useContext(i),n=e.money,a=Number(n.value)/Number(n.currency.significantDigitsMultiplier);return r.default.format(a)},p=e=>{const r=u.useContext(i);return t.jsx(t.Fragment,{children:r.ETHFull.format(e.value)})},y=e=>{const r=u.useContext(i);return t.jsx(t.Fragment,{children:r.ESPFull.format(e.value)})};try{d.displayName="MoneyTextFull",d.__docgenInfo={description:`MoneyText is a component that will render a MonetaryValue in a localized
manner for the given currency type.  It supports non-standard ISO 4217
currency codes such as ETH and ESP.

It achieves this by having specific implementations for the necessary
currency types.`,displayName:"MoneyTextFull",props:{money:{defaultValue:null,description:"",name:"money",required:!0,type:{name:"MonetaryValue"}}}}}catch{}try{p.displayName="ETHTextFull",p.__docgenInfo={description:`ETHText is a component that will render a value in Gwei and ETH.  It is
used for the ETH currency code.`,displayName:"ETHTextFull",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number | bigint | StringNumericLiteral"}}}}}catch{}try{y.displayName="ESPTextFull",y.__docgenInfo={description:`ESPText is a component that will render a value in Gwei and ESP.  It is
used for the ESP currency code.`,displayName:"ESPTextFull",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number | bigint | StringNumericLiteral"}}}}}catch{}const v=e=>t.jsx(T,{locale:e.locale,children:t.jsx(g,{children:t.jsx(d,{money:new S(x.decode(e.currency),f.decode(e.amount))})})}),m={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi","zh-CN":"zh-CN","ar-EG":"ar-EG"},w={title:"Components/Text/Money",component:v,argTypes:{locale:{options:Object.keys(m),mapping:m,control:{type:"select",labels:m}},currency:{options:["USD","ETH","XBT","ESP","EUR","JPY","GBP"],mapping:{USD:"USD",ETH:"ETH",XBT:"XBT",ESP:"ESP",EUR:"EUR",JPY:"JPY",GBP:"GBP",CNY:"CNY"},control:{type:"select",labels:["USD","ETH","XBT","ESP","EUR","JPY","GBP"]}},amount:{control:"text"}}},o={args:{locale:"en-US",currency:"ETH",amount:"1000000000000000000"}},c={args:{locale:"en-US",currency:"XBT",amount:"100000000"}},l={args:{locale:"en-US",currency:"BTC",amount:"100000000"}},s={args:{locale:"en-US",currency:"ESP",amount:"1000000000000000000"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'ETH',
    amount: '1000000000000000000'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'XBT',
    amount: '100000000'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'BTC',
    amount: '100000000'
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'ESP',
    amount: '1000000000000000000'
  }
}`,...s.parameters?.docs?.source}}};const R=["ETHFull","XBTFull","BTCFull","ESPFull"];export{l as BTCFull,s as ESPFull,o as ETHFull,c as XBTFull,R as __namedExportsOrder,w as default};
