import{j as o}from"./iframe-6qRHL8kK.js";import{D as m}from"./LoadingProvider-CiRo7IyT.js";import"./DateTimeFormattersProvider-CTAmKTvQ.js";import"./LocaleProvider-Dn-Cb6v6.js";import"./PagePathProvider-BB5_V-vn.js";import"./NowProvider-DFWj2jBI.js";import"./NumberFormattersProvider-BaYHxeOC.js";import"./PathResolverProvider-BhkdUZ3l.js";import{g as i,s}from"./data_table_shared-CewjWZOt.js";import"./blocks-Vs1RfMPo.js";import{P as p}from"./nodes-DRGfJywc.js";import{m as n,i as l}from"./functional-DfB4rlpz.js";import{B as c}from"./BlockSummaryDataTable-D4c4_8U_.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-BvD5kqNE.js";import"./string-De_JMoQm.js";import"./assert-B11BgmXM.js";import"./UnimplementedError-ByG_fP0m.js";import"./react.esm-mVV27ITt.js";import"./index-DAPUY6YU.js";import"./index-JrXKFfwy.js";import"./client-BZLXbOhf.js";import"./sleep-CW-vxfof.js";import"./monetary_value-h2r6a0FR.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-CSIwxIxH.js";import"./base64-BqC1I8uO.js";import"./SkeletonContent-BPdzUoF-.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-Bet9xQjP.js";import"./CopyHex-Cf_006lM.js";import"./array_buffer-BXDx5OgG.js";import"./CopyButton-DRgo3UZF.js";import"./higher_order-BVrk3P2P.js";import"./CheckCircleFilled-BenepkbP.js";import"./SVGIconBase-A4DT5FtI.js";import"./Copy-CZ3brQky.js";/* empty css               */import"./DateTimeText-D6RW9Z_V.js";import"./HexText-DCLf9LZz.js";import"./NumberText-CX4omtIU.js";import"./DataTable-CYgJuLpt.js";import"./Text-BU7JBOLk.js";import"./typography-CU0Q2b4v.js";import"./ChevronUp-CvbK-QV1.js";import"./Link-BnT3lQB9.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
