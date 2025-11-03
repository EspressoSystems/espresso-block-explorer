import{j as o}from"./iframe-CYSVuX1x.js";import{D as m}from"./LoadingProvider-MAD86iE_.js";import"./DateTimeFormattersProvider-FXlbRvqz.js";import"./LocaleProvider-2Kr3jmsM.js";import"./PagePathProvider-BamKWudK.js";import"./NowProvider-DPht8VTo.js";import"./NumberFormattersProvider-CsE6Hjjx.js";import"./PathResolverProvider-C1EnTGtp.js";import{g as e,s as i}from"./data_table_shared-CkPiBZpT.js";import"./blocks-DnqCWqJj.js";import{P as s}from"./nodes-CybGWCTR.js";import{m as p,i as n}from"./functional-BkuSRiGx.js";import"./string-IJEBdhwx.js";import"./validator-Bc1e4htd.js";import{T as l}from"./TaggedBase64-S1MhFE0d.js";import{a as c}from"./TransactionSummaryDataTable-Cl3ovXrw.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-COy7Kf2c.js";import"./index-CAo0dEz9.js";import"./index-DYXE1PjN.js";import"./client-CxKbrq6X.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./assert-BI051aL8.js";import"./data-Cpeha0UW.js";import"./url-Bph6d-ow.js";import"./wallet_address-DSnMXMW7.js";import"./array_buffer-CdfOeTuC.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-DODOsMVL.js";import"./transaction_summary-_-RUzodv.js";import"./CopyButton-Ct8FXU6p.js";import"./higher_order-Go0fHGBA.js";import"./CheckCircleFilled-DZkxeFyd.js";import"./SVGIconBase-Ce3MMpWa.js";import"./Copy-B-rad2pI.js";/* empty css               */import"./DateTimeText-CYyXa_kR.js";import"./NumberText-BbsCt4nU.js";import"./TaggedBase64Text-OehAwbTf.js";import"./Text-BU7JBOLk.js";import"./DataTable-D4kdQJn9.js";import"./typography-70s9wEYp.js";import"./ChevronUp-CPkt7YF5.js";import"./Link-CJggTGfr.js";import"./RollUpSimple-DT4jt97M.js";import"./Payments-BT53DEW9.js";import"./TwitterIcon-Bi0mNePz.js";import"./ArrowRight-Cs6YR0BL.js";import"./Close-BAM7Gsd6.js";import"./MediumIcon-BcImOljs.js";import"./EspressoLogo-BBsJARC4.js";import"./EspressoLogoAndTitle-MOmLNcXB.js";import"./Menu-CMNXv-Ml.js";import"./SearchGlass-B6E4S89k.js";import"./XIcon-BR1Ti_7s.js";const u=t=>o.jsx(m.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),gt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(p(n(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),r={args:{transactionSummaries:w},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await e(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
