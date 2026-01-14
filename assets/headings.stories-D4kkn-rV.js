import{j as e}from"./iframe-uLWYWIdy.js";import{T as o}from"./text-CEhLEmI-.js";import{H as i}from"./heading1-JT23ZQ7E.js";import{H as m}from"./heading2-D-qkX0-0.js";import"./preload-helper-PPVm8Dsz.js";import"./typography-D9YEMAu1.js";import"./higher_order-BV5WAo3w.js";/* empty css                */const p=({heading:n,text:s,...a})=>{switch(n){case"h2":return e.jsx(m,{...a,children:e.jsx(o,{text:s})});default:return e.jsx(i,{...a,children:e.jsx(o,{text:s})})}},r={"Heading 1":"h1","Heading 2":"h2"},j={title:"Block Explorer/Components/LayoutHeadings",component:p,argTypes:{heading:{options:Object.keys(r),mapping:r,control:{type:"select",labels:Object.keys(r)}}}},t={args:{heading:"h1",text:"Page Title"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'h1',
    text: 'Page Title'
  }
}`,...t.parameters?.docs?.source}}};const f=["Headings"];export{t as Headings,f as __namedExportsOrder,j as default};
