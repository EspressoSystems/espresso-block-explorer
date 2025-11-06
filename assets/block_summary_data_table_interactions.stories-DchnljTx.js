import{j as o}from"./iframe-C4ZPvz3S.js";import{D as m}from"./LoadingProvider-C0CMoad9.js";import"./DateTimeFormattersProvider-umfK80_V.js";import"./LocaleProvider-Ifjl9SJa.js";import"./PagePathProvider-By61cyAL.js";import"./NowProvider-Bpd3RyKH.js";import"./NumberFormattersProvider-SZx-qAnO.js";import"./PathResolverProvider-CTtpeaKW.js";import{g as i,s}from"./data_table_shared-DjG-norJ.js";import"./blocks-M9CpjV-n.js";import{P as p}from"./nodes-oXhyEVah.js";import{m as n,i as l}from"./functional-g5wG3Azh.js";import{B as c}from"./BlockSummaryDataTable-Bpvv6v9l.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-BaPllKBR.js";import"./index-B5j2zDE0.js";import"./index-7F0X8HIb.js";import"./client-CDbnNTMK.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-S1MhFE0d.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-vrEAX-5I.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-Z06zMCgt.js";import"./CopyHex-CtbXa_U9.js";import"./array_buffer-D67g0v0K.js";import"./CopyButton-uPtOM2rR.js";import"./higher_order-bNpIPqEX.js";import"./CheckCircleFilled-BwZlx9EF.js";import"./SVGIconBase-D1Jn9W5J.js";import"./Copy-DJRo9pdy.js";/* empty css               */import"./DateTimeText-UbQTWiMm.js";import"./HexText-CJZHJo2I.js";import"./NumberText-B9xVU4B6.js";import"./DataTable-DibrG-zA.js";import"./Text-BU7JBOLk.js";import"./typography-CZegUgq3.js";import"./ChevronUp-D8FN3IKk.js";import"./Link-BCIlkTlj.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
