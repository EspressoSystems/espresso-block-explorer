import{r as t,j as o,R as a}from"./iframe-JNS3S7eL.js";import{e as m}from"./functional_async-BusT9-bd.js";const h=t.createContext(null),i=r=>o.jsx(h.Provider,{value:r.data,children:r.children});try{i.displayName="SetData",i.__docgenInfo={description:`SetData is a Components whose sole purpose is to populate a DataContext
with the provided data.  At such a level we are unable to make any
type assertion about the data being provided.`,displayName:"SetData",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"unknown"}}}}}catch{}const e=t.createContext(null),s=t.createContext(m()),c=r=>o.jsx(e.Provider,{value:r.error,children:r.children}),_=t.createContext(null),d=r=>{const n=a.useContext(e);return o.jsx(_.Provider,{value:n,children:r.children})},l=r=>{const n=a.useContext(e),y=a.useContext(_);return o.jsx(e.Provider,{value:n??y,children:r.children})};try{e.displayName="ErrorContext",e.__docgenInfo={description:`ErrorContext is a React Context that is used to store and make available
any error present in the component tree.`,displayName:"ErrorContext",props:{}}}catch{}try{s.displayName="ErrorStreamContext",s.__docgenInfo={description:`ErrorStreamContext is similar to ErrorContext, however it is potentially
updatable.`,displayName:"ErrorStreamContext",props:{}}}catch{}try{c.displayName="SetError",c.__docgenInfo={description:"",displayName:"SetError",props:{error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"unknown"}}}}}catch{}try{d.displayName="ErrorCarry",d.__docgenInfo={description:`ErrorCarry is a helper component that is provided in order to carry an
error from the error context, and assign it to a new context.  This is
helpful since ErrorContext is overwritten by any downstream error that
is encountered.

This can be used in conjunction with ErrorJoiner to combine errors from
different contexts.`,displayName:"ErrorCarry",props:{}}}catch{}try{l.displayName="ErrorJoiner",l.__docgenInfo={description:`ErrorJoiner is a helper component that is able to combine errors from
teh ErrorCarry component, and the original ErrorContext that is encountered.
This will prioritize the error from the ErrorContext, and then fall back
to the error provided by the ErrorCarry component.`,displayName:"ErrorJoiner",props:{}}}catch{}const u=t.createContext(!1),p=r=>o.jsx(u.Provider,{value:r.loading,children:r.children});try{p.displayName="SetLoading",p.__docgenInfo={description:"",displayName:"SetLoading",props:{loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}}}}}catch{}export{h as D,e as E,u as L,p as S,c as a,i as b,d as c,l as d,s as e};
