import{j as o}from"./iframe-Dv6htQ23.js";import{D as m}from"./LoadingProvider-CRv47c_T.js";import"./DateTimeFormattersProvider-C5t6XUcQ.js";import"./LocaleProvider-2MskVwwW.js";import"./PagePathProvider-CMXtbgHw.js";import"./NowProvider-CUEytW_R.js";import"./NumberFormattersProvider-B9KzUGwo.js";import"./PathResolverProvider-DO2OIcGK.js";import{g as i,s}from"./data_table_shared-Cv0ycRZ7.js";import"./blocks-BbRoLXeF.js";import{P as p}from"./nodes-BnjHQtbM.js";import{m as n,i as l}from"./functional-Cgf59ne2.js";import{B as c}from"./BlockSummaryDataTable-8Srmb0hM.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-DzhUo7F1.js";import"./index-DXoJfKfG.js";import"./index-DIxc3OCG.js";import"./client-CpU2PEmD.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-S1MhFE0d.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-BQG7cvXG.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-C1GRTxwh.js";import"./CopyHex-eo5yI8q1.js";import"./array_buffer-cBr8gIXV.js";import"./CopyButton--qJXFrNp.js";import"./higher_order-C7N0yVzV.js";import"./CheckCircleFilled-CplNTaXF.js";import"./SVGIconBase-DcFMrokn.js";import"./Copy-Cg0Q6oFM.js";/* empty css               */import"./DateTimeText-BOpXlQvA.js";import"./HexText-C0iTiRGR.js";import"./NumberText-Dj8iVxLU.js";import"./DataTable-vr5o8hAd.js";import"./Text-BU7JBOLk.js";import"./typography-CgR0bGry.js";import"./ChevronUp-BTRfvUtz.js";import"./Link-DL0PZX4F.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
