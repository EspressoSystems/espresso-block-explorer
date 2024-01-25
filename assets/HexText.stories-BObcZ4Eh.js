import{a as p,j as m}from"./jsx-runtime-5BUNAZ9W.js";import{m as s,a as c}from"./functional-bAXEDD3h.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const n=r=>{const e=Array.from(s(s(c(new Uint8Array(r.value),Number),a=>a.toString(16)),a=>a.padStart(2,"0"))).join("");return e.length<=12?`0x${e}`:p("span",{title:`0x${e}`,children:["0x",e.substring(0,6),"...",e.substring(e.length-6)]})};try{n.displayName="HexText",n.__docgenInfo={description:`HexText is a simple Text component that renders the given ArrayBuffer as
a hex string`,displayName:"HexText",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ArrayBuffer"}}}}}catch{}const l=r=>m(n,{value:new Uint8Array(r.hex).buffer}),h={title:"Components/Text/Hex",component:l},t={args:{hex:[1,35,69,103,137,171,205,239]}};var o,x,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    hex: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef]
  }
}`,...(i=(x=t.parameters)==null?void 0:x.docs)==null?void 0:i.source}}};const y=["Hex"];export{t as Hex,y as __namedExportsOrder,h as default};
