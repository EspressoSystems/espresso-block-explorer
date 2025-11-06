import{j as o}from"./iframe-DiVw3yHA.js";import{D as m}from"./LoadingProvider-Zkt76Ed-.js";import"./DateTimeFormattersProvider-Cke_KSl2.js";import"./LocaleProvider-DHMWAj9Z.js";import"./PagePathProvider-Cvk9bh81.js";import"./NowProvider-DrI6YYBv.js";import"./NumberFormattersProvider-BfcekU16.js";import"./PathResolverProvider-AUu7mEWL.js";import{g as e,s as i}from"./data_table_shared-DVFERkan.js";import"./blocks-dMo2Qi7E.js";import{P as s}from"./nodes-DZb7HhK8.js";import{m as p,i as n}from"./functional-g5wG3Azh.js";import"./string-IJEBdhwx.js";import"./validator-B_MSyhUJ.js";import{T as l}from"./TaggedBase64-S1MhFE0d.js";import{a as c}from"./TransactionSummaryDataTable-CJ54mHnb.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-BWqZvVyY.js";import"./index-rJ8Cu0im.js";import"./index-AbTblZKA.js";import"./client-C1qNaJNW.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./assert-BI051aL8.js";import"./data-Cpeha0UW.js";import"./url-B2hYd5U-.js";import"./wallet_address-CV4WvpIi.js";import"./array_buffer-zIqOMhaQ.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-BaB9Abwv.js";import"./transaction_summary-_-RUzodv.js";import"./CopyButton-CldIG6ux.js";import"./higher_order-DYYvazKI.js";import"./CheckCircleFilled-Nlm5aBDc.js";import"./SVGIconBase-D9AVKmp6.js";import"./Copy-CHyUaZ_C.js";/* empty css               */import"./DateTimeText-LnNw2zUc.js";import"./NumberText-4ws4kGsw.js";import"./TaggedBase64Text-DMTIXLwp.js";import"./Text-BU7JBOLk.js";import"./DataTable-2f6GjJNV.js";import"./typography-BKrsIUhr.js";import"./ChevronUp-BDL2JExt.js";import"./Link-BwoWaFed.js";import"./RollUpSimple-vDCeTTab.js";import"./Payments-CRZ9Ptfh.js";import"./TwitterIcon-BAkGK_ou.js";import"./ArrowRight-DOD6Ornx.js";import"./Close-D9LHiqGv.js";import"./MediumIcon-B5tXOAOu.js";import"./EspressoLogo-D4ahokjl.js";import"./EspressoLogoAndTitle-CZ10Pgv2.js";import"./Menu-B0Gt87_K.js";import"./SearchGlass-C4UXAFci.js";import"./XIcon-DGXxoaoe.js";const u=t=>o.jsx(m.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),gt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(p(n(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),r={args:{transactionSummaries:w},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await e(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
