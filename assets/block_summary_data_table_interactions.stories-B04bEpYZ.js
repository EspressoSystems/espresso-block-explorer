import{j as o}from"./iframe-DiVw3yHA.js";import{D as m}from"./LoadingProvider-Zkt76Ed-.js";import"./DateTimeFormattersProvider-Cke_KSl2.js";import"./LocaleProvider-DHMWAj9Z.js";import"./PagePathProvider-Cvk9bh81.js";import"./NowProvider-DrI6YYBv.js";import"./NumberFormattersProvider-BfcekU16.js";import"./PathResolverProvider-AUu7mEWL.js";import{g as i,s}from"./data_table_shared-DVFERkan.js";import"./blocks-dMo2Qi7E.js";import{P as p}from"./nodes-DZb7HhK8.js";import{m as n,i as l}from"./functional-g5wG3Azh.js";import{B as c}from"./BlockSummaryDataTable-BjZS3YYE.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-BWqZvVyY.js";import"./index-rJ8Cu0im.js";import"./index-AbTblZKA.js";import"./client-C1qNaJNW.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-S1MhFE0d.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-BaB9Abwv.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-D0Z0zgzZ.js";import"./CopyHex-C74jGEZR.js";import"./array_buffer-zIqOMhaQ.js";import"./CopyButton-CldIG6ux.js";import"./higher_order-DYYvazKI.js";import"./CheckCircleFilled-Nlm5aBDc.js";import"./SVGIconBase-D9AVKmp6.js";import"./Copy-CHyUaZ_C.js";/* empty css               */import"./DateTimeText-LnNw2zUc.js";import"./HexText-DD2SriSr.js";import"./NumberText-4ws4kGsw.js";import"./DataTable-2f6GjJNV.js";import"./Text-BU7JBOLk.js";import"./typography-BKrsIUhr.js";import"./ChevronUp-BDL2JExt.js";import"./Link-BwoWaFed.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
