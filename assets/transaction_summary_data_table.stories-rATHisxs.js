import{j as o}from"./iframe-BvJnvOK3.js";import{g as e,s as m}from"./data_table_shared-B1RwelxN.js";import{D as i}from"./data_provider-D1xrNIUw.js";import"./blocks-BEHlDsni.js";import{P as s}from"./nodes-DZ7P8xPE.js";import{m as n,i as p}from"./functional-CHI4evRY.js";import"./string-BGbpIfpT.js";import"./validator-CeWWAq22.js";import{T as l}from"./tagged_base64-C1c0MovD.js";import{T as c}from"./transaction_summary_data_table-DwhANhCK.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Co-n7QZo.js";import"./index-BJtIBjVq.js";import"./index-BGnfEnc7.js";import"./client-CkpWhZAq.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BBaBP7s4.js";import"./assert-BWgKxNW2.js";import"./data-D5p7UK42.js";import"./missing_element_error-BMmla67R.js";import"./wallet_address-JTIetClq.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./unimplemented_error-BDiuBEcJ.js";import"./array_buffer_base64-Df7I341a.js";import"./copy_tagged_base64-Dsjibt_p.js";import"./inline-B5tKv5Rj.js";import"./now_provider-C3aSuMvV.js";import"./higher_order-CzhT3LZz.js";import"./check_circle_filled-D7G7QKj8.js";import"./svg_icon_base-CnwbtYtI.js";import"./copy-CK2Tda-a.js";import"./path_resolver_provider-ITMlBgoH.js";import"./data_table-DXK7Inda.js";import"./text-CEhLEmI-.js";import"./chevron_up-D-AdgxfR.js";import"./skeleton_content-CNMj2q17.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-DfM-PU1A.js";import"./date_time_formatters_provider-DiFEct46.js";import"./locale_provider-DLWcZiH3.js";import"./number_text-B3D3piOk.js";import"./number_formatters_provider-Cr-dALW7.js";import"./tagged_base64_text-BWi0_w0G.js";/* empty css               */import"./link-CSf1SuhH.js";import"./roll_up_simple-xq-eHijA.js";import"./espresso-UXm19uZ_.js";import"./espresso_logo-DEaQEpYQ.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const ct=["TransactionSummaryDataTable"];export{a as TransactionSummaryDataTable,ct as __namedExportsOrder,lt as default};
