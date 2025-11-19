import{j as o}from"./iframe-f2wUEmLV.js";import{D as m}from"./LoadingProvider-ByZJpGMG.js";import"./DateTimeFormattersProvider-CK9egGjm.js";import"./LocaleProvider-Dj_3fs7h.js";import"./PagePathProvider-DMTB2oDq.js";import"./NowProvider-DGWfNrty.js";import"./NumberFormattersProvider-D0rBDuOv.js";import"./PathResolverProvider-DHybasnL.js";import{g as e,s as i}from"./data_table_shared-D2UBk1UU.js";import"./blocks-DqaRurhN.js";import{P as s}from"./nodes-sPTSRSIJ.js";import{m as p,i as n}from"./functional-D84nw2eW.js";import"./string-Bj9RBsFG.js";import"./validator-CIqZZigT.js";import{T as l}from"./TaggedBase64-CL6rcPDn.js";import{a as c}from"./TransactionSummaryDataTable-DIHWouXc.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-Dm9GiuiL.js";import"./UnimplementedError-DRDLdWuq.js";import"./react.esm-BfNgPaiw.js";import"./index-ChcI8Gvf.js";import"./index-Cd6Sl8gl.js";import"./client-9wIUT5RQ.js";import"./sleep-CW-vxfof.js";import"./monetary_value-q68MMcLV.js";import"./assert-BI051aL8.js";import"./data-Cpeha0UW.js";import"./url-DwwBj-2c.js";import"./wallet_address-CpgxLnfk.js";import"./array_buffer-DuWTC5ee.js";import"./base64-Dx8wLaZf.js";import"./SkeletonContent-CqhLHFcX.js";import"./transaction_summary-_-RUzodv.js";import"./CopyButton-zsN0S60c.js";import"./higher_order-DPELDOyr.js";import"./CheckCircleFilled-yzKlL67t.js";import"./SVGIconBase-fpyNT1Kj.js";import"./Copy-D321I0JD.js";/* empty css               */import"./DateTimeText-jZCy6L4K.js";import"./NumberText-Co9Msrjd.js";import"./TaggedBase64Text-BWB_yix6.js";import"./Text-BU7JBOLk.js";import"./DataTable-D5ZeBsxF.js";import"./typography-BFtRVX_Y.js";import"./ChevronUp-CuNOEU3-.js";import"./Link-DNt4TLim.js";import"./RollUpSimple-D8T23-7j.js";import"./Payments-DmJH96s6.js";import"./TwitterIcon-DD5rPkD-.js";import"./ArrowRight-Dqagg5JO.js";import"./Close-nZRoo8Me.js";import"./MediumIcon-bX0XWGVV.js";import"./EspressoLogo-Bfwc2n0e.js";import"./EspressoLogoAndTitle-DE1B3KU_.js";import"./Menu-CsNbh3p6.js";import"./SearchGlass-uxnxQV4S.js";import"./XIcon-Cqty-oAX.js";const u=t=>o.jsx(m.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),gt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(p(n(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),r={args:{transactionSummaries:w},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await e(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
