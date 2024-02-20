import{j as o}from"./jsx-runtime-5BUNAZ9W.js";import{R as i}from"./index-4g5l5LRQ.js";import{C as c}from"./Loading-BiRA42C2.js";import{T as l}from"./Text-qj7igP2-.js";import{P as p,A as u,a as d}from"./PromiseResolver-ad-l-dUz.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./higher_order-VtSBvwoq.js";async function f(e){return new Promise(t=>{const m=setTimeout(()=>{clearTimeout(m),t()},e)})}const x=()=>{const e=i.useContext(u);if(e.asyncState===d.waiting)return o(c,{});const t=e.data;return o(l,{text:String(t)})},v=e=>o(p,{promise:f(e.milliseconds).then(()=>e.value),children:o(x,{})}),A={title:"Components/Async/Promise Resolver",component:v},s={args:{value:"Done!",milliseconds:2e3}};var r,n,a;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    value: 'Done!',
    milliseconds: 2000
  }
}`,...(a=(n=s.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const T=["PromiseResolver"];export{s as PromiseResolver,T as __namedExportsOrder,A as default};
