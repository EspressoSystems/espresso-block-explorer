import{j as o}from"./iframe-DemEOwrW.js";import{D as m}from"./LoadingProvider-BejkcYK5.js";import"./DateTimeFormattersProvider-DNsYUpWM.js";import"./LocaleProvider-DbdD2VEs.js";import"./PagePathProvider-D4ag8Oi_.js";import"./NowProvider-BKkkit-4.js";import"./NumberFormattersProvider-Cv2n8TIj.js";import"./PathResolverProvider-ZydTQwVi.js";import{g as i,s}from"./data_table_shared-BkMqSr68.js";import"./blocks-dMo2Qi7E.js";import{P as p}from"./nodes-DZb7HhK8.js";import{m as n,i as l}from"./functional-g5wG3Azh.js";import{B as c}from"./BlockSummaryDataTable-BvNYFDt3.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-CcxOIFVs.js";import"./index-CKhALns6.js";import"./index-D4mXpXRf.js";import"./client-BO4K9TZ6.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-S1MhFE0d.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-DQfGACWR.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-BOXet3wQ.js";import"./CopyHex-5FezhnoO.js";import"./array_buffer-zIqOMhaQ.js";import"./CopyButton-DsyAirpI.js";import"./higher_order-B41vOjYd.js";import"./CheckCircleFilled-DUMDewi5.js";import"./SVGIconBase-By2Dy568.js";import"./Copy-Bk0N4w0I.js";/* empty css               */import"./DateTimeText-DbTGLRv2.js";import"./HexText-DoDkjOLz.js";import"./NumberText-O_tSvdK5.js";import"./DataTable-CkNXTYzH.js";import"./Text-BU7JBOLk.js";import"./typography-D_5Kic_p.js";import"./ChevronUp-MZDMs01O.js";import"./Link-MOCELSgZ.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
