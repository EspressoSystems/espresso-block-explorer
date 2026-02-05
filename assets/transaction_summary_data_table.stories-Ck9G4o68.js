import{j as o}from"./iframe-BmS3xRbu.js";import{g as e,s as m}from"./data_table_shared-BXwyOTUZ.js";import{D as i}from"./data_provider-Bc8LLRJq.js";import"./blocks-DxW4BCgY.js";import{P as s}from"./nodes-DkqQpvmH.js";import{m as n,i as p}from"./functional-6Z2QHHX7.js";import"./string-DDfX_5jt.js";import"./validator-CdkOZxMl.js";import{T as l}from"./tagged_base64-ZlJISydJ.js";import{T as c}from"./transaction_summary_data_table-BXMmlb8-.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-C5ocioGz.js";import"./index-C7WTE1ec.js";import"./index-D9IcjNSq.js";import"./client-DzYR3hGn.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BgU0H56Y.js";import"./assert-B11BgmXM.js";import"./bigint-CrsQnXJW.js";import"./data-D5p7UK42.js";import"./missing_element_error-BIT--q2G.js";import"./wallet_address-DHR3FL3i.js";import"./array_buffer-D3ACJkCk.js";import"./base64-GdO7PHhr.js";import"./unimplemented_error--qiu5jWk.js";import"./url-dt6vXsS3.js";import"./copy_tagged_base64-DB4bCzWC.js";import"./inline-NDy6MM3u.js";import"./now_provider-N-vzDi1f.js";import"./higher_order-BcBNDTSF.js";import"./check_circle_filled-DVm_fBge.js";import"./svg_icon_base-C9vCfi1H.js";import"./copy-CjmhtO6A.js";import"./path_resolver_provider-D4kQF33W.js";import"./data_table-DQ-k_VTm.js";import"./text-CEhLEmI-.js";import"./chevron_up-D0Pz47GW.js";import"./skeleton_content-1t1_tVBp.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-BBJvh5H4.js";import"./date_time_formatters_provider-Bq_GZuKL.js";import"./locale_provider-DXJjPQek.js";import"./number_text-3CvBpJ-A.js";import"./number_formatters_provider-BMOfqz6h.js";import"./tagged_base64_text-BV90GCUN.js";/* empty css               */import"./link-D0w5oTkU.js";import"./roll_up_simple-ByH1Pz0X.js";import"./espresso_logo-DTcMAend.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
