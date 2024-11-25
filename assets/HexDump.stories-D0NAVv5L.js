import{j as i}from"./jsx-runtime-BlAj40OV.js";import{H as u}from"./HexDump-F2dKlwXI.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./functional-BRpe52oq.js";import"./string-CcoL8872.js";import"./higher_order-DnPEgWEz.js";import"./Text-BU7JBOLk.js";const c=n=>{const a=Math.min(n.numBytes,409600),r=new Uint8Array(a);for(let e=0,p=r.byteLength;e<p;e++)r[e]=Math.floor(Math.random()*256);return i.jsx(u,{value:r.buffer})},B={title:"Components/Page Section/Hex Dump",component:c},t={args:{numBytes:1024}};var o,m,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    numBytes: 1024
  }
}`,...(s=(m=t.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const D=["HexDump"];export{t as HexDump,D as __namedExportsOrder,B as default};
