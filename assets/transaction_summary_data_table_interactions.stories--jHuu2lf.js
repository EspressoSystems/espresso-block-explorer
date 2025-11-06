import{j as o}from"./iframe-BZt-oGI2.js";import{D as m}from"./LoadingProvider-DxB0Fjbl.js";import"./DateTimeFormattersProvider-B7GdAoyu.js";import"./LocaleProvider-Dj1DT9ro.js";import"./PagePathProvider-CmyuTqbd.js";import"./NowProvider-DLNJqZ40.js";import"./NumberFormattersProvider-DXFJ5cGD.js";import"./PathResolverProvider-Dycj2KH7.js";import{g as e,s as i}from"./data_table_shared-CtTcge7U.js";import"./blocks-M9CpjV-n.js";import{P as s}from"./nodes-oXhyEVah.js";import{m as p,i as n}from"./functional-g5wG3Azh.js";import"./string-IJEBdhwx.js";import"./validator-CGcHKa4H.js";import{T as l}from"./TaggedBase64-S1MhFE0d.js";import{a as c}from"./TransactionSummaryDataTable-DvHB5Ueh.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-C_OCskS6.js";import"./index-BXl1AAbx.js";import"./index-CpV6ALFd.js";import"./client-Bii3fxNu.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./assert-BI051aL8.js";import"./data-Cpeha0UW.js";import"./url-B2hYd5U-.js";import"./wallet_address-_-ZG_Jzi.js";import"./array_buffer-D67g0v0K.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-B2Xy3K34.js";import"./transaction_summary-_-RUzodv.js";import"./CopyButton-BwagY-CS.js";import"./higher_order-PSnDsqAx.js";import"./CheckCircleFilled-CxBE9-dX.js";import"./SVGIconBase-DXiGZLXq.js";import"./Copy-4CpKomVk.js";/* empty css               */import"./DateTimeText-_E2nkZua.js";import"./NumberText-ClxDVIx1.js";import"./TaggedBase64Text-Ci447vql.js";import"./Text-BU7JBOLk.js";import"./DataTable-DkjBm27M.js";import"./typography-CB8jWl-O.js";import"./ChevronUp-BqFsea22.js";import"./Link-BEXmBmMl.js";import"./RollUpSimple-DjmvZIGB.js";import"./Payments-BIQAYegx.js";import"./TwitterIcon-CZvzCg6P.js";import"./ArrowRight-DwJJ51pA.js";import"./Close-DzllzPzy.js";import"./MediumIcon-DOUTwU_g.js";import"./EspressoLogo-gV1rZjK6.js";import"./EspressoLogoAndTitle-PPdMkUfK.js";import"./Menu-9A05I3lL.js";import"./SearchGlass-BIsvlbep.js";import"./XIcon-BKquj4Ix.js";const u=t=>o.jsx(m.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),gt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(p(n(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),r={args:{transactionSummaries:w},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await e(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
