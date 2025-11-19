import{j as o}from"./iframe-CKCSKCZk.js";import{D as m}from"./LoadingProvider-IZAf8NZo.js";import"./DateTimeFormattersProvider-CTw080gJ.js";import"./LocaleProvider-ZOKW40Kc.js";import"./PagePathProvider-Bck-CLYd.js";import"./NowProvider-DDm0tQ2h.js";import"./NumberFormattersProvider-CCFFQgJj.js";import"./PathResolverProvider-65y-23gj.js";import{g as i,s}from"./data_table_shared-Amq6ew_h.js";import"./blocks-DqaRurhN.js";import{P as p}from"./nodes-sPTSRSIJ.js";import{m as n,i as l}from"./functional-D84nw2eW.js";import{B as c}from"./BlockSummaryDataTable-DyUxKp7d.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-BNPRQ27L.js";import"./index-DmGiuwIY.js";import"./index-DR30vb4A.js";import"./client-DX8xMgVj.js";import"./sleep-CW-vxfof.js";import"./monetary_value-q68MMcLV.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-CL6rcPDn.js";import"./base64-Dx8wLaZf.js";import"./SkeletonContent-CmRaKWaw.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-CpkVVQnn.js";import"./CopyHex-biThFeaG.js";import"./array_buffer-DuWTC5ee.js";import"./CopyButton-DZtevsws.js";import"./higher_order-DLiNGwX1.js";import"./CheckCircleFilled-DdPcBHVp.js";import"./SVGIconBase-DGbb4H2y.js";import"./Copy-Dw0OUX71.js";/* empty css               */import"./DateTimeText-H-Z2u3yn.js";import"./HexText-BhuQynQ8.js";import"./NumberText-3GIByMNg.js";import"./DataTable-CSqEyAGP.js";import"./Text-BU7JBOLk.js";import"./typography-BFEyteYy.js";import"./ChevronUp-qUK-_iwc.js";import"./Link-Bn7YDIhB.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    blockSummaries: blockSummaries
  },
  play: async ({
    canvasElement,
    step
  }) => {
    await step('retrieve the data table element', async () => {
      await getDataTable(canvasElement);
    });
    await step('sort all columns', async () => {
      await selectAllTableHeaderCellsTwice(canvasElement);
    });
  }
}`,...r.parameters?.docs?.source}}};const st=["Interactions"];export{r as Interactions,st as __namedExportsOrder,it as default};
