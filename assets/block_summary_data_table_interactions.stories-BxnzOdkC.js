import{j as o}from"./iframe-Bhigqh8S.js";import{D as m}from"./LoadingProvider-B-tzpZix.js";import"./DateTimeFormattersProvider-hijkch1q.js";import"./LocaleProvider-XFyG3k3y.js";import"./PagePathProvider-sdmImp7U.js";import"./NowProvider-CMOF9EXi.js";import"./NumberFormattersProvider-DqfQyzSW.js";import"./PathResolverProvider-R7WzYCMy.js";import{g as i,s}from"./data_table_shared-DkZdu1CP.js";import"./blocks-B5Evp4fz.js";import{P as p}from"./nodes-D4QSeByf.js";import{m as n,i as l}from"./functional-BycAVInn.js";import{B as c}from"./BlockSummaryDataTable-BkYXAGOf.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-COkWOs6s.js";import"./index-6rOjFIl9.js";import"./index-DRqb6u-H.js";import"./client-DkKJNYvx.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-S1MhFE0d.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-CCdbvsKX.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-RiDAp87x.js";import"./CopyHex-gsm-pOSF.js";import"./array_buffer-DztdsvYf.js";import"./CopyButton-DjWzfThD.js";import"./higher_order-DB2rAW4M.js";import"./CheckCircleFilled-DhX0c1R4.js";import"./SVGIconBase-Y-9iG5mL.js";import"./Copy-DO7KMn7a.js";/* empty css               */import"./DateTimeText-CRkEG6_p.js";import"./HexText-CPnBrQZF.js";import"./NumberText-CTdlrJn9.js";import"./DataTable-D-EAj6Hm.js";import"./Text-BU7JBOLk.js";import"./typography-B0Jwoebx.js";import"./ChevronUp-DWcYHkre.js";import"./Link-D0xo7QvX.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
