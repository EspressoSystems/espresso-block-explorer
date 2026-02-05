import{j as e,R as p}from"./iframe-BmS3xRbu.js";import{C as c}from"./circular_progress_indicator-BzlwKDya.js";import{N as u}from"./not_found_error-C4PEbicn.js";import{n as d}from"./loading_provider-DEQVtaPX.js";import{T as m}from"./text-CEhLEmI-.js";import{A as g,a as l}from"./provide_async_states-CgK8Y5uf.js";import{P as x}from"./promise_resolver-CYBJKPrn.js";import"./preload-helper-PPVm8Dsz.js";import"./higher_order-BcBNDTSF.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BIT--q2G.js";import"./unimplemented_error--qiu5jWk.js";import"./data_provider-Bc8LLRJq.js";async function f(r){return new Promise(a=>{const i=setTimeout(()=>{clearTimeout(i),a()},r)})}const P=()=>{const r=p.useContext(g);if(r.asyncState===l.waiting)return e.jsx(c,{});if(r.error)return e.jsx(m,{text:"Error: "+r.error.toString()});const a=r.data;return e.jsx(m,{text:String(a)})},j=r=>e.jsx(x,{promise:r.promise,children:e.jsx(P,{})}),I={title:"Components/Async/Promise Resolver",component:j},o={args:{promise:f(2e3).then(()=>"Done!")}},s={args:{promise:d}},t={args:{promise:Promise.resolve("Done!")}},n={args:{promise:Promise.reject(new u("nothing"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    promise: sleep(2000).then(() => 'Done!')
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    promise: neverPromise as Promise<string>
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    promise: Promise.resolve('Done!')
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    promise: Promise.reject(new NotFoundError('nothing'))
  }
}`,...n.parameters?.docs?.source}}};const O=["Default","Loading","Resolved","Rejected"];export{o as Default,s as Loading,n as Rejected,t as Resolved,O as __namedExportsOrder,I as default};
