import{j as e,R as c}from"./iframe-COKd2Os-.js";import{C as p}from"./circular_progress_indicator-BaJ1dg1I.js";import{N as u}from"./not_found_error-BdUVpmTw.js";import{n as d}from"./loading_provider-CAiGDh4M.js";import{T as m}from"./text-CEhLEmI-.js";import{A as g,a as l}from"./provide_async_states-CvBr9k-N.js";import{P as x}from"./promise_resolver-pqxv98-P.js";import"./preload-helper-PPVm8Dsz.js";import"./higher_order-t8f3m54J.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./missing_element_error-BXDBouYu.js";import"./unimplemented_error-BNblu8WE.js";import"./data_provider-I8Cq7ni6.js";async function f(r){return new Promise(a=>{const i=setTimeout(()=>{clearTimeout(i),a()},r)})}const P=()=>{const r=c.useContext(g);if(r.asyncState===l.waiting)return e.jsx(p,{});if(r.error)return e.jsx(m,{text:"Error: "+r.error.toString()});const a=r.data;return e.jsx(m,{text:String(a)})},j=r=>e.jsx(x,{promise:r.promise,children:e.jsx(P,{})}),_={title:"Components/Async/Promise Resolver",component:j},o={args:{promise:f(2e3).then(()=>"Done!")}},s={args:{promise:d}},t={args:{promise:Promise.resolve("Done!")}},n={args:{promise:Promise.reject(new u("nothing"))}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
