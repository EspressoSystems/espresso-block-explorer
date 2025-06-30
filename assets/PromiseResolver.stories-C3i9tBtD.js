import{j as r,R as h}from"./iframe-zEcEksBb.js";import{N as v}from"./NotFoundError-Dda3nNUu.js";import{C as w}from"./CircularProgressIndicator-C156oz_o.js";import{T as m}from"./Text-BU7JBOLk.js";import{A as C,a as D}from"./ProvideAsyncStates-xIzp1Eue.js";import{P as E}from"./PromiseResolver-BiyWZgkv.js";import"./string-D0u4-xyR.js";import"./higher_order-BfTEeOwN.js";import"./LoadingProvider-BMrX2k61.js";import"./MissingElementError-YFeWEE8W.js";import"./UnimplementedError-17tXTyU9.js";async function y(e){return new Promise(a=>{const R=setTimeout(()=>{clearTimeout(R),a()},e)})}const A=()=>{const e=h.useContext(C);if(e.asyncState===D.waiting)return r.jsx(w,{});if(e.error)return r.jsx(m,{text:"Error: "+e.error.toString()});const a=e.data;return r.jsx(m,{text:String(a)})},T=e=>r.jsx(E,{promise:e.promise,children:r.jsx(A,{})}),G={title:"Components/Async/Promise Resolver",component:T},o={args:{promise:y(2e3).then(()=>"Done!")}},s={args:{promise:new Promise(()=>{})}},t={args:{promise:Promise.resolve("Done!")}},n={args:{promise:Promise.reject(new v("nothing"))}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(S=(P=n.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const H=["Default","Loading","Resolved","Rejected"];export{o as Default,s as Loading,n as Rejected,t as Resolved,H as __namedExportsOrder,G as default};
