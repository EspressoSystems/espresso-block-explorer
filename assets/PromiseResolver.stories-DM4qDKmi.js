import{j as e,R as c}from"./iframe-LIS-dxCY.js";import{N as p}from"./NotFoundError-BClVlkgY.js";import{C as u}from"./CircularProgressIndicator-C1YnzehF.js";import{T as m}from"./Text-BU7JBOLk.js";import{A as d,a as g}from"./ProvideAsyncStates-BLtq39Bx.js";import{P as l}from"./PromiseResolver-BCtWEfd5.js";import"./preload-helper-PPVm8Dsz.js";import"./string-elRJFjrg.js";import"./higher_order-B4shpt_6.js";import"./LoadingProvider-DxjZ0NgD.js";import"./MissingElementError-B2OGDzdH.js";import"./UnimplementedError-CRtBpVRh.js";async function x(r){return new Promise(a=>{const i=setTimeout(()=>{clearTimeout(i),a()},r)})}const f=()=>{const r=c.useContext(d);if(r.asyncState===g.waiting)return e.jsx(u,{});if(r.error)return e.jsx(m,{text:"Error: "+r.error.toString()});const a=r.data;return e.jsx(m,{text:String(a)})},j=r=>e.jsx(l,{promise:r.promise,children:e.jsx(f,{})}),N={title:"Components/Async/Promise Resolver",component:j},o={args:{promise:x(2e3).then(()=>"Done!")}},s={args:{promise:new Promise(()=>{})}},t={args:{promise:Promise.resolve("Done!")}},n={args:{promise:Promise.reject(new p("nothing"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    promise: sleep(2000).then(() => 'Done!')
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    promise: new Promise(() => {})
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    promise: Promise.resolve('Done!')
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    promise: Promise.reject(new NotFoundError('nothing'))
  }
}`,...n.parameters?.docs?.source}}};const F=["Default","Loading","Resolved","Rejected"];export{o as Default,s as Loading,n as Rejected,t as Resolved,F as __namedExportsOrder,N as default};
