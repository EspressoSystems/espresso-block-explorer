import{j as e}from"./iframe-Da-pRdj_.js";import{T as o}from"./text-CEhLEmI-.js";import{H as i}from"./heading1-DOBxZPtk.js";import{H as m}from"./heading2-CrwYwP_X.js";import"./preload-helper-PPVm8Dsz.js";import"./typography-CxAy-q2v.js";import"./higher_order-BliYGj6D.js";/* empty css                */const p=({heading:n,text:s,...a})=>n==="h2"?e.jsx(m,{...a,children:e.jsx(o,{text:s})}):e.jsx(i,{...a,children:e.jsx(o,{text:s})}),r={"Heading 1":"h1","Heading 2":"h2"},j={title:"Block Explorer/Components/LayoutHeadings",component:p,argTypes:{heading:{options:Object.keys(r),mapping:r,control:{type:"select",labels:Object.keys(r)}}}},t={args:{heading:"h1",text:"Page Title"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'h1',
    text: 'Page Title'
  }
}`,...t.parameters?.docs?.source}}};const f=["Headings"];export{t as Headings,f as __namedExportsOrder,j as default};
