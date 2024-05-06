import{j as r}from"./jsx-runtime-Cd6u8K_H.js";import{N as j}from"./NotFoundError-BY595sC3.js";import{C as v}from"./CircularProgressIndicator-BU_aCVZ1.js";import{T as m}from"./Text-BU7JBOLk.js";import{R as w}from"./index-UfW7PFvU.js";import{P as C,A as D,a as y}from"./PromiseResolver-B67x4zsp.js";import"./string-BgQ3tcOU.js";import"./higher_order-D-qJ_MgL.js";import"./_commonjsHelpers-BosuxZz1.js";async function E(e){return new Promise(n=>{const R=setTimeout(()=>{clearTimeout(R),n()},e)})}const A=()=>{const e=w.useContext(D);if(e.asyncState===y.waiting)return r(v,{});if(e.error)return r(m,{text:"Error: "+e.error.message});const n=e.data;return r(m,{text:String(n)})},T=e=>r(C,{promise:e.promise,children:r(A,{})}),z={title:"Components/Async/Promise Resolver",component:T},o={args:{promise:E(2e3).then(()=>"Done!")}},s={args:{promise:new Promise(()=>{})}},t={args:{promise:Promise.resolve("Done!")}},a={args:{promise:Promise.reject(new j("nothing"))}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    promise: sleep(2000).then(() => 'Done!')
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,d,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    promise: new Promise(() => {})
  }
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var l,f,P;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    promise: Promise.resolve('Done!')
  }
}`,...(P=(f=t.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var x,S,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    promise: Promise.reject(new NotFoundError('nothing'))
  }
}`,...(h=(S=a.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const B=["Default","Loading","Resolved","Rejected"];export{o as Default,s as Loading,a as Rejected,t as Resolved,B as __namedExportsOrder,z as default};
