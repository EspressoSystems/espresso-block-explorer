import{j as o}from"./iframe-C10TK4K_.js";import{D as m}from"./LoadingProvider-C2Vxpxyu.js";import"./DateTimeFormattersProvider-BWXeBQHM.js";import"./LocaleProvider-CPWkEasf.js";import"./PagePathProvider-BIxanFJ0.js";import"./NowProvider-DSoQthLn.js";import"./NumberFormattersProvider-bgWstj_C.js";import"./PathResolverProvider-3KgqRF8i.js";import{g as i,s}from"./data_table_shared-BgskHxXi.js";import"./blocks-DqaRurhN.js";import{P as p}from"./nodes-sPTSRSIJ.js";import{m as n,i as l}from"./functional-D84nw2eW.js";import{B as c}from"./BlockSummaryDataTable-DQj-5scG.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-BIpUmqN3.js";import"./index-ClpqAqOC.js";import"./index-CGA5JDZ-.js";import"./client-Db_ejbkt.js";import"./sleep-CW-vxfof.js";import"./monetary_value-q68MMcLV.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-CL6rcPDn.js";import"./base64-Dx8wLaZf.js";import"./SkeletonContent-Zw-7Yusf.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText--TZaVChG.js";import"./CopyHex-B-cfSmAv.js";import"./array_buffer-DuWTC5ee.js";import"./CopyButton-BBQ-LRcI.js";import"./higher_order-M1cvrOm5.js";import"./CheckCircleFilled-BqeGpfaK.js";import"./SVGIconBase-BDaUYJC3.js";import"./Copy-C0DrmXAF.js";/* empty css               */import"./DateTimeText-jhOo82k5.js";import"./HexText-DsxiF4vf.js";import"./NumberText-DiVuXGXq.js";import"./DataTable-CSTzcUhH.js";import"./Text-BU7JBOLk.js";import"./typography-CaD01Ilh.js";import"./ChevronUp-CKZNGEK_.js";import"./Link-C3QLy9ZA.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
