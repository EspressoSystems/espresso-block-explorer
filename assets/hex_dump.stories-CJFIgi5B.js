import{j as n}from"./iframe-CCLKIoat.js";import{H as a}from"./hex_dump-D4mDtev-.js";import"./preload-helper-PPVm8Dsz.js";import"./functional-DsFqNm-o.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./higher_order-DyFKxQfc.js";import"./text-CEhLEmI-.js";const p=o=>{const m=Math.min(o.numBytes,409600),t=new Uint8Array(m);for(let e=0,s=t.byteLength;e<s;e++)t[e]=Math.floor(Math.random()*256);return n.jsx(a,{value:t.buffer})},B={title:"Block Explorer/Components/Page Sections/Hex Dump",component:p},r={args:{numBytes:1024}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    numBytes: 1024
  }
}`,...r.parameters?.docs?.source}}};const H=["HexDump"];export{r as HexDump,H as __namedExportsOrder,B as default};
