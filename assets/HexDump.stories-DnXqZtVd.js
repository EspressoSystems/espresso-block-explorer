import{j as n}from"./iframe-6qRHL8kK.js";import{H as a}from"./HexDump-ztPbKiBh.js";import"./preload-helper-PPVm8Dsz.js";import"./functional-DfB4rlpz.js";import"./MissingElementError-BvD5kqNE.js";import"./string-De_JMoQm.js";import"./assert-B11BgmXM.js";import"./higher_order-BVrk3P2P.js";import"./Text-BU7JBOLk.js";const p=o=>{const m=Math.min(o.numBytes,409600),r=new Uint8Array(m);for(let e=0,s=r.byteLength;e<s;e++)r[e]=Math.floor(Math.random()*256);return n.jsx(a,{value:r.buffer})},H={title:"Components/Page Sections/Hex Dump",component:p},t={args:{numBytes:1024}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    numBytes: 1024
  }
}`,...t.parameters?.docs?.source}}};const h=["HexDump"];export{t as HexDump,h as __namedExportsOrder,H as default};
