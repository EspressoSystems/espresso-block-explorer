import{j as t}from"./iframe-DhalQE6g.js";import{p as s,s as d}from"./array_buffer-Dp0JAU74.js";import"./url-C1KMHJ_r.js";import"./string-B8Rshh3e.js";import"./UnimplementedError-BEJrC_RV.js";import"./MissingElementError-C0Z4QoIY.js";import"./base64-BLHA4cZM.js";import{T as a}from"./Text-BU7JBOLk.js";import{e as m,H as f,N as b,a as x}from"./nitro_batch_display-CoSHhCcI.js";import"./preload-helper-PPVm8Dsz.js";import"./functional-CqKsH-G6.js";import"./ByteSizeText-VUKtWV7t.js";import"./NumberFormattersProvider-BmlPtdZ5.js";import"./LocaleProvider-vur0MvWU.js";import"./TransactionsPerSecondText-BTs8I7mx.js";import"./CopyButton-BWw4VkKd.js";import"./NowProvider-Cxgig7md.js";import"./higher_order-rjCqB3wU.js";import"./CheckCircle-C-Fy1nIq.js";import"./SVGIconBase-DFPJZAw4.js";import"./Copy-y0xpi0f3.js";/* empty css               */import"./DateTimeFormattersProvider-Byy5ZfRy.js";import"./CopyHex-Ch0zM98m.js";import"./DateTimeText-Bi26ZGCY.js";import"./FullHexText-Cn6O0nGf.js";import"./HexText-BowuplI0.js";import"./MoneyText-BHOBZ2XU.js";import"./NumberText-CqlUb8qk.js";import"./RelativeTimeText-DO2x2upw.js";import"./TaggedBase64Text-BCBQ_Ogc.js";import"./TimeText-CxMUGASv.js";import"./TableLabeledValue-cv3uu0SN.js";import"./label-DgW09f9Z.js";import"./typography-BVAXx6mN.js";import"./data-GneXnXE7.js";import"./TransactionDetailLoader-Dp_V6I8H.js";import"./LoadingProvider-plSsL9kW.js";import"./TaggedBase64-BTy5Cvep.js";import"./PromiseResolver-BKLn-jPG.js";import"./ProvideAsyncStates-Ak1Lk5Aw.js";import"./LabeledButton-DJtKeGvI.js";import"./Button-hkjjV-kn.js";import"./HexDump-Ch8dsXFB.js";const g=p=>{const{hexString:i,base64String:n}=p;let r=null;if(i){let e;try{e=s(i)}catch(c){return t.jsx(a,{text:`Error parsing hex string: ${c.message}`})}r=new Uint8Array(e)}else if(n){let e;try{e=d.decode(n)}catch(c){return t.jsx(a,{text:`Error parsing base64 string: ${c.message}`})}r=new Uint8Array(e)}if(r){const e=m(r);return e?t.jsxs(t.Fragment,{children:[t.jsx(f,{data:r.buffer}),t.jsx("br",{}),t.jsx(b.Provider,{value:e,children:t.jsx(x,{})})]}):t.jsx(a,{text:"Error: Unable to decode Nitro Batch from input"})}return t.jsx(a,{text:"No input provided"})},i0={title:"Components/Page Sections/Rollups/Nitro Batch Display",component:g},o={args:{hexString:"0x0000000000000041063b6c5d2fb1529f87a84a77315a8b0b7cd22b0c9892c90efed142787121945c3a4d391d52f577b0db72c4187b4f7138395fde98db621c55425ceba967ce598500000000000003d4fa000000000000009cf89af895e10394a4b000000000000000000073657175656e636572838e539b8468de90c7c080b87104f86e6d8407270e00831e8480948edb00816de3a251448253464a3f1ca25c546bc1888ac7230489e800008082a6dea01f2ccc4f0eaf88a2dcc25b62e659a5fe6593ae319904b721f52959c04a47d137a00b9b7becf1823a71725cf9545a1e276568e1e621f00ce2e361cf76a337227bf9820257",base64String:""},argTypes:{hexString:{control:{type:"text"},description:"Hex-encoded Nitro Batch data"},base64String:{control:{type:"text"},description:"Base64-encoded Nitro Batch data"}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    hexString: '0x0000000000000041063b6c5d2fb1529f87a84a77315a8b0b7cd22b0c9892c90efed142787121945c3a4d391d52f577b0db72c4187b4f7138395fde98db621c55425ceba967ce598500000000000003d4fa000000000000009cf89af895e10394a4b000000000000000000073657175656e636572838e539b8468de90c7c080b87104f86e6d8407270e00831e8480948edb00816de3a251448253464a3f1ca25c546bc1888ac7230489e800008082a6dea01f2ccc4f0eaf88a2dcc25b62e659a5fe6593ae319904b721f52959c04a47d137a00b9b7becf1823a71725cf9545a1e276568e1e621f00ce2e361cf76a337227bf9820257',
    base64String: ''
  },
  argTypes: {
    hexString: {
      control: {
        type: 'text'
      },
      description: 'Hex-encoded Nitro Batch data'
    },
    base64String: {
      control: {
        type: 'text'
      },
      description: 'Base64-encoded Nitro Batch data'
    }
  }
}`,...o.parameters?.docs?.source}}};const n0=["NitroBatchDisplay"];export{o as NitroBatchDisplay,n0 as __namedExportsOrder,i0 as default};
