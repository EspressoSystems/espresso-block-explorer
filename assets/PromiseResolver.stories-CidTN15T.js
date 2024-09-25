import{j as e}from"./jsx-runtime-BlAj40OV.js";import{N as h}from"./NotFoundError-zYtPBSyK.js";import{C as v}from"./CircularProgressIndicator-CmmjYXfy.js";import{T as m}from"./Text-BU7JBOLk.js";import{R as w}from"./index-Cs7sjTYM.js";import{A as C,a as D}from"./ProvideAsyncStates-DGpd_8Im.js";import{P as E}from"./PromiseResolver-ZbtEiQb_.js";import"./string-Cg6lWpsr.js";import"./higher_order-DnPEgWEz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./LoadingProvider-Cu0dkHek.js";import"./functional-BZC-Q2QA.js";async function y(r){return new Promise(a=>{const R=setTimeout(()=>{clearTimeout(R),a()},r)})}const A=()=>{const r=w.useContext(C);if(r.asyncState===D.waiting)return e.jsx(v,{});if(r.error)return e.jsx(m,{text:"Error: "+r.error.toString()});const a=r.data;return e.jsx(m,{text:String(a)})},T=r=>e.jsx(E,{promise:r.promise,children:e.jsx(A,{})}),H={title:"Components/Async/Promise Resolver",component:T},o={args:{promise:y(2e3).then(()=>"Done!")}},s={args:{promise:new Promise(()=>{})}},t={args:{promise:Promise.resolve("Done!")}},n={args:{promise:Promise.reject(new h("nothing"))}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    promise: sleep(2000).then(() => 'Done!')
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,d,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    promise: new Promise(() => {})
  }
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var l,x,f;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    promise: Promise.resolve('Done!')
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var j,P,S;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    promise: Promise.reject(new NotFoundError('nothing'))
  }
}`,...(S=(P=n.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const J=["Default","Loading","Resolved","Rejected"];export{o as Default,s as Loading,n as Rejected,t as Resolved,J as __namedExportsOrder,H as default};
