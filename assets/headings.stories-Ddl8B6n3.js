import{j as e}from"./iframe-_8SXQwLA.js";import{T as n}from"./text-CEhLEmI-.js";import{H as i}from"./heading1-DAf0uCvS.js";import{H as m}from"./heading2-BzYjFpCw.js";import"./preload-helper-PPVm8Dsz.js";import"./typography-75xCdHDu.js";import"./higher_order-CRjCZC6M.js";/* empty css                */const p=({heading:o,text:a,...r})=>{switch(o){case"h2":return e.jsx(m,{...r,children:e.jsx(n,{text:a})});default:return e.jsx(i,{...r,children:e.jsx(n,{text:a})})}},s={"Heading 1":"h1","Heading 2":"h2"},j={title:"Components/layout/Headings",component:p,argTypes:{heading:{options:Object.keys(s),mapping:s,control:{type:"select",labels:Object.keys(s)}}}},t={args:{heading:"h1",text:"Page Title"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'h1',
    text: 'Page Title'
  }
}`,...t.parameters?.docs?.source}}};const f=["Headings"];export{t as Headings,f as __namedExportsOrder,j as default};
