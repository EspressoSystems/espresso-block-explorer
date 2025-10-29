import{j as o}from"./iframe-JNS3S7eL.js";import{D as m}from"./LoadingProvider-jaO_huAJ.js";import"./DateTimeFormattersProvider-Bu6s_REn.js";import"./LocaleProvider-DYWRrg4P.js";import"./PagePathProvider-DcxjeYx6.js";import"./NowProvider-DrewU4Ns.js";import"./NumberFormattersProvider-DDrkjpLU.js";import"./PathResolverProvider-kVM6rfVI.js";import{g as i,s}from"./data_table_shared-Du7H94Yx.js";import{P as p}from"./generateFakeData-CP08bojA.js";import{m as n,i as l}from"./functional-BkuSRiGx.js";import{B as c}from"./BlockSummaryDataTable-Bx9YxPoC.js";import"./preload-helper-PPVm8Dsz.js";import"./functional_async-BusT9-bd.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-Cxr8OeQ2.js";import"./index--b_OZNDl.js";import"./index-D6BUHfV8.js";import"./client-Bvy7Yn_p.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-S1MhFE0d.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-DWd7u_gj.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-DCB8GkDk.js";import"./CopyHex-DXVrgonU.js";import"./array_buffer-CdfOeTuC.js";import"./CopyButton-CH6sCv-G.js";import"./higher_order-BlyC2PwC.js";import"./CheckCircleFilled-DXpsHxW-.js";import"./SVGIconBase-CjDAVVkj.js";import"./Copy-k9Z_1ofE.js";/* empty css               */import"./DateTimeText-CKXcd44W.js";import"./HexText-WgaQfxik.js";import"./NumberText-BRYtpqXm.js";import"./DataTable-Cue0kbpb.js";import"./Text-BU7JBOLk.js";import"./typography-DT5TFJ0I.js";import"./ChevronUp-BHo9klre.js";import"./Link-C5AwkEJv.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
