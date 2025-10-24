import{j as o}from"./iframe-Cfh0eePN.js";import{D as m}from"./LoadingProvider-CKkBrFm2.js";import"./DateTimeFormattersProvider-DyCnSpYr.js";import"./LocaleProvider-D8Kjh7eq.js";import"./PagePathProvider-DS53fVOm.js";import"./NowProvider-gH2ltRAl.js";import"./NumberFormattersProvider-BkhnvKth.js";import"./PathResolverProvider-XIbO0Y2M.js";import{g as i,s}from"./data_table_shared-DcWv32yv.js";import{P as p}from"./generateFakeData-DzM1urrr.js";import{m as n,i as l}from"./functional-CJQfVQrn.js";import{B as c}from"./BlockSummaryDataTable-B5XoA1qq.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./string-DurhFPzJ.js";import"./assert-BI051aL8.js";import"./UnimplementedError-DEXMe0kn.js";import"./react.esm-C7E3UGcJ.js";import"./index-Cc9aKvRX.js";import"./index-BsUSwBcT.js";import"./client-DU1do1ug.js";import"./sleep-CW-vxfof.js";import"./monetary_value-D_JlCdWi.js";import"./data-Cpeha0UW.js";import"./TaggedBase64--rbfr4uv.js";import"./base64-C1KKyByM.js";import"./SkeletonContent-DFSGCXCf.js";import"./block_summary-CBGYsBbN.js";import"./ByteSizeText-zghgiO3k.js";import"./CopyHex-CMrw1j88.js";import"./array_buffer-C2KvbgUx.js";import"./CopyButton-xTnrAFcf.js";import"./higher_order-kZsKjHKn.js";import"./CheckCircleFilled-Vjq3m9Qn.js";import"./SVGIconBase-DvO4AW8t.js";import"./Copy-BiMYs1cj.js";/* empty css               */import"./DateTimeText-C2Q7-R2m.js";import"./HexText-BH0RdlRi.js";import"./NumberText-BeA3jcpj.js";import"./DataTable-BYFqHc1z.js";import"./Text-BU7JBOLk.js";import"./typography-CSzJ38pA.js";import"./ChevronUp-DHug100Q.js";import"./Link-K-5c9_v2.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),mt={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const it=["Interactions"];export{r as Interactions,it as __namedExportsOrder,mt as default};
