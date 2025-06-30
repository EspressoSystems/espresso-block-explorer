import{j as u}from"./iframe-zEcEksBb.js";import{H as i}from"./HexDump-B8iJa4V3.js";import"./functional-BS7OJ5eK.js";import"./MissingElementError-YFeWEE8W.js";import"./string-D0u4-xyR.js";import"./higher_order-BfTEeOwN.js";import"./Text-BU7JBOLk.js";const c=n=>{const a=Math.min(n.numBytes,409600),e=new Uint8Array(a);for(let r=0,p=e.byteLength;r<p;r++)e[r]=Math.floor(Math.random()*256);return u.jsx(i,{value:e.buffer})},h={title:"Components/Page Sections/Hex Dump",component:c},t={args:{numBytes:1024}};var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    numBytes: 1024
  }
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const B=["HexDump"];export{t as HexDump,B as __namedExportsOrder,h as default};
