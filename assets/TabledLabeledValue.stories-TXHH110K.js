import{a as c,j as a}from"./jsx-runtime-evMRDBC5.js";import{T as o}from"./Text-qj7igP2-.js";import{a as m}from"./higher_order-VtSBvwoq.js";import{l as p,h as u}from"./typography-_ddOfzBO.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const b=p("label"),h=u("div"),f=e=>a(b,{children:e.children}),T=e=>a(h,{className:"value",children:e.children}),n=({className:e,children:l,...t})=>c("div",{...t,className:m(e,"tabled-labeled-value"),children:[a(f,{className:"label",children:l[0]},0),a(T,{className:"value",children:l[1]},1)]});try{n.displayName="TabledLabeledValue",n.__docgenInfo={description:`TabledLabeledValue is a component that is meant to display a label and
value pair of components, and lay them out depending on the screen size
of the device in question.

If on a sufficiently large device, they should appear side by side as
if in a full sized table element. Otherwise, they should appear as
a single element of sufficient size.`,displayName:"TabledLabeledValue",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const y=({label:e,value:l,...t})=>c(n,{...t,children:[a(o,{text:e}),a(o,{text:l})]}),V={title:"Components/Layout/Tabled Labeled Value",component:y},s={args:{label:"Label",value:"100"}};var d,i,r;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    value: '100'
  }
}`,...(r=(i=s.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const j=["TabledLabeledValue"];export{s as TabledLabeledValue,j as __namedExportsOrder,V as default};
