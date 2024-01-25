import{j as t}from"./jsx-runtime-5BUNAZ9W.js";import{R as c}from"./index-4g5l5LRQ.js";import{T as n}from"./Text-qj7igP2-.js";import{P as l,A as p,a as u}from"./PromiseResolver-3CMncE_b.js";import"./_commonjsHelpers-4gQjN7DL.js";async function d(e){return new Promise(o=>{const i=setTimeout(()=>{clearTimeout(i),o()},e)})}const x=()=>{const e=c.useContext(p);if(e.asyncState===u.waiting)return t(n,{text:"Loading..."});const o=e.data;return t(n,{text:String(o)})},f=e=>t(l,{promise:d(e.milliseconds).then(()=>e.value),children:t(x,{})}),h={title:"Components/Async/Promise Resolver",component:f},s={args:{value:"Done!",milliseconds:2e3}};var r,a,m;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    value: 'Done!',
    milliseconds: 2000
  }
}`,...(m=(a=s.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const y=["PromiseResolver"];export{s as PromiseResolver,y as __namedExportsOrder,h as default};
