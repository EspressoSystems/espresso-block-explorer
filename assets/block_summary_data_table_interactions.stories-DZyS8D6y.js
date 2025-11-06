import{j as o}from"./iframe-BZt-oGI2.js";import{D as m}from"./LoadingProvider-DxB0Fjbl.js";import"./DateTimeFormattersProvider-B7GdAoyu.js";import"./LocaleProvider-Dj1DT9ro.js";import"./PagePathProvider-CmyuTqbd.js";import"./NowProvider-DLNJqZ40.js";import"./NumberFormattersProvider-DXFJ5cGD.js";import"./PathResolverProvider-Dycj2KH7.js";import{g as i,s}from"./data_table_shared-CtTcge7U.js";import"./blocks-M9CpjV-n.js";import{P as p}from"./nodes-oXhyEVah.js";import{m as n,i as l}from"./functional-g5wG3Azh.js";import{B as c}from"./BlockSummaryDataTable-BQm0nHLE.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-C_OCskS6.js";import"./index-BXl1AAbx.js";import"./index-CpV6ALFd.js";import"./client-Bii3fxNu.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-S1MhFE0d.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-B2Xy3K34.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-CqDC6EBO.js";import"./CopyHex-C9HMEKnM.js";import"./array_buffer-D67g0v0K.js";import"./CopyButton-BwagY-CS.js";import"./higher_order-PSnDsqAx.js";import"./CheckCircleFilled-CxBE9-dX.js";import"./SVGIconBase-DXiGZLXq.js";import"./Copy-4CpKomVk.js";/* empty css               */import"./DateTimeText-_E2nkZua.js";import"./HexText-DAV18_aj.js";import"./NumberText-ClxDVIx1.js";import"./DataTable-DkjBm27M.js";import"./Text-BU7JBOLk.js";import"./typography-CB8jWl-O.js";import"./ChevronUp-BqFsea22.js";import"./Link-BEXmBmMl.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
