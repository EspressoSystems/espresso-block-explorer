import{j as i}from"./jsx-runtime-Cd6u8K_H.js";import{H as u}from"./HexDump-DRDfaOPG.js";import"./index-UfW7PFvU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./functional-D1RzZCNy.js";import"./string-BgQ3tcOU.js";import"./higher_order-D-qJ_MgL.js";import"./Text-BU7JBOLk.js";const c=n=>{const s=Math.min(n.numBytes,409600),r=new Uint8Array(s);for(let e=0,p=r.byteLength;e<p;e++)r[e]=Math.floor(Math.random()*256);return i(u,{value:r.buffer})},B={title:"Components/Page Section/Hex Dump",component:c},t={args:{numBytes:1024}};var o,m,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    numBytes: 1024
  }
}`,...(a=(m=t.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const D=["HexDump"];export{t as HexDump,D as __namedExportsOrder,B as default};
