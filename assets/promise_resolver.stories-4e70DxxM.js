import{j as e,R as c}from"./iframe-BbF3Syj1.js";import{N as p}from"./not_found_error-D5_0fLFV.js";import{n as u}from"./loading_provider-DEd-giv5.js";import{C as d}from"./circular_progress_indicator-CMpg3_tY.js";import{T as m}from"./text-CEhLEmI-.js";import{A as g,a as l}from"./provide_async_states-B24091I1.js";import{P as x}from"./promise_resolver-4LAyf1Wc.js";import"./preload-helper-PPVm8Dsz.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./missing_element_error-Bv32e7ki.js";import"./unimplemented_error-Bu4XFSEf.js";import"./higher_order-P_eSrgQE.js";async function f(r){return new Promise(a=>{const i=setTimeout(()=>{clearTimeout(i),a()},r)})}const P=()=>{const r=c.useContext(g);if(r.asyncState===l.waiting)return e.jsx(d,{});if(r.error)return e.jsx(m,{text:"Error: "+r.error.toString()});const a=r.data;return e.jsx(m,{text:String(a)})},j=r=>e.jsx(x,{promise:r.promise,children:e.jsx(P,{})}),L={title:"Components/Async/Promise Resolver",component:j},o={args:{promise:f(2e3).then(()=>"Done!")}},s={args:{promise:u}},t={args:{promise:Promise.resolve("Done!")}},n={args:{promise:Promise.reject(new p("nothing"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const _=["Default","Loading","Resolved","Rejected"];export{o as Default,s as Loading,n as Rejected,t as Resolved,_ as __namedExportsOrder,L as default};
