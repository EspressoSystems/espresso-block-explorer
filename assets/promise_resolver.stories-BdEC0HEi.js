import{j as e,R as p}from"./iframe-BwY8Nc_o.js";import{N as c}from"./not_found_error-D_XgWhca.js";import{n as u}from"./loading_provider--Fab2jEg.js";import{C as d}from"./circular_progress_indicator-PtqlFbdL.js";import{T as m}from"./text-CEhLEmI-.js";import{A as g,a as l}from"./provide_async_states-BPo97x0k.js";import{P as x}from"./promise_resolver-DxcIaC3u.js";import"./preload-helper-PPVm8Dsz.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./sleep-CW-vxfof.js";import"./missing_element_error-BOXFIEXu.js";import"./unimplemented_error-B7nptaaw.js";import"./higher_order-CDuDe3l-.js";import"./data_provider-BIkZvgj5.js";async function f(r){return new Promise(a=>{const i=setTimeout(()=>{clearTimeout(i),a()},r)})}const P=()=>{const r=p.useContext(g);if(r.asyncState===l.waiting)return e.jsx(d,{});if(r.error)return e.jsx(m,{text:"Error: "+r.error.toString()});const a=r.data;return e.jsx(m,{text:String(a)})},j=r=>e.jsx(x,{promise:r.promise,children:e.jsx(P,{})}),I={title:"Components/Async/Promise Resolver",component:j},o={args:{promise:f(2e3).then(()=>"Done!")}},s={args:{promise:u}},t={args:{promise:Promise.resolve("Done!")}},n={args:{promise:Promise.reject(new c("nothing"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
