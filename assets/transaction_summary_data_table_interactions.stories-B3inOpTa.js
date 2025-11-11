import{j as o}from"./iframe-DemEOwrW.js";import{D as m}from"./LoadingProvider-BejkcYK5.js";import"./DateTimeFormattersProvider-DNsYUpWM.js";import"./LocaleProvider-DbdD2VEs.js";import"./PagePathProvider-D4ag8Oi_.js";import"./NowProvider-BKkkit-4.js";import"./NumberFormattersProvider-Cv2n8TIj.js";import"./PathResolverProvider-ZydTQwVi.js";import{g as e,s as i}from"./data_table_shared-BkMqSr68.js";import"./blocks-dMo2Qi7E.js";import{P as s}from"./nodes-DZb7HhK8.js";import{m as p,i as n}from"./functional-g5wG3Azh.js";import"./string-IJEBdhwx.js";import"./validator-B_MSyhUJ.js";import{T as l}from"./TaggedBase64-S1MhFE0d.js";import{a as c}from"./TransactionSummaryDataTable-BmAp621y.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-CcxOIFVs.js";import"./index-CKhALns6.js";import"./index-D4mXpXRf.js";import"./client-BO4K9TZ6.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./assert-BI051aL8.js";import"./data-Cpeha0UW.js";import"./url-B2hYd5U-.js";import"./wallet_address-CV4WvpIi.js";import"./array_buffer-zIqOMhaQ.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-DQfGACWR.js";import"./transaction_summary-_-RUzodv.js";import"./CopyButton-DsyAirpI.js";import"./higher_order-B41vOjYd.js";import"./CheckCircleFilled-DUMDewi5.js";import"./SVGIconBase-By2Dy568.js";import"./Copy-Bk0N4w0I.js";/* empty css               */import"./DateTimeText-DbTGLRv2.js";import"./NumberText-O_tSvdK5.js";import"./TaggedBase64Text-Dzb7s87v.js";import"./Text-BU7JBOLk.js";import"./DataTable-CkNXTYzH.js";import"./typography-D_5Kic_p.js";import"./ChevronUp-MZDMs01O.js";import"./Link-MOCELSgZ.js";import"./RollUpSimple-BYCNNXin.js";import"./Payments-BLoad0Qp.js";import"./TwitterIcon-DMxDDUr4.js";import"./ArrowRight-DaHx-4uE.js";import"./Close-CacwCBpC.js";import"./MediumIcon-BxzPiqqP.js";import"./EspressoLogo-gilQLBEx.js";import"./EspressoLogoAndTitle-xFtXPUCr.js";import"./Menu-DknMKI2I.js";import"./SearchGlass-BTf6vK_C.js";import"./XIcon-yvqvcNu7.js";const u=t=>o.jsx(m.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),gt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(p(n(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),r={args:{transactionSummaries:w},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await e(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
