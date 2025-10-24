import{j as o}from"./iframe-BHjaQoR_.js";import{D as m}from"./LoadingProvider-BK_eECZs.js";import"./DateTimeFormattersProvider-C490CWS5.js";import"./LocaleProvider-D_LBLk6t.js";import"./PagePathProvider-2NbmsHer.js";import"./NowProvider-C4x-vJBH.js";import"./NumberFormattersProvider-CUY8YoGJ.js";import"./PathResolverProvider-DqEQuimj.js";import{g as e,s as i}from"./data_table_shared-Df_s3zsc.js";import{P as s}from"./generateFakeData-CKGpY-_c.js";import{m as p,i as n}from"./functional-CJQfVQrn.js";import"./string-DurhFPzJ.js";import"./validator-C46EHSKQ.js";import{T as l}from"./TaggedBase64-Br2mDJM1.js";import{a as c}from"./TransactionSummaryDataTable-nuzXUL1X.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./UnimplementedError-DEXMe0kn.js";import"./react.esm-CagCxdCk.js";import"./index-BIlu0H9R.js";import"./index-C5VYqKq3.js";import"./client-D9SK62X2.js";import"./sleep-CW-vxfof.js";import"./monetary_value-D_JlCdWi.js";import"./assert-BI051aL8.js";import"./data-CeQBE4up.js";import"./url-Cp1wsmOC.js";import"./wallet_address-L-2eUJg_.js";import"./array_buffer-BaJjf8aB.js";import"./base64-FoiTT2pJ.js";import"./SkeletonContent-C1MGHMD0.js";import"./transaction_summary-_-RUzodv.js";import"./CopyButton-C-s6aWvc.js";import"./higher_order-B5xxcO2p.js";import"./CheckCircleFilled-BK1jmySu.js";import"./SVGIconBase-Ca1lCrFv.js";import"./Copy-GPQIP3qy.js";/* empty css               */import"./DateTimeText-CqJ295jV.js";import"./NumberText-CvdAo0fc.js";import"./TaggedBase64Text-BEixiiTN.js";import"./Text-BU7JBOLk.js";import"./DataTable-CRhc5ac4.js";import"./typography-DgOFllQG.js";import"./ChevronUp-CGDCHAGo.js";import"./Link-CrUZsl6z.js";import"./RollUpSimple-Bc_AeaWO.js";import"./Payments-BkZwi3e2.js";import"./TwitterIcon-rwve1l5g.js";import"./ArrowRight-JwTvuzRc.js";import"./Close-BpZQpP3A.js";import"./MediumIcon-BFZIHKsa.js";import"./EspressoLogo-CHUeBFti.js";import"./EspressoLogoAndTitle-DnlQrKr6.js";import"./Menu-Dg7HdSzt.js";import"./SearchGlass-CtuRTx6U.js";import"./XIcon-De1rypxV.js";const u=t=>o.jsx(m.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ft={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(p(n(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const gt=["TransactionSummaryDataTable"];export{a as TransactionSummaryDataTable,gt as __namedExportsOrder,ft as default};
