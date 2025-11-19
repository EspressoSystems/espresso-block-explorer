import{j as o}from"./iframe-BoSgNqBp.js";import{D as m}from"./LoadingProvider-CwAifW4j.js";import"./DateTimeFormattersProvider-FuJoOaA5.js";import"./LocaleProvider-f-l0Jujy.js";import"./PagePathProvider-C5stwEi3.js";import"./NowProvider-C2Sgz9rf.js";import"./NumberFormattersProvider-CsVqC7rh.js";import"./PathResolverProvider-BUhwMhFL.js";import{g as i,s}from"./data_table_shared-D3DghqnQ.js";import"./blocks-DqaRurhN.js";import{P as p}from"./nodes-sPTSRSIJ.js";import{m as n,i as l}from"./functional-D84nw2eW.js";import{B as c}from"./BlockSummaryDataTable-B8B3b075.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-CFc2OBhr.js";import"./index-DIetdbzc.js";import"./index-D6cO6e_L.js";import"./client-xeh3sM4i.js";import"./sleep-CW-vxfof.js";import"./monetary_value-q68MMcLV.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-CL6rcPDn.js";import"./base64-Dx8wLaZf.js";import"./SkeletonContent-B3ybZy_b.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-Dc4ZRBh4.js";import"./CopyHex-BaVGMw0R.js";import"./array_buffer-DuWTC5ee.js";import"./CopyButton-BWFxkgp5.js";import"./higher_order-DFRpXnkL.js";import"./CheckCircleFilled-C6Hg_-lA.js";import"./SVGIconBase-DrKpLRmr.js";import"./Copy-BbW09CJG.js";/* empty css               */import"./DateTimeText-DvkobbUc.js";import"./HexText-CFmFig5Q.js";import"./NumberText-ojqcivk1.js";import"./DataTable-CZg-Fv70.js";import"./Text-BU7JBOLk.js";import"./typography-Dp7dq7gN.js";import"./ChevronUp-6YF5iJE_.js";import"./Link-w70UGYEr.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
