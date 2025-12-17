import{j as o}from"./iframe-BxVd9QhJ.js";import{D as e}from"./loading_provider-CCQwrYtN.js";import"./date_time_formatters_provider-6IxjHYrQ.js";import"./locale_provider-A_jZKLiE.js";import"./page_path_provider-DZsBij4v.js";import"./now_provider-RSgZaDSQ.js";import"./number_formatters_provider-opkF2gH_.js";import"./path_resolver_provider-BhfCU0xQ.js";import{g as m,s as i}from"./data_table_shared-C_uabt2T.js";import"./blocks-ofKHVHVs.js";import{P as s}from"./nodes-UGwKe3sl.js";import{m as n,i as p}from"./functional-aFFbciHe.js";import"./string-BQNQEiqR.js";import"./validator-CZmgkc-d.js";import{T as l}from"./tagged_base64-CLbDmqUB.js";import{a as c}from"./transaction_summary_data_table-CeGCqiuk.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-BxFI8Oap.js";import"./index-Cj4vgk-l.js";import"./index-COF4ZVwN.js";import"./client-DZCpopPS.js";import"./monetary_value-CBH2RXSq.js";import"./assert-B11BgmXM.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./wallet_address-DTxp5ftj.js";import"./array_buffer-DJmzCn2r.js";import"./base64-Pz9_wEqE.js";import"./url-YePslpKX.js";import"./skeleton_content-YVZISt7j.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-CSA9keM_.js";import"./higher_order-DG5Lsi6K.js";import"./check_circle_filled-DQNrAIZw.js";import"./svg_icon_base-C9Bpn8DM.js";import"./copy-ycI-DGxb.js";/* empty css               */import"./date_time_text-DRIeULjZ.js";import"./number_text-DKh0a-kQ.js";import"./tagged_base64_text-J3XPJPKU.js";import"./text-CEhLEmI-.js";import"./data_table-CoGfiM9S.js";import"./typography-BUc9z9pd.js";import"./chevron_up-zhD7NoAx.js";import"./link-DIO84S1a.js";import"./roll_up_simple-k0-LaSvE.js";import"./espresso_logo-Cwn4rNLC.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:w},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
