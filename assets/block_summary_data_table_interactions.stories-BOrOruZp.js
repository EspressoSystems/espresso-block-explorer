import{j as o}from"./iframe-BHjaQoR_.js";import{D as m}from"./LoadingProvider-BK_eECZs.js";import"./DateTimeFormattersProvider-C490CWS5.js";import"./LocaleProvider-D_LBLk6t.js";import"./PagePathProvider-2NbmsHer.js";import"./NowProvider-C4x-vJBH.js";import"./NumberFormattersProvider-CUY8YoGJ.js";import"./PathResolverProvider-DqEQuimj.js";import{g as i,s}from"./data_table_shared-Df_s3zsc.js";import{P as p}from"./generateFakeData-CKGpY-_c.js";import{m as n,i as l}from"./functional-CJQfVQrn.js";import{B as c}from"./BlockSummaryDataTable-C9tsWuoH.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./react.esm-CagCxdCk.js";import"./index-BIlu0H9R.js";import"./index-C5VYqKq3.js";import"./client-D9SK62X2.js";import"./sleep-CW-vxfof.js";import"./monetary_value-D_JlCdWi.js";import"./data-CeQBE4up.js";import"./TaggedBase64-Br2mDJM1.js";import"./base64-FoiTT2pJ.js";import"./SkeletonContent-C1MGHMD0.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-CtgavNV0.js";import"./CopyHex-D7MLljFl.js";import"./array_buffer-BaJjf8aB.js";import"./CopyButton-C-s6aWvc.js";import"./higher_order-B5xxcO2p.js";import"./CheckCircleFilled-BK1jmySu.js";import"./SVGIconBase-Ca1lCrFv.js";import"./Copy-GPQIP3qy.js";/* empty css               */import"./DateTimeText-CqJ295jV.js";import"./HexText-TQzs933f.js";import"./NumberText-CvdAo0fc.js";import"./DataTable-CRhc5ac4.js";import"./Text-BU7JBOLk.js";import"./typography-DgOFllQG.js";import"./ChevronUp-CGDCHAGo.js";import"./Link-CrUZsl6z.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),mt={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const it=["Interactions"];export{r as Interactions,it as __namedExportsOrder,mt as default};
