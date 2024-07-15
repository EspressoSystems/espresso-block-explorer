import{j as c}from"./jsx-runtime-C8OW3RLV.js";import{R as p}from"./index-BwDkhjyp.js";import{b as s,a as i,A as m,P as l}from"./ProvideAsyncStates-cPWIR7SO.js";const d=n=>{const t=n.promise,[o,h]=p.useState({promise:t,state:s.waiting()}),a=o.state;return p.useEffect(()=>{let e=h;return a.asyncState==i.waiting&&t.then(r=>{e({promise:t,state:s.withData(i.done,r)})},r=>{e({promise:t,state:s.withError(i.done,r)})}),o.promise!==t&&e({promise:t,state:s.waiting()}),()=>{e=()=>{}}},[t,a.asyncState,o.promise]),c(m.Provider,{value:a,children:c(l,{children:n.children})})};try{d.displayName="PromiseResolver",d.__docgenInfo={description:`PromiseResolver converts the given promise into distinct AsyncSnapshot
states and passes it to the given children components via the
AsyncSnapshotContext React Context.  It also automatically expands the
data in the AsyncSnapshot to the Data, Loading, and Error contexts using
the ProvideAsyncStates component.  As such, any descendant component will
have access to what is needed via the AsyncSnapshotContext, LoadingContext,
DataContext, or ErrorContext contexts.`,displayName:"PromiseResolver",props:{promise:{defaultValue:null,description:"",name:"promise",required:!0,type:{name:"Promise<unknown>"}}}}}catch{}export{d as P};
