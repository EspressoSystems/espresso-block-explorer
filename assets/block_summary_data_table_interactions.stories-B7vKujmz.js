import{j as o}from"./iframe-CYSVuX1x.js";import{D as m}from"./LoadingProvider-MAD86iE_.js";import"./DateTimeFormattersProvider-FXlbRvqz.js";import"./LocaleProvider-2Kr3jmsM.js";import"./PagePathProvider-BamKWudK.js";import"./NowProvider-DPht8VTo.js";import"./NumberFormattersProvider-CsE6Hjjx.js";import"./PathResolverProvider-C1EnTGtp.js";import{g as i,s}from"./data_table_shared-CkPiBZpT.js";import"./blocks-DnqCWqJj.js";import{P as p}from"./nodes-CybGWCTR.js";import{m as n,i as l}from"./functional-BkuSRiGx.js";import{B as c}from"./BlockSummaryDataTable-DKhD-uXL.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-COy7Kf2c.js";import"./index-CAo0dEz9.js";import"./index-DYXE1PjN.js";import"./client-CxKbrq6X.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-S1MhFE0d.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-DODOsMVL.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-B-_nlHQb.js";import"./CopyHex-DNvyaoND.js";import"./array_buffer-CdfOeTuC.js";import"./CopyButton-Ct8FXU6p.js";import"./higher_order-Go0fHGBA.js";import"./CheckCircleFilled-DZkxeFyd.js";import"./SVGIconBase-Ce3MMpWa.js";import"./Copy-B-rad2pI.js";/* empty css               */import"./DateTimeText-CYyXa_kR.js";import"./HexText-CmX8c7ld.js";import"./NumberText-BbsCt4nU.js";import"./DataTable-D4kdQJn9.js";import"./Text-BU7JBOLk.js";import"./typography-70s9wEYp.js";import"./ChevronUp-CPkt7YF5.js";import"./Link-CJggTGfr.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
