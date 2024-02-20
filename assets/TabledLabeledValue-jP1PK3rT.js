import{a as n,j as a}from"./jsx-runtime-5BUNAZ9W.js";import{a as t}from"./higher_order-VtSBvwoq.js";import{l as d,i as o}from"./typography-H6hXb9lb.js";const c=d("label"),r=o("div"),m=e=>a(c,{children:e.children}),p=e=>a(r,{className:"value",children:e.children}),s=({className:e,children:l,...i})=>n("div",{...i,className:t(e,"tabled-labeled-value"),children:[a(m,{className:"label",children:l[0]},0),a(p,{className:"value",children:l[1]},1)]});try{s.displayName="TabledLabeledValue",s.__docgenInfo={description:`TabledLabeledValue is a component that is meant to display a label and
value pair of components, and lay them out depending on the screen size
of the device in question.

If on a sufficiently large device, they should appear side by side as
if in a full sized table element. Otherwise, they should appear as
a single element of sufficient size.`,displayName:"TabledLabeledValue",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{s as T};
