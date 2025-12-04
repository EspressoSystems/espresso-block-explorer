import{j as o}from"./iframe-BYhJ0elB.js";import{D as m}from"./LoadingProvider-Bn4-uxSH.js";import"./DateTimeFormattersProvider-D1BWIJEB.js";import"./LocaleProvider-DStRSijF.js";import"./PagePathProvider-nynPDlzk.js";import"./NowProvider-DPFdN-s-.js";import"./NumberFormattersProvider-BlItbZB7.js";import"./PathResolverProvider-CsgTwCpv.js";import{g as i,s}from"./data_table_shared-BIiFY9om.js";import"./blocks-CwOn2-KH.js";import{P as p}from"./nodes-TxP0qWmy.js";import{m as n,i as l}from"./functional-By_9lidy.js";import{B as c}from"./BlockSummaryDataTable-Bi79S4Qc.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./UnimplementedError-BGJ4_cDZ.js";import"./react.esm-BNO_F-p3.js";import"./index-iiudyRW9.js";import"./index-B_8YGfN4.js";import"./client-Djd8YNzz.js";import"./monetary_value-CGCIrnLJ.js";import"./bigint-Rw5otYDY.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-DlPC3yRR.js";import"./base64-Dpbg5EzT.js";import"./SkeletonContent-Ba_gn-Vd.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-CuZS1pBT.js";import"./CopyHex-DgUFR5Yy.js";import"./array_buffer-CXxOH-jd.js";import"./CopyButton-CxEFcHR-.js";import"./higher_order-CiFIqkYR.js";import"./CheckCircleFilled-BTQ9yhTR.js";import"./SVGIconBase-aGBMO4fP.js";import"./Copy-B8g8a5_A.js";/* empty css               */import"./DateTimeText-9mOQpDyB.js";import"./HexText-ZJeb_nkv.js";import"./NumberText-BsD_8CBR.js";import"./DataTable-Bsd52MkK.js";import"./Text-BU7JBOLk.js";import"./typography-C9lmU0CM.js";import"./ChevronUp-BTdUourD.js";import"./Link-CRkn67I4.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
