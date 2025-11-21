import{j as o}from"./iframe-MDHi5BtY.js";import{D as m}from"./LoadingProvider-CWKs1OKS.js";import"./DateTimeFormattersProvider-CpgfAdO1.js";import"./LocaleProvider-C_FH1fdc.js";import"./PagePathProvider-CQM9bELx.js";import"./NowProvider-CcJI5I22.js";import"./NumberFormattersProvider-DXmL9zdB.js";import"./PathResolverProvider-BcSX6lnW.js";import{g as i,s}from"./data_table_shared-BVu_lsgo.js";import"./blocks-BXEtmMPs.js";import{P as p}from"./nodes-DBGgm4cu.js";import{m as n,i as l}from"./functional-45VDB5x3.js";import{B as c}from"./BlockSummaryDataTable-CAWcyyRk.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./string-Bj9RBsFG.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-Bmorjp6Y.js";import"./index-Bu6H0fX7.js";import"./index-Dx45Pk4I.js";import"./client-CEW48UON.js";import"./sleep-CW-vxfof.js";import"./monetary_value-q68MMcLV.js";import"./data-Cpeha0UW.js";import"./TaggedBase64-CL6rcPDn.js";import"./base64-Dx8wLaZf.js";import"./SkeletonContent-3WrbC6qB.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-CQo8YJLi.js";import"./CopyHex-CsU9PPWX.js";import"./array_buffer-C6GouG76.js";import"./CopyButton-cUrabOGa.js";import"./higher_order-BL5UuIFh.js";import"./CheckCircleFilled-BxcF7Twl.js";import"./SVGIconBase-CcReponG.js";import"./Copy-C2kKIXDZ.js";/* empty css               */import"./DateTimeText-C2CZTObp.js";import"./HexText-BJr49gt8.js";import"./NumberText-BIzYnAeN.js";import"./DataTable-Bt6wqaf5.js";import"./Text-BU7JBOLk.js";import"./typography-DGJbNoek.js";import"./ChevronUp-BWie7kFO.js";import"./Link-ImtWbzCq.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
