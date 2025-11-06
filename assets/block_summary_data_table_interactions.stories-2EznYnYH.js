import{j as o}from"./iframe-DbeSBdx1.js";import{D as m}from"./LoadingProvider-CYIEarZO.js";import"./DateTimeFormattersProvider-VwnNOFLX.js";import"./LocaleProvider-ShZNSPZC.js";import"./PagePathProvider-DHZuw_Lh.js";import"./NowProvider-CR5LhUAr.js";import"./NumberFormattersProvider-Cp-tTNjA.js";import"./PathResolverProvider-BbMkGmpS.js";import{g as i,s}from"./data_table_shared-DzOYbbyu.js";import"./blocks-DnqCWqJj.js";import{P as p}from"./nodes-CybGWCTR.js";import{m as n,i as l}from"./functional-BkuSRiGx.js";import{B as c}from"./BlockSummaryDataTable-D5mSF8uN.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-VBIieVXa.js";import"./index-CvOsjU90.js";import"./index-robzuinq.js";import"./client-DnChbwRi.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-S1MhFE0d.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-DJQ_hYxE.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-CHYzxH06.js";import"./CopyHex-cWjprvyU.js";import"./array_buffer-CdfOeTuC.js";import"./CopyButton-zoahVRbZ.js";import"./higher_order-B0Ghit15.js";import"./CheckCircleFilled-CeA80Vz7.js";import"./SVGIconBase-BoqfZkjB.js";import"./Copy-bGDnt_eA.js";/* empty css               */import"./DateTimeText-DADD0_xj.js";import"./HexText-DCyhXeFm.js";import"./NumberText-BKqqWlFj.js";import"./DataTable-2T5KL_Sh.js";import"./Text-BU7JBOLk.js";import"./typography-V6XS-j0Y.js";import"./ChevronUp-BddxVJOP.js";import"./Link-CJCZSdo0.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
