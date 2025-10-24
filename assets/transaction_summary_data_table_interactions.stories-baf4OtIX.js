import{j as o}from"./iframe-xPpTS9dO.js";import{D as m}from"./LoadingProvider-DEoBX8YF.js";import"./DateTimeFormattersProvider-oA4ayYzS.js";import"./LocaleProvider-CEiL5IZ3.js";import"./PagePathProvider-6arKryxS.js";import"./NowProvider-Clo83YBl.js";import"./NumberFormattersProvider-CR-f0u1P.js";import"./PathResolverProvider-XKUKdvE1.js";import{g as e,s as i}from"./data_table_shared-Cdi28WET.js";import{P as s}from"./generateFakeData-DzM1urrr.js";import{m as p,i as n}from"./functional-CJQfVQrn.js";import"./string-DurhFPzJ.js";import"./validator-B3Q91Miu.js";import{T as l}from"./TaggedBase64--rbfr4uv.js";import{a as c}from"./TransactionSummaryDataTable-Df-maoAX.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-C2wrrywP.js";import"./UnimplementedError-DEXMe0kn.js";import"./react.esm-C-7xwL5g.js";import"./index-Be3GcqnB.js";import"./index-Du7Eaecz.js";import"./client-BCC1VFLG.js";import"./sleep-CW-vxfof.js";import"./monetary_value-D_JlCdWi.js";import"./assert-BI051aL8.js";import"./data-Cpeha0UW.js";import"./url-Cp1wsmOC.js";import"./wallet_address-BavpVfb_.js";import"./array_buffer-C2KvbgUx.js";import"./base64-C1KKyByM.js";import"./SkeletonContent-D5S015Dw.js";import"./transaction_summary-_-RUzodv.js";import"./CopyButton-DY0FR6xq.js";import"./higher_order-cEYzRmR2.js";import"./CheckCircleFilled-DFwBX1aX.js";import"./SVGIconBase-DRQr1LH4.js";import"./Copy-Bg1Dzap1.js";/* empty css               */import"./DateTimeText-zl9AaIlT.js";import"./NumberText-BI77pf0U.js";import"./TaggedBase64Text-Cs7axRqY.js";import"./Text-BU7JBOLk.js";import"./DataTable-OQRlJXH-.js";import"./typography-DOsyjWqi.js";import"./ChevronUp-BtVhpL9q.js";import"./Link-8iVPWXNU.js";import"./RollUpSimple-CBzTGYbQ.js";import"./Payments-DE_UIBTP.js";import"./TwitterIcon-BI5uZl3H.js";import"./ArrowRight-Ccowj6fL.js";import"./Close-xYcMDWmd.js";import"./MediumIcon-D6a_Yh8K.js";import"./EspressoLogo-BJWv9diF.js";import"./EspressoLogoAndTitle-D1feanXk.js";import"./Menu-CD52jHFq.js";import"./SearchGlass-DY-A1JPh.js";import"./XIcon-xEQT8-yh.js";const u=t=>o.jsx(m.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ft={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(p(n(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),r={args:{transactionSummaries:w},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await e(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const gt=["Interactions"];export{r as Interactions,gt as __namedExportsOrder,ft as default};
