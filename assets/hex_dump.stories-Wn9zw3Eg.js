import{j as n}from"./iframe-DERpcsaj.js";import{H as a}from"./hex_dump-CN9YQKA5.js";import"./preload-helper-PPVm8Dsz.js";import"./functional-AkqJadlP.js";import"./missing_element_error-Bv32e7ki.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./higher_order-DzHtQVvV.js";import"./text-CEhLEmI-.js";const p=o=>{const m=Math.min(o.numBytes,409600),r=new Uint8Array(m);for(let e=0,s=r.byteLength;e<s;e++)r[e]=Math.floor(Math.random()*256);return n.jsx(a,{value:r.buffer})},H={title:"Components/Page Sections/Hex Dump",component:p},t={args:{numBytes:1024}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    numBytes: 1024
  }
}`,...t.parameters?.docs?.source}}};const h=["HexDump"];export{t as HexDump,h as __namedExportsOrder,H as default};
