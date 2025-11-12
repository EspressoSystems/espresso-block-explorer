import{j as o}from"./iframe-DCPSZz_3.js";import{D as m}from"./LoadingProvider-Bf1m95A-.js";import"./DateTimeFormattersProvider-cQ3P3CXT.js";import"./LocaleProvider-BWtINspZ.js";import"./PagePathProvider-DCChvPC-.js";import"./NowProvider-NCwNHFL9.js";import"./NumberFormattersProvider-D3veI70u.js";import"./PathResolverProvider-Bqa8_97D.js";import{g as i,s}from"./data_table_shared-C3Nz2ixW.js";import"./blocks-dMo2Qi7E.js";import{P as p}from"./nodes-DZb7HhK8.js";import{m as n,i as l}from"./functional-g5wG3Azh.js";import{B as c}from"./BlockSummaryDataTable-BYaA8tuw.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./string-IJEBdhwx.js";import"./assert-BI051aL8.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-B3-VOCYZ.js";import"./index-CoStvZ7i.js";import"./index-DIKh44Bc.js";import"./client-DBKWokK0.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-S1MhFE0d.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-twYoAYJ9.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-DkB5YFBp.js";import"./CopyHex-C68wIBen.js";import"./array_buffer-zIqOMhaQ.js";import"./CopyButton-DCJivZJa.js";import"./higher_order-CuXztvfh.js";import"./CheckCircleFilled-CoSEID6J.js";import"./SVGIconBase-SJC07UFc.js";import"./Copy-DVTUcARM.js";/* empty css               */import"./DateTimeText-D0R4fo4z.js";import"./HexText-BHWa3T91.js";import"./NumberText-LA0gFWzT.js";import"./DataTable-CzQp1Jay.js";import"./Text-BU7JBOLk.js";import"./typography-qws2gU0X.js";import"./ChevronUp-720FfSpP.js";import"./Link-B_IxivXF.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
