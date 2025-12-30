import{j as o}from"./iframe-_8SXQwLA.js";import{D as e}from"./loading_provider-coYNHPqW.js";import"./date_time_formatters_provider-BPVee3-W.js";import"./locale_provider-I9PT24Uq.js";import"./page_path_provider-ZcVCYOd8.js";import"./now_provider-DzZh0NgS.js";import"./number_formatters_provider-DMKj1Rdt.js";import"./path_resolver_provider-CwUpyokH.js";import{g as m,s as i}from"./data_table_shared-JGERveto.js";import"./blocks-qkPXeA9w.js";import{P as s}from"./nodes-UGwKe3sl.js";import{m as n,i as p}from"./functional-aFFbciHe.js";import"./string-BQNQEiqR.js";import"./validator-CZmgkc-d.js";import{T as l}from"./tagged_base64-CLbDmqUB.js";import{a as c}from"./transaction_summary_data_table-_OdpQ_1n.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-R7man0D-.js";import"./index-B5tnBE35.js";import"./index-B-oIjzzz.js";import"./client-qXIdXvbr.js";import"./monetary_value-B9zIXJUb.js";import"./assert-B11BgmXM.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./wallet_address-DTxp5ftj.js";import"./array_buffer-DJmzCn2r.js";import"./base64-Pz9_wEqE.js";import"./url-YePslpKX.js";import"./skeleton_content-BF7nRVJr.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-DIdQvTB7.js";import"./higher_order-CRjCZC6M.js";import"./check_circle_filled-BmH2gJ6J.js";import"./svg_icon_base-CyGEXINF.js";import"./copy-RJwhQmOl.js";/* empty css               */import"./date_time_text-70JgumWw.js";import"./number_text-CFU9rp03.js";import"./tagged_base64_text-bdnPhY8b.js";import"./text-CEhLEmI-.js";import"./data_table-DHBgeeq-.js";import"./typography-75xCdHDu.js";import"./chevron_up-Dz5W02Mo.js";import"./link-Bk51UXDT.js";import"./roll_up_simple-TXIJ32-D.js";import"./espresso_logo-DEsOx0-_.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
