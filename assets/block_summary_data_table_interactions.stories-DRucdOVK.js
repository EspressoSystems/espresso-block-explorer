import{j as o}from"./iframe-FzErJqN6.js";import{D as m}from"./LoadingProvider-CBligMWO.js";import"./DateTimeFormattersProvider-CZowblb9.js";import"./LocaleProvider-DKgBZSpf.js";import"./PagePathProvider-CP4LF1jP.js";import"./NowProvider-_E-9Clgm.js";import"./NumberFormattersProvider-WL2WBrHm.js";import"./PathResolverProvider-CU74cDgI.js";import{g as i,s}from"./data_table_shared-BzrFjlc-.js";import"./blocks-DqaRurhN.js";import{P as p}from"./nodes-sPTSRSIJ.js";import{m as n,i as l}from"./functional-D84nw2eW.js";import{B as c}from"./BlockSummaryDataTable-CveVZ9XH.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-D2hH6fTW.js";import"./index-Bp3wDen4.js";import"./index-CpfLKNmN.js";import"./client-C3Wqjtu9.js";import"./sleep-CW-vxfof.js";import"./monetary_value-q68MMcLV.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-CL6rcPDn.js";import"./base64-Dx8wLaZf.js";import"./SkeletonContent-Cqj7aVKa.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-zZc0kQwz.js";import"./CopyHex-B5sdZsMs.js";import"./array_buffer-DuWTC5ee.js";import"./CopyButton-PEjw1Crq.js";import"./higher_order-D1aPdQSR.js";import"./CheckCircleFilled-B65Yvqd6.js";import"./SVGIconBase-yCORSxOm.js";import"./Copy-Dw9BDBZ5.js";/* empty css               */import"./DateTimeText-BUWL7bUB.js";import"./HexText-CJn3mfhH.js";import"./NumberText-HNhVnN8v.js";import"./DataTable-DWpr4HaW.js";import"./Text-BU7JBOLk.js";import"./typography-Di2_0slN.js";import"./ChevronUp-BMgb842L.js";import"./Link-D6iTiXzC.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
