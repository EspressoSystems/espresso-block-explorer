import{j as o}from"./iframe-CoIItnDg.js";import{D as m}from"./LoadingProvider-D3gToPRF.js";import"./DateTimeFormattersProvider-NK-Emwp_.js";import"./LocaleProvider-DjGseKT_.js";import"./PagePathProvider-Cds9E7Bf.js";import"./NowProvider-CYvyuQeG.js";import"./NumberFormattersProvider-DRR430ge.js";import"./PathResolverProvider-DDmd5dVN.js";import{g as i,s}from"./data_table_shared-_SaJl4AC.js";import"./blocks-M9CpjV-n.js";import{P as p}from"./nodes-oXhyEVah.js";import{m as n,i as l}from"./functional-g5wG3Azh.js";import{B as c}from"./BlockSummaryDataTable-0ftTzn5g.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-DKJ9aFgG.js";import"./index-D2bnl3IT.js";import"./index-BDUJMa5u.js";import"./client-DQRjVC2q.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-S1MhFE0d.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-B_bussuS.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-1CR_PcDC.js";import"./CopyHex-DCdX-JYu.js";import"./array_buffer-D67g0v0K.js";import"./CopyButton-CsrwStrT.js";import"./higher_order-CRWKtA4N.js";import"./CheckCircleFilled-C3pP6zIZ.js";import"./SVGIconBase-CsFpHk-L.js";import"./Copy-BWOcw-FF.js";/* empty css               */import"./DateTimeText-BHh4HfXD.js";import"./HexText-C1VrTX7i.js";import"./NumberText-CnoQTjHV.js";import"./DataTable-D3Ys1d5h.js";import"./Text-BU7JBOLk.js";import"./typography-D27EwMV7.js";import"./ChevronUp-83aa6e5i.js";import"./Link-DaDpAacQ.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
