import{j as o}from"./iframe-CZr8t9jY.js";import{D as m}from"./LoadingProvider-CpQg_alm.js";import"./DateTimeFormattersProvider-DnPksEHq.js";import"./LocaleProvider-C_oPBYMV.js";import"./PagePathProvider--PzVzJcG.js";import"./NowProvider-DNx-Ix2E.js";import"./NumberFormattersProvider-Ih38hUky.js";import"./PathResolverProvider-C2pAxoUb.js";import{g as i,s}from"./data_table_shared-FWH5dSHM.js";import"./blocks-BbRoLXeF.js";import{P as p}from"./nodes-BnjHQtbM.js";import{m as n,i as l}from"./functional-Cgf59ne2.js";import{B as c}from"./BlockSummaryDataTable-CZsTdS0v.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-CnaU043v.js";import"./index-6D5ZhKjv.js";import"./index-CPFGE3kC.js";import"./client-BUkiJcQZ.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-S1MhFE0d.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-_-h4l-3E.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-CFW1vnKy.js";import"./CopyHex-BvQfgRC3.js";import"./array_buffer-cBr8gIXV.js";import"./CopyButton-DDDcObOp.js";import"./higher_order-BJO-eimJ.js";import"./CheckCircleFilled-D5GKimKt.js";import"./SVGIconBase-DuaD1ZtN.js";import"./Copy-EcqMa1xk.js";/* empty css               */import"./DateTimeText-BzHS252i.js";import"./HexText-BGjwdQ3o.js";import"./NumberText-BecQVMhk.js";import"./DataTable-I0tUYPwJ.js";import"./Text-BU7JBOLk.js";import"./typography-CT4CmWvf.js";import"./ChevronUp-BJAScdAa.js";import"./Link-CIEm4dKV.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
