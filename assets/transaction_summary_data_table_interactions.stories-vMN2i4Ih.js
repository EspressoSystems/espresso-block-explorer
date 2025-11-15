import{j as o}from"./iframe-CAIcvJ70.js";import{D as m}from"./LoadingProvider-DGChf-KQ.js";import"./DateTimeFormattersProvider-X38tn8qt.js";import"./LocaleProvider-y0Euh852.js";import"./PagePathProvider-C1vNRw3D.js";import"./NowProvider-Cc9-Bxzc.js";import"./NumberFormattersProvider-d1oGBTd3.js";import"./PathResolverProvider-BiLWwEPS.js";import{g as e,s as i}from"./data_table_shared-ElxHRYJu.js";import"./blocks-BbRoLXeF.js";import{P as s}from"./nodes-BnjHQtbM.js";import{m as p,i as n}from"./functional-Cgf59ne2.js";import"./string-IJEBdhwx.js";import"./validator-BovotZF2.js";import{T as l}from"./TaggedBase64-S1MhFE0d.js";import{a as c}from"./TransactionSummaryDataTable-291zZUqR.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-Df5qRFvM.js";import"./index-CGVd-9q-.js";import"./index-DLmH92gl.js";import"./client-CKLbhzkr.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./assert-BI051aL8.js";import"./data-Cpeha0UW.js";import"./url-Bph6d-ow.js";import"./wallet_address-1_HiFw02.js";import"./array_buffer-cBr8gIXV.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-2MCCOw30.js";import"./transaction_summary-_-RUzodv.js";import"./CopyButton-DkzcM-Lg.js";import"./higher_order-DYSeXyA3.js";import"./CheckCircleFilled-DqLDQU78.js";import"./SVGIconBase-C2htln4Y.js";import"./Copy-pW00-f5f.js";/* empty css               */import"./DateTimeText-DgoITeOR.js";import"./NumberText-WHq5951A.js";import"./TaggedBase64Text-CCyVnX6a.js";import"./Text-BU7JBOLk.js";import"./DataTable-B-FRTyRc.js";import"./typography-wMQVOeJ2.js";import"./ChevronUp-CALlADTf.js";import"./Link-tBJ7VlgZ.js";import"./RollUpSimple-CuycRjG0.js";import"./Payments-DLleT_ta.js";import"./TwitterIcon-6O_PN-1X.js";import"./ArrowRight-BJPdFFDP.js";import"./Close-DYL-CYlL.js";import"./MediumIcon-CHTTRw5v.js";import"./EspressoLogo-ByuSjbSh.js";import"./EspressoLogoAndTitle-_FX6vQqQ.js";import"./Menu-D9fXNNfp.js";import"./SearchGlass-BJBoxfOR.js";import"./XIcon-CX83rckg.js";const u=t=>o.jsx(m.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),gt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(p(n(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),r={args:{transactionSummaries:w},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await e(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    transactionSummaries
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
}`,...r.parameters?.docs?.source}}};const xt=["Interactions"];export{r as Interactions,xt as __namedExportsOrder,gt as default};
