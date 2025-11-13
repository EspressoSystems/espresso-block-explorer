import{j as o}from"./iframe-CPO7J-5p.js";import{D as m}from"./LoadingProvider-BqsRdxCF.js";import"./DateTimeFormattersProvider-Br7i94ug.js";import"./LocaleProvider-Bld4Cmnt.js";import"./PagePathProvider-CVfe-phe.js";import"./NowProvider-DR2Q-jZs.js";import"./NumberFormattersProvider-BNSL7wtz.js";import"./PathResolverProvider-Yb-kM41j.js";import{g as i,s}from"./data_table_shared-5swmVaO_.js";import"./blocks-BbRoLXeF.js";import{P as p}from"./nodes-BnjHQtbM.js";import{m as n,i as l}from"./functional-Cgf59ne2.js";import{B as c}from"./BlockSummaryDataTable-C5SCYd3s.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-BE0DeXnC.js";import"./index-CXZCJYEZ.js";import"./index-DFaGZFUT.js";import"./client-HWUfghTq.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-S1MhFE0d.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-GAQeMj3L.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-CA0nUUkg.js";import"./CopyHex-CivD2dEu.js";import"./array_buffer-cBr8gIXV.js";import"./CopyButton-CsfM4kgz.js";import"./higher_order-DNzVPoVw.js";import"./CheckCircleFilled-DFjBzG3O.js";import"./SVGIconBase-C4fKu3m4.js";import"./Copy-ZeHugg_G.js";/* empty css               */import"./DateTimeText-BSKNW-oJ.js";import"./HexText-C2pkHct6.js";import"./NumberText-DiIXgfZY.js";import"./DataTable-CPdkIla6.js";import"./Text-BU7JBOLk.js";import"./typography-DYIw_45M.js";import"./ChevronUp-Bnp9fN0M.js";import"./Link-D93Tauvt.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
