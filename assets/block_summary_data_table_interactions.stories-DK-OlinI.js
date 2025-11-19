import{j as o}from"./iframe-f2wUEmLV.js";import{D as m}from"./LoadingProvider-ByZJpGMG.js";import"./DateTimeFormattersProvider-CK9egGjm.js";import"./LocaleProvider-Dj_3fs7h.js";import"./PagePathProvider-DMTB2oDq.js";import"./NowProvider-DGWfNrty.js";import"./NumberFormattersProvider-D0rBDuOv.js";import"./PathResolverProvider-DHybasnL.js";import{g as i,s}from"./data_table_shared-D2UBk1UU.js";import"./blocks-DqaRurhN.js";import{P as p}from"./nodes-sPTSRSIJ.js";import{m as n,i as l}from"./functional-D84nw2eW.js";import{B as c}from"./BlockSummaryDataTable-BTkHIyzE.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-BfNgPaiw.js";import"./index-ChcI8Gvf.js";import"./index-Cd6Sl8gl.js";import"./client-9wIUT5RQ.js";import"./sleep-CW-vxfof.js";import"./monetary_value-q68MMcLV.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-CL6rcPDn.js";import"./base64-Dx8wLaZf.js";import"./SkeletonContent-CqhLHFcX.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-DjbeH3C1.js";import"./CopyHex-DkQu5fj-.js";import"./array_buffer-DuWTC5ee.js";import"./CopyButton-zsN0S60c.js";import"./higher_order-DPELDOyr.js";import"./CheckCircleFilled-yzKlL67t.js";import"./SVGIconBase-fpyNT1Kj.js";import"./Copy-D321I0JD.js";/* empty css               */import"./DateTimeText-jZCy6L4K.js";import"./HexText-Ds4usxHH.js";import"./NumberText-Co9Msrjd.js";import"./DataTable-D5ZeBsxF.js";import"./Text-BU7JBOLk.js";import"./typography-BFtRVX_Y.js";import"./ChevronUp-CuNOEU3-.js";import"./Link-DNt4TLim.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
