import{j as o}from"./iframe-CsosU7ok.js";import{D as m}from"./LoadingProvider-AxA0aNAd.js";import"./DateTimeFormattersProvider-BofVQaY6.js";import"./LocaleProvider-CtIKevMd.js";import"./PagePathProvider-smkZoFme.js";import"./NowProvider-fe9o8zdM.js";import"./NumberFormattersProvider-BqBKZweo.js";import"./PathResolverProvider-DVBKdtu_.js";import{g as i,s}from"./data_table_shared-BkwotoFJ.js";import"./blocks-BXEtmMPs.js";import{P as p}from"./nodes-DBGgm4cu.js";import{m as n,i as l}from"./functional-45VDB5x3.js";import{B as c}from"./BlockSummaryDataTable-CbHZAEe9.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-HXUCLrtK.js";import"./index-tYrwqES5.js";import"./index-BQffFVGz.js";import"./client-CEXsb7e4.js";import"./sleep-CW-vxfof.js";import"./monetary_value-q68MMcLV.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-CL6rcPDn.js";import"./base64-Dx8wLaZf.js";import"./SkeletonContent-CB_9e_94.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-CHylc-ig.js";import"./CopyHex-B_-p0ihJ.js";import"./array_buffer-C6GouG76.js";import"./CopyButton-D5TyOSuO.js";import"./higher_order-DCgqxpyS.js";import"./CheckCircleFilled-CUm5i6Tt.js";import"./SVGIconBase-DLBQdslh.js";import"./Copy-oqk4lSc-.js";/* empty css               */import"./DateTimeText-CwqrkJbI.js";import"./HexText-Cbghy2Jb.js";import"./NumberText-mFShU_q1.js";import"./DataTable-BfPsgOJ2.js";import"./Text-BU7JBOLk.js";import"./typography-DX4Zo0Oa.js";import"./ChevronUp-8Q-iejUM.js";import"./Link-Bx84dcg2.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
