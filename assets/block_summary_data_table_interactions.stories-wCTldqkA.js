import{j as o}from"./iframe-xPpTS9dO.js";import{D as m}from"./LoadingProvider-DEoBX8YF.js";import"./DateTimeFormattersProvider-oA4ayYzS.js";import"./LocaleProvider-CEiL5IZ3.js";import"./PagePathProvider-6arKryxS.js";import"./NowProvider-Clo83YBl.js";import"./NumberFormattersProvider-CR-f0u1P.js";import"./PathResolverProvider-XKUKdvE1.js";import{g as i,s}from"./data_table_shared-Cdi28WET.js";import{P as p}from"./generateFakeData-DzM1urrr.js";import{m as n,i as l}from"./functional-CJQfVQrn.js";import{B as c}from"./BlockSummaryDataTable-D4IW86tz.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./react.esm-C-7xwL5g.js";import"./index-Be3GcqnB.js";import"./index-Du7Eaecz.js";import"./client-BCC1VFLG.js";import"./sleep-CW-vxfof.js";import"./monetary_value-D_JlCdWi.js";import"./data-Cpeha0UW.js";import"./TaggedBase64--rbfr4uv.js";import"./base64-C1KKyByM.js";import"./SkeletonContent-D5S015Dw.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-BUz_P0aN.js";import"./CopyHex-CCVeOuCP.js";import"./array_buffer-C2KvbgUx.js";import"./CopyButton-DY0FR6xq.js";import"./higher_order-cEYzRmR2.js";import"./CheckCircleFilled-DFwBX1aX.js";import"./SVGIconBase-DRQr1LH4.js";import"./Copy-Bg1Dzap1.js";/* empty css               */import"./DateTimeText-zl9AaIlT.js";import"./HexText-D16FECet.js";import"./NumberText-BI77pf0U.js";import"./DataTable-OQRlJXH-.js";import"./Text-BU7JBOLk.js";import"./typography-DOsyjWqi.js";import"./ChevronUp-BtVhpL9q.js";import"./Link-8iVPWXNU.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),mt={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
