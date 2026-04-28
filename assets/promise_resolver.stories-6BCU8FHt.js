import{j as e,R as c}from"./iframe-BnfkL8Kh.js";import{C as p}from"./circular_progress_indicator-ASlMJQs_.js";import{N as u}from"./not_found_error-l32Q-ON6.js";import{n as d}from"./loading_provider-D7jVFZnN.js";import{T as m}from"./text-CEhLEmI-.js";import{A as g,a as l}from"./provide_async_states-B6s17Xt-.js";import{P as x}from"./promise_resolver-meuzv9ZO.js";import"./preload-helper-PPVm8Dsz.js";import"./higher_order-DQHFbP0d.js";import"./string-DCKD4j-j.js";import"./assert-B6AoMnt_.js";import"./missing_element_error-CMLVwjEG.js";import"./unimplemented_error-CMF8SzXs.js";import"./data_provider-DR0SepNE.js";async function f(r){return new Promise(a=>{const i=setTimeout(()=>{clearTimeout(i),a()},r)})}const P=()=>{const r=c.useContext(g);if(r.asyncState===l.waiting)return e.jsx(p,{});if(r.error)return e.jsx(m,{text:"Error: "+r.error.toString()});const a=r.data;return e.jsx(m,{text:String(a)})},j=r=>e.jsx(x,{promise:r.promise,children:e.jsx(P,{})}),_={title:"Components/Async/Promise Resolver",component:j},o={args:{promise:f(2e3).then(()=>"Done!")}},s={args:{promise:d}},t={args:{promise:Promise.resolve("Done!")}},n={args:{promise:Promise.reject(new u("nothing"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const I=["Default","Loading","Resolved","Rejected"];export{o as Default,s as Loading,n as Rejected,t as Resolved,I as __namedExportsOrder,_ as default};
