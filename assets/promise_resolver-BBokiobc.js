import{R as c,j as p}from"./iframe-DIKNrIIb.js";import{b as s,a as i,A as h,P as m}from"./provide_async_states-BI-8x1rH.js";const v=n=>{const t=n.promise,[o,d]=c.useState({promise:t,state:s.waiting()}),a=o.state;return c.useEffect(()=>{let e=d;return a.asyncState==i.waiting&&t.then(r=>{e({promise:t,state:s.withData(i.done,r)})},r=>{e({promise:t,state:s.withError(i.done,r)})}),o.promise!==t&&e({promise:t,state:s.waiting()}),()=>{e=()=>{}}},[t,a.asyncState,o.promise]),p.jsx(h.Provider,{value:a,children:p.jsx(m,{children:n.children})})};try{promiseresolver.displayName="promiseresolver",promiseresolver.__docgenInfo={description:`PromiseResolver converts the given promise into distinct AsyncSnapshot
states and passes it to the given children components via the
AsyncSnapshotContext React Context.  It also automatically expands the
data in the AsyncSnapshot to the Data, Loading, and Error contexts using
the ProvideAsyncStates component.  As such, any descendant component will
have access to what is needed via the AsyncSnapshotContext, LoadingContext,
DataContext, or ErrorContext contexts.`,displayName:"promiseresolver",props:{promise:{defaultValue:null,description:"",name:"promise",required:!0,type:{name:"Promise<unknown>"}}}}}catch{}export{v as P};
