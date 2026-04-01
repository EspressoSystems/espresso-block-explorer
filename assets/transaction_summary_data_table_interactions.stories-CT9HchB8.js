import{j as o}from"./iframe-hejhwxVl.js";import{g as e,s as m}from"./data_table_shared-DjFrUQak.js";import{D as i}from"./data_provider-oqf6yKht.js";import"./blocks-BO0jjecB.js";import{P as s}from"./nodes-DZ7P8xPE.js";import{m as n,i as p}from"./functional-CHI4evRY.js";import"./string-BGbpIfpT.js";import"./validator-CeWWAq22.js";import{T as l}from"./tagged_base64-C1c0MovD.js";import{T as c}from"./transaction_summary_data_table-DIG7JRm9.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CtXjynZ4.js";import"./index-CrNDxhwo.js";import"./index-CogtgnYk.js";import"./client-D6exDgc_.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BBaBP7s4.js";import"./assert-BWgKxNW2.js";import"./data-D5p7UK42.js";import"./missing_element_error-BMmla67R.js";import"./wallet_address-JTIetClq.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./unimplemented_error-BDiuBEcJ.js";import"./array_buffer_base64-Df7I341a.js";import"./copy_tagged_base64-BRZ9_MDh.js";import"./inline-K76PRVrw.js";import"./now_provider-B6OQbAFu.js";import"./higher_order-W9buzvfY.js";import"./check_circle_filled-5yGenlrM.js";import"./svg_icon_base-C4F1Mj4O.js";import"./copy-Bdipl4NL.js";import"./path_resolver_provider-rWpEttVD.js";import"./data_table-BaNa2ei5.js";import"./text-CEhLEmI-.js";import"./chevron_up-BIXFaApl.js";import"./skeleton_content-DoOnEOVP.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-CdO2TmCu.js";import"./date_time_formatters_provider-BEpx9gnS.js";import"./locale_provider-B6ewQipp.js";import"./number_text-BsE1LgbZ.js";import"./number_formatters_provider-DDCZmzjm.js";import"./tagged_base64_text-DXcuYQmQ.js";/* empty css               */import"./link-Bpr-6faG.js";import"./roll_up_simple-BwJS4AVF.js";import"./espresso-BEdnAGQ0.js";import"./espresso_logo-CW96dy7s.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const ct=["Interactions"];export{a as Interactions,ct as __namedExportsOrder,lt as default};
