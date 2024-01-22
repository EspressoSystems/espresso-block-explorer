import{a as r}from"./jsx-runtime-spUR36Au.js";import{r as n}from"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const m=n.createContext(navigator.language),l=e=>r(m.Provider,{value:e.locale,children:e.children}),p=e=>r(m.Provider,{value:navigator.language,children:e.children});try{l.displayName="OverrideLocale",l.__docgenInfo={description:`OverrideLocale is a [FunctionalComponent] that will provide the given locale
to all of the descendant components within the tree.`,displayName:"OverrideLocale",props:{locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"string"}}}}}catch{}try{p.displayName="ProvideNavigatorLanguage",p.__docgenInfo={description:"ProvideNavigatorLanguage is a [FunctionalComponent] that will provide the\nlocale retrieved from the `navigator.language` value.",displayName:"ProvideNavigatorLanguage",props:{}}}catch{}function C(e){return{default:new Intl.NumberFormat(e)}}const d=n.createContext(C(navigator.language)),s=e=>{const u=n.useContext(m);return r(d.Provider,{value:C(u),children:e.children})},g=e=>r(d.Provider,{value:e.formatters,children:e.children});try{s.displayName="ProvideDerivedNumberFormatters",s.__docgenInfo={description:`ProvideDerivedNumberFormatters is a component that will create the
default number formatters for the CurrentLocale context that is retrieved
by this component.`,displayName:"ProvideDerivedNumberFormatters",props:{}}}catch{}try{g.displayName="OverrideNumberFormatters",g.__docgenInfo={description:"OverrideNumberFormatters is a helpful widget that allows anyone to replace\nthe `CurrentNumberFormatters` for the descendent components below this one\nin the Component tree.",displayName:"OverrideNumberFormatters",props:{formatters:{defaultValue:null,description:"",name:"formatters",required:!0,type:{name:"{ default: NumberFormat; }"}}}}}catch{}const i=e=>n.useContext(d).default.format(e.number);try{i.displayName="NumberText",i.__docgenInfo={description:"[NumberText] is a component that will format the given `number` prop with\nthe default currency formatter retrieved from the CurrentNumberFormatters.",displayName:"NumberText",props:{number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}}}}}catch{}const L=e=>r(l,{locale:e.locale,children:r(s,{children:r(i,{number:e.number})})}),c={"en-US":"en-US","en-FR":"en-FR","de-DE":"de-DE",hi:"hi"},O={title:"Components/Text/Number",component:L,argTypes:{locale:{options:Object.keys(c),mapping:c,control:{type:"select",labels:c}}}},t={args:{number:.04824,locale:"en-US"}},a={args:{number:6.25,locale:"en-US"}},o={args:{number:12345678905e-2,locale:"en-US"}};var v,b,_;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    number: 0.04824,
    locale: 'en-US'
  }
}`,...(_=(b=t.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var h,N,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    number: 6.25,
    locale: 'en-US'
  }
}`,...(f=(N=a.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var y,F,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    number: 123456789.05,
    locale: 'en-US'
  }
}`,...(x=(F=o.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};const U=["SmallNumber","NormalNumber","LargeNumber"];export{o as LargeNumber,a as NormalNumber,t as SmallNumber,U as __namedExportsOrder,O as default};
