import{j as o}from"./iframe-B5ACCtQe.js";import{D as m}from"./LoadingProvider-inUiJrG2.js";import"./DateTimeFormattersProvider-B5EcmP53.js";import"./LocaleProvider-CmiabapK.js";import"./PagePathProvider-CfW_IWDG.js";import"./NowProvider-Dv0I_bBi.js";import"./NumberFormattersProvider-BqP1tbDM.js";import"./PathResolverProvider-pwfQA8J8.js";import{g as i,s}from"./data_table_shared-BVhvnJ2i.js";import"./blocks-B5FqAfhc.js";import{P as p}from"./nodes-DnbSsXm1.js";import{m as n,i as l}from"./functional-BkuSRiGx.js";import{B as c}from"./BlockSummaryDataTable-Csg8T6hn.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-BHreGMm4.js";import"./index-B_fSnr5e.js";import"./index-CKJHJ-Zn.js";import"./client-bTAg9zYX.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-Cs9KweV7.js";import"./base64-MELtJYLj.js";import"./SkeletonContent-QgcOifyD.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-C5rPYbrt.js";import"./CopyHex-BEWsbbl3.js";import"./array_buffer-CaGbebEx.js";import"./CopyButton-ZkbB-uGf.js";import"./higher_order-DcvTrifj.js";import"./CheckCircleFilled-BiPPd6Eq.js";import"./SVGIconBase-Dvte2yLu.js";import"./Copy-F5qEbGBt.js";/* empty css               */import"./DateTimeText-CvJVIqzH.js";import"./HexText-DgI_1c0Z.js";import"./NumberText-Bh585QNs.js";import"./DataTable-DRDo8FOH.js";import"./Text-BU7JBOLk.js";import"./typography-BEMjcSvZ.js";import"./ChevronUp-BOTvOKJH.js";import"./Link-V6mF5oHi.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
