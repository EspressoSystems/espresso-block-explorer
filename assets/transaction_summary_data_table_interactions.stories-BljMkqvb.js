import{j as o}from"./iframe-DCPSZz_3.js";import{D as m}from"./LoadingProvider-Bf1m95A-.js";import"./DateTimeFormattersProvider-cQ3P3CXT.js";import"./LocaleProvider-BWtINspZ.js";import"./PagePathProvider-DCChvPC-.js";import"./NowProvider-NCwNHFL9.js";import"./NumberFormattersProvider-D3veI70u.js";import"./PathResolverProvider-Bqa8_97D.js";import{g as e,s as i}from"./data_table_shared-C3Nz2ixW.js";import"./blocks-dMo2Qi7E.js";import{P as s}from"./nodes-DZb7HhK8.js";import{m as p,i as n}from"./functional-g5wG3Azh.js";import"./string-IJEBdhwx.js";import"./validator-B_MSyhUJ.js";import{T as l}from"./TaggedBase64-S1MhFE0d.js";import{a as c}from"./TransactionSummaryDataTable-D8bmmULm.js";import"./preload-helper-PPVm8Dsz.js";import"./MissingElementError-CbV3pOXz.js";import"./UnimplementedError-CdIPpzwU.js";import"./react.esm-B3-VOCYZ.js";import"./index-CoStvZ7i.js";import"./index-DIKh44Bc.js";import"./client-DBKWokK0.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B0ntaWrJ.js";import"./assert-BI051aL8.js";import"./data-Cpeha0UW.js";import"./url-B2hYd5U-.js";import"./wallet_address-CV4WvpIi.js";import"./array_buffer-zIqOMhaQ.js";import"./base64-KHURY7_E.js";import"./SkeletonContent-twYoAYJ9.js";import"./transaction_summary-_-RUzodv.js";import"./CopyButton-DCJivZJa.js";import"./higher_order-CuXztvfh.js";import"./CheckCircleFilled-CoSEID6J.js";import"./SVGIconBase-SJC07UFc.js";import"./Copy-DVTUcARM.js";/* empty css               */import"./DateTimeText-D0R4fo4z.js";import"./NumberText-LA0gFWzT.js";import"./TaggedBase64Text-B6h2NRED.js";import"./Text-BU7JBOLk.js";import"./DataTable-CzQp1Jay.js";import"./typography-qws2gU0X.js";import"./ChevronUp-720FfSpP.js";import"./Link-B_IxivXF.js";import"./RollUpSimple-CUXl9do8.js";import"./Payments-DubIMXBH.js";import"./TwitterIcon-DDpKLhe7.js";import"./ArrowRight-Dd0IXfKp.js";import"./Close-CdW12XwV.js";import"./MediumIcon-DowZDQGK.js";import"./EspressoLogo-DhllUTWc.js";import"./EspressoLogoAndTitle-C1iyFqRJ.js";import"./Menu-8pFKE3TZ.js";import"./SearchGlass-Bb_bwdGG.js";import"./XIcon-C-BePP98.js";const u=t=>o.jsx(m.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),gt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(p(n(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),r={args:{transactionSummaries:w},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await e(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
