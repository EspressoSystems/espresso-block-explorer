import{j as o}from"./iframe-CMnlNZVY.js";import{D as e}from"./loading_provider-CDQmatE4.js";import"./date_time_formatters_provider-DBEnsNUl.js";import"./locale_provider-BdMkMFD6.js";import"./page_path_provider-BBjnTzQ1.js";import"./now_provider-Bm-WfiXb.js";import"./number_formatters_provider-fXsUJ3gc.js";import"./path_resolver_provider-CM-lLLot.js";import{g as m,s as i}from"./data_table_shared-Flr5xOHw.js";import"./blocks-5Re1x8yf.js";import{P as s}from"./nodes-UGwKe3sl.js";import{m as n,i as p}from"./functional-aFFbciHe.js";import"./string-BQNQEiqR.js";import"./validator-CZmgkc-d.js";import{T as l}from"./tagged_base64-CLbDmqUB.js";import{a as c}from"./transaction_summary_data_table-CWmXUEAv.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-BeEbU39k.js";import"./index-6p_kJ8eY.js";import"./index-dWiu48WL.js";import"./client-CXPUPldC.js";import"./monetary_value-B9zIXJUb.js";import"./assert-B11BgmXM.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./wallet_address-DTxp5ftj.js";import"./array_buffer-DJmzCn2r.js";import"./base64-Pz9_wEqE.js";import"./url-YePslpKX.js";import"./skeleton_content-Dg5AgUY7.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-Dd-3RrP9.js";import"./higher_order-CwufDn_N.js";import"./check_circle_filled-CDHiQHIQ.js";import"./svg_icon_base-DLdqNfMl.js";import"./copy-Caz9CDxX.js";/* empty css               */import"./date_time_text-C9NyDmvI.js";import"./number_text-D6vdtiOW.js";import"./tagged_base64_text-BwGkmkkE.js";import"./text-CEhLEmI-.js";import"./data_table-CJ5guDsm.js";import"./typography-3_NTd_7n.js";import"./chevron_up-CxZ6ZQul.js";import"./link-Cr-ardMZ.js";import"./roll_up_simple-CvWkxo0i.js";import"./espresso_logo-DEnUOJwi.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
