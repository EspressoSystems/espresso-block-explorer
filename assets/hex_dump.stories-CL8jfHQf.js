import{j as n}from"./iframe-C-FY04Dt.js";import{H as a}from"./hex_dump-DuXDJhxN.js";import"./preload-helper-PPVm8Dsz.js";import"./functional-DLuq-Zgx.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./higher_order-BZ-GvUz5.js";import"./text-CEhLEmI-.js";const p=o=>{const m=Math.min(o.numBytes,409600),r=new Uint8Array(m);for(let e=0,s=r.byteLength;e<s;e++)r[e]=Math.floor(Math.random()*256);return n.jsx(a,{value:r.buffer})},H={title:"Components/Page Sections/Hex Dump",component:p},t={args:{numBytes:1024}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    numBytes: 1024
  }
}`,...t.parameters?.docs?.source}}};const h=["HexDump"];export{t as HexDump,h as __namedExportsOrder,H as default};
