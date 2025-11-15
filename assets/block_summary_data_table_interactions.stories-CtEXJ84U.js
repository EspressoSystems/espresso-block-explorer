import{j as o}from"./iframe-CAIcvJ70.js";import{D as m}from"./LoadingProvider-DGChf-KQ.js";import"./DateTimeFormattersProvider-X38tn8qt.js";import"./LocaleProvider-y0Euh852.js";import"./PagePathProvider-C1vNRw3D.js";import"./NowProvider-Cc9-Bxzc.js";import"./NumberFormattersProvider-d1oGBTd3.js";import"./PathResolverProvider-BiLWwEPS.js";import{g as i,s}from"./data_table_shared-ElxHRYJu.js";import"./blocks-BbRoLXeF.js";import{P as p}from"./nodes-BnjHQtbM.js";import{m as n,i as l}from"./functional-Cgf59ne2.js";import{B as c}from"./BlockSummaryDataTable-ii_WnCIz.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-Df5qRFvM.js";import"./index-CGVd-9q-.js";import"./index-DLmH92gl.js";import"./client-CKLbhzkr.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-S1MhFE0d.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-2MCCOw30.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-DwwcoumR.js";import"./CopyHex-DGdo0USx.js";import"./array_buffer-cBr8gIXV.js";import"./CopyButton-DkzcM-Lg.js";import"./higher_order-DYSeXyA3.js";import"./CheckCircleFilled-DqLDQU78.js";import"./SVGIconBase-C2htln4Y.js";import"./Copy-pW00-f5f.js";/* empty css               */import"./DateTimeText-DgoITeOR.js";import"./HexText-JjHx5g3B.js";import"./NumberText-WHq5951A.js";import"./DataTable-B-FRTyRc.js";import"./Text-BU7JBOLk.js";import"./typography-wMQVOeJ2.js";import"./ChevronUp-CALlADTf.js";import"./Link-tBJ7VlgZ.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
