import{j as o}from"./iframe-BD1yaix1.js";import{D as e}from"./loading_provider-BbzSpk-c.js";import"./date_time_formatters_provider-D85-FJC7.js";import"./locale_provider-CMpeMO95.js";import"./page_path_provider-5HsnBsq2.js";import"./now_provider-BiYKTb9R.js";import"./number_formatters_provider-CYQ6aY_k.js";import"./path_resolver_provider-7jpIaJCk.js";import{g as m,s as i}from"./data_table_shared-BG_i13PE.js";import"./blocks-ByV96TRh.js";import{P as s}from"./nodes-BtP9A9m5.js";import{m as n,i as p}from"./functional-DLuq-Zgx.js";import"./string-DO2hqbbz.js";import"./validator-DiMZuNkp.js";import{T as l}from"./tagged_base64-DlPC3yRR.js";import{a as c}from"./transaction_summary_data_table-CRK4M8PQ.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-D7jH-8cm.js";import"./index-DB82ngbe.js";import"./index-C8rR8fZL.js";import"./client-DFM34XNO.js";import"./monetary_value-CGCIrnLJ.js";import"./assert-B20_bgky.js";import"./bigint-Rw5otYDY.js";import"./data-QnfQTY7I.js";import"./wallet_address-cs0DJHAB.js";import"./array_buffer-DYdk84gS.js";import"./base64-Dpbg5EzT.js";import"./url-BkzmLfUb.js";import"./skeleton_content-D9B9Vsd-.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-yRgUblgX.js";import"./higher_order-T0GH9dDo.js";import"./check_circle_filled-DJQh71hH.js";import"./svg_icon_base-COhmG2Uq.js";import"./copy-CRo-ZtnZ.js";/* empty css               */import"./date_time_text-DR_8S3xN.js";import"./number_text-hxKhlidF.js";import"./tagged_base64_text-BfGKDfT7.js";import"./text-CEhLEmI-.js";import"./data_table-EFbEfsRt.js";import"./typography-r90yo729.js";import"./chevron_up-BOvwN3J3.js";import"./link-CiXs1UM0.js";import"./roll_up_simple-C1FqRAuj.js";import"./espresso_logo-BTL20vaV.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
