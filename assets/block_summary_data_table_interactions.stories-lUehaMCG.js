import{j as o}from"./iframe-6sDIVuv1.js";import{D as m}from"./LoadingProvider-CrTsTokN.js";import"./DateTimeFormattersProvider-B9ptiKJK.js";import"./LocaleProvider-qvoseI_m.js";import"./PagePathProvider-DXgMaDUe.js";import"./NowProvider-9_TLGQLi.js";import"./NumberFormattersProvider-qTTfMxSz.js";import"./PathResolverProvider-BI3bDQHR.js";import{g as i,s}from"./data_table_shared-SYep7v3M.js";import"./blocks-DqaRurhN.js";import{P as p}from"./nodes-sPTSRSIJ.js";import{m as n,i as l}from"./functional-D84nw2eW.js";import{B as c}from"./BlockSummaryDataTable-BcBudP6b.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-D3FClK0z.js";import"./index-gfuw5-ba.js";import"./index-CWZnnTq9.js";import"./client-CuyKNz1O.js";import"./sleep-CW-vxfof.js";import"./monetary_value-q68MMcLV.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-CL6rcPDn.js";import"./base64-Dx8wLaZf.js";import"./SkeletonContent-D1xueSVF.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-B2l_HyjZ.js";import"./CopyHex-DKVYsOU9.js";import"./array_buffer-DuWTC5ee.js";import"./CopyButton-CINQv9cY.js";import"./higher_order-CqVlj1z5.js";import"./CheckCircleFilled-BE3oJZM6.js";import"./SVGIconBase-aCvu50bH.js";import"./Copy-DEIJ49QX.js";/* empty css               */import"./DateTimeText-CQywexfr.js";import"./HexText-Dquu6xJA.js";import"./NumberText-DmOrh8vf.js";import"./DataTable-b7uLggST.js";import"./Text-BU7JBOLk.js";import"./typography-C-j7u7QD.js";import"./ChevronUp-DH0CVnee.js";import"./Link-echROmSn.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
