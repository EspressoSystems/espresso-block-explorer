import{j as a,a as k,F as q}from"./jsx-runtime-C8OW3RLV.js";import{O as K}from"./LocaleProvider-BQ-iXQt3.js";import{C as c,P as Q}from"./NumberFormattersProvider-B153Cyqz.js";import{M as W,c as Z}from"./monetary_value-DdH0GKvL.js";import{R as s}from"./index-BwDkhjyp.js";/* empty css               */import"./string-X3Gg19gt.js";import"./_commonjsHelpers-BosuxZz1.js";const T=e=>{const r=e.money,n=Number(r.value)/Number(r.currency.significantDigitsMultiplier);switch(r.currency.alpha3Code){case"ETH":return a(re,{value:n});case"ESP":return a(ne,{value:n});default:return a($,{money:r})}},$=e=>{const r=s.useContext(c),n=e.money,t=r[n.currency.alpha3Code];if(t===null)return a(ee,{money:e.money});const o=Number(n.value)/Number(n.currency.significantDigitsMultiplier);return t.format(o)},ee=e=>{const r=s.useContext(c),n=e.money,t=Number(n.value)/Number(n.currency.significantDigitsMultiplier);return r.default.format(t)},re=e=>{const r=s.useContext(c);return k(q,{children:[a(A,{value:e.value*1e9})," (",r.ETH.format(e.value),")"]})},ne=e=>{const r=s.useContext(c);return k(q,{children:[a(A,{value:e.value*1e9})," (",r.ESP.format(e.value),")"]})},A=e=>s.useContext(c).gwei.formatToParts(e.value).map(o=>o.type==="currency"?{...o,value:"Gwei"}:o).map(o=>o.value).join("");try{T.displayName="MoneyText",T.__docgenInfo={description:`MoneyText is a component that will render a MonetaryValue in a localized
manner for the given currency type.  It supports non-standard ISO 4217
currency codes such as ETH and ESP.

It achieves this by having specific implementations for the necessary
currency types.`,displayName:"MoneyText",props:{money:{defaultValue:null,description:"",name:"money",required:!0,type:{name:"MonetaryValue"}}}}}catch{}const ae=e=>a(K,{locale:e.locale,children:a(Q,{children:a(T,{money:new W(Z.decode(e.currency),BigInt(e.amount))})})}),E={"en-US":"en-US","fr-FR":"fr-FR","de-DE":"de-DE",hi:"hi","zh-CN":"zh-CNx","ar-EG":"ar-EG"},pe={title:"Components/Text/Money",component:ae,argTypes:{locale:{options:Object.keys(E),mapping:E,control:{type:"select",labels:E}},currency:{options:["USD","ETH","XBT","ESP","EUR","JPY","GBP"],mapping:{USD:"USD",ETH:"ETH",XBT:"XBT",ESP:"ESP",EUR:"EUR",JPY:"JPY",GBP:"GBP",CNY:"CNY"},control:{type:"select",labels:["USD","ETH","XBT","ESP","EUR","JPY","GBP"]}}}},u={args:{locale:"en-US",currency:"ETH",amount:1e18}},m={args:{locale:"en-US",currency:"USD",amount:100}},l={args:{locale:"en-US",currency:"ETH",amount:1e18}},i={args:{locale:"en-US",currency:"XBT",amount:1e8}},p={args:{locale:"en-US",currency:"BTC",amount:1e8}},y={args:{locale:"en-US",currency:"ESP",amount:1e18}},d={args:{locale:"en-US",currency:"EUR",amount:100}},S={args:{locale:"en-US",currency:"JPY",amount:1}},g={args:{locale:"en-US",currency:"GBP",amount:100}};var U,f,P;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'ETH',
    amount: 1000000000000000000
  }
}`,...(P=(f=u.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var v,x,B;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'USD',
    amount: 100
  }
}`,...(B=(x=m.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var C,h,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'ETH',
    amount: 1e18
  }
}`,...(D=(h=l.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var M,H,N;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'XBT',
    amount: 1e8
  }
}`,...(N=(H=i.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var b,G,R;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'BTC',
    amount: 1e8
  }
}`,...(R=(G=p.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var Y,_,J;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'ESP',
    amount: 1e18
  }
}`,...(J=(_=y.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var X,F,w;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'EUR',
    amount: 100
  }
}`,...(w=(F=d.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var j,I,O;S.parameters={...S.parameters,docs:{...(j=S.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'JPY',
    amount: 1
  }
}`,...(O=(I=S.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var V,z,L;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    locale: 'en-US',
    currency: 'GBP',
    amount: 100
  }
}`,...(L=(z=g.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const ye=["Money","USD","ETH","XBT","BTC","ESP","EUR","JPY","GBP"];export{p as BTC,y as ESP,l as ETH,d as EUR,g as GBP,S as JPY,u as Money,m as USD,i as XBT,ye as __namedExportsOrder,pe as default};
