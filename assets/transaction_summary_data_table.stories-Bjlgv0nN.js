import{j as o}from"./iframe-NIO84YtG.js";import{D as e}from"./loading_provider-DKk4mEKX.js";import"./date_time_formatters_provider-DtoU_Lel.js";import"./locale_provider-BToOAThm.js";import"./page_path_provider-BsYrj1YB.js";import"./now_provider-DhUBwSdf.js";import"./number_formatters_provider-Cs1RR9ei.js";import"./path_resolver_provider-ozKsNWj3.js";import{g as m,s as i}from"./data_table_shared-k7YomRC9.js";import"./blocks-Df0B4e4H.js";import{P as s}from"./nodes-UGwKe3sl.js";import{m as n,i as p}from"./functional-aFFbciHe.js";import"./string-BQNQEiqR.js";import"./validator-CZmgkc-d.js";import{T as l}from"./tagged_base64-CLbDmqUB.js";import{a as c}from"./transaction_summary_data_table-DejqZbAe.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-CmaPJcyU.js";import"./index-Ck50nEkD.js";import"./index-C4dssNlT.js";import"./client-CQBnCKjl.js";import"./monetary_value-CBH2RXSq.js";import"./assert-B11BgmXM.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./wallet_address-DTxp5ftj.js";import"./array_buffer-DJmzCn2r.js";import"./base64-Pz9_wEqE.js";import"./url-YePslpKX.js";import"./skeleton_content-B0jttthw.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-BTAuXDSY.js";import"./higher_order-D0pXbT2F.js";import"./check_circle_filled-CLnTTrWr.js";import"./svg_icon_base-BtJbuG48.js";import"./copy-BUB2txhX.js";/* empty css               */import"./date_time_text-CJikdgtU.js";import"./number_text-B6VPapgb.js";import"./tagged_base64_text-DxRzi61x.js";import"./text-CEhLEmI-.js";import"./data_table-ChVJ73c8.js";import"./typography-knZYGk3h.js";import"./chevron_up-DObhM6Sz.js";import"./link-BLp8HdBr.js";import"./roll_up_simple-p1AupOdx.js";import"./espresso_logo-ZjwkwXzk.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
