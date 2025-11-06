import{j as o}from"./iframe-DNoZVhxP.js";import{D as m}from"./LoadingProvider-jMPSrBN8.js";import"./DateTimeFormattersProvider-f03wtLTp.js";import"./LocaleProvider-BH2CEei5.js";import"./PagePathProvider-BjlOfnGv.js";import"./NowProvider-DJ1Fnn1P.js";import"./NumberFormattersProvider--vwjDh8x.js";import"./PathResolverProvider-BhgJJ4ag.js";import{g as i,s}from"./data_table_shared-B1lfVC7L.js";import"./blocks-M9CpjV-n.js";import{P as p}from"./nodes-oXhyEVah.js";import{m as n,i as l}from"./functional-g5wG3Azh.js";import{B as c}from"./BlockSummaryDataTable-BMIwKtMO.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-cCAuJ8Kz.js";import"./index-BchWXTjL.js";import"./index-ZxRsue2O.js";import"./client-aJVzosdg.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-S1MhFE0d.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-us0uT-_q.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-D-qCWW9q.js";import"./CopyHex-BbfWj7vM.js";import"./array_buffer-D67g0v0K.js";import"./CopyButton-B2E6h82I.js";import"./higher_order-Ch0r7QLd.js";import"./CheckCircleFilled-DpH3Q2_x.js";import"./SVGIconBase-B0yIC6Vs.js";import"./Copy-BdkYT5q1.js";/* empty css               */import"./DateTimeText-DBJv16gh.js";import"./HexText-C3u-GxsN.js";import"./NumberText-iNHv8NBq.js";import"./DataTable-Zw9tN4b_.js";import"./Text-BU7JBOLk.js";import"./typography-BZCCN5IO.js";import"./ChevronUp-Cy7Eg2uG.js";import"./Link-C575qFFK.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
