import{j as e}from"./jsx-runtime-C8OW3RLV.js";import{N as j}from"./NotFoundError-D27_4bN0.js";import{C as v}from"./CircularProgressIndicator-CEwC7I0u.js";import{T as m}from"./Text-BU7JBOLk.js";import{R as w}from"./index-BwDkhjyp.js";import{A as C,a as D}from"./ProvideAsyncStates-cPWIR7SO.js";import{P as y}from"./PromiseResolver-Bzan-m3_.js";import"./string-X3Gg19gt.js";import"./higher_order-BhpYKJuV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./LoadingProvider-D-gSICWy.js";async function E(r){return new Promise(n=>{const R=setTimeout(()=>{clearTimeout(R),n()},r)})}const A=()=>{const r=w.useContext(C);if(r.asyncState===D.waiting)return e(v,{});if(r.error)return e(m,{text:"Error: "+r.error.toString()});const n=r.data;return e(m,{text:String(n)})},T=r=>e(y,{promise:r.promise,children:e(A,{})}),G={title:"Components/Async/Promise Resolver",component:T},o={args:{promise:E(2e3).then(()=>"Done!")}},s={args:{promise:new Promise(()=>{})}},t={args:{promise:Promise.resolve("Done!")}},a={args:{promise:Promise.reject(new j("nothing"))}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(P=(f=t.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var S,x,h;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    promise: Promise.reject(new NotFoundError('nothing'))
  }
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const H=["Default","Loading","Resolved","Rejected"];export{o as Default,s as Loading,a as Rejected,t as Resolved,H as __namedExportsOrder,G as default};
