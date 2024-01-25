import{j as l}from"./jsx-runtime-5BUNAZ9W.js";import{m as o,a as p}from"./functional-bAXEDD3h.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const a=e=>`0x${Array.from(o(o(p(new Uint8Array(e.value),Number),t=>t.toString(16)),t=>t.padStart(2,"0"))).join("")}`;try{a.displayName="FullHexText",a.__docgenInfo={description:`FullHexText is a simple Text component that renders the given ArrayBuffer as
a hex string`,displayName:"FullHexText",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ArrayBuffer"}}}}}catch{}const m=e=>l(a,{value:new Uint8Array(e.hex).buffer}),y={title:"Components/Text/Full Hex",component:m},r={args:{hex:[1,35,69,103,137,171,205,239]}};var n,s,x;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    hex: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef]
  }
}`,...(x=(s=r.parameters)==null?void 0:s.docs)==null?void 0:x.source}}};const _=["FullHex"];export{r as FullHex,_ as __namedExportsOrder,y as default};
