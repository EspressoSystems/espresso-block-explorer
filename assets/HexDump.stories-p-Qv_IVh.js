import{j as u}from"./jsx-runtime-5BUNAZ9W.js";import{H as c}from"./HexDump-rFglLpCU.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./functional-1_R4425B.js";import"./higher_order-VtSBvwoq.js";import"./Text-qj7igP2-.js";const i=n=>{const s=Math.min(n.numBytes,409600),e=new Uint8Array(s);for(let r=0,p=e.byteLength;r<p;r++)e[r]=Math.floor(Math.random()*256);return u(c,{value:e.buffer})},h={title:"Components/Page Section/Hex Dump",component:i},t={args:{numBytes:1024}};var o,m,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    numBytes: 1024
  }
}`,...(a=(m=t.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const B=["HexDump"];export{t as HexDump,B as __namedExportsOrder,h as default};
