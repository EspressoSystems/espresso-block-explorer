import{j as o}from"./iframe-DbeSBdx1.js";import{D as m}from"./LoadingProvider-CYIEarZO.js";import"./DateTimeFormattersProvider-VwnNOFLX.js";import"./LocaleProvider-ShZNSPZC.js";import"./PagePathProvider-DHZuw_Lh.js";import"./NowProvider-CR5LhUAr.js";import"./NumberFormattersProvider-Cp-tTNjA.js";import"./PathResolverProvider-BbMkGmpS.js";import{g as e,s as i}from"./data_table_shared-DzOYbbyu.js";import"./blocks-DnqCWqJj.js";import{P as s}from"./nodes-CybGWCTR.js";import{m as p,i as n}from"./functional-BkuSRiGx.js";import"./string-IJEBdhwx.js";import"./validator-Bc1e4htd.js";import{T as l}from"./TaggedBase64-S1MhFE0d.js";import{a as c}from"./TransactionSummaryDataTable-IfKUuHbS.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-VBIieVXa.js";import"./index-CvOsjU90.js";import"./index-robzuinq.js";import"./client-DnChbwRi.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./assert-BI051aL8.js";import"./data-Cpeha0UW.js";import"./url-Bph6d-ow.js";import"./wallet_address-DSnMXMW7.js";import"./array_buffer-CdfOeTuC.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-DJQ_hYxE.js";import"./transaction_summary-_-RUzodv.js";import"./CopyButton-zoahVRbZ.js";import"./higher_order-B0Ghit15.js";import"./CheckCircleFilled-CeA80Vz7.js";import"./SVGIconBase-BoqfZkjB.js";import"./Copy-bGDnt_eA.js";/* empty css               */import"./DateTimeText-DADD0_xj.js";import"./NumberText-BKqqWlFj.js";import"./TaggedBase64Text-BoPVehwl.js";import"./Text-BU7JBOLk.js";import"./DataTable-2T5KL_Sh.js";import"./typography-V6XS-j0Y.js";import"./ChevronUp-BddxVJOP.js";import"./Link-CJCZSdo0.js";import"./RollUpSimple-DHOAjFjp.js";import"./Payments-rpU8NsNX.js";import"./TwitterIcon-C7j02xME.js";import"./ArrowRight-YoLsakZ7.js";import"./Close-CDk4xiUX.js";import"./MediumIcon-C0IArC21.js";import"./EspressoLogo-BwzdQaHR.js";import"./EspressoLogoAndTitle-CxphK9MU.js";import"./Menu-BZsNYXoE.js";import"./SearchGlass-FJZUrUlL.js";import"./XIcon-C2fhLDE4.js";const u=t=>o.jsx(m.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),gt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(p(n(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),r={args:{transactionSummaries:w},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await e(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
