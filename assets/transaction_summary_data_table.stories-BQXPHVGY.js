import{j as o}from"./iframe-CCLKIoat.js";import{g as e,s as m}from"./data_table_shared-BUuDOTPB.js";import{D as i}from"./data_provider-BF5QLA6e.js";import"./blocks-Dw_RhIDq.js";import{P as s}from"./nodes-BcMKYiFz.js";import{m as n,i as p}from"./functional-DsFqNm-o.js";import"./string-BsSBvYb_.js";import"./validator-DvtB0LEj.js";import{T as l}from"./tagged_base64-OJExTSEK.js";import{T as c}from"./transaction_summary_data_table-DNp0D7QH.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-cZ1DOXl5.js";import"./index-D298oDv-.js";import"./index-BBD36RIg.js";import"./client-CZEMcj29.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B8_AgdSi.js";import"./assert-B11BgmXM.js";import"./bigint-XOkPApkc.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOXFIEXu.js";import"./wallet_address-Djn4OEas.js";import"./array_buffer-OWUzmdpG.js";import"./base64-C9eISNYa.js";import"./unimplemented_error-B7nptaaw.js";import"./url-D1AcOu20.js";import"./copy_tagged_base64-BIjefRQs.js";import"./inline-BG01jBaJ.js";import"./now_provider-B5osc7Mq.js";import"./higher_order-DyFKxQfc.js";import"./check_circle_filled-zCoUuxn4.js";import"./svg_icon_base-BQe2kabo.js";import"./copy-DG2lSR0o.js";import"./path_resolver_provider-C-CQoB0e.js";import"./data_table-UR9ORkGf.js";import"./text-CEhLEmI-.js";import"./chevron_up-DUXgi73a.js";import"./skeleton_content-DNXiQAlC.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-BkX9HxlE.js";import"./date_time_formatters_provider-D0J5X-TW.js";import"./locale_provider-K_0BCaCZ.js";import"./number_text-BXbb_2Rl.js";import"./number_formatters_provider-3ltM0G6e.js";import"./tagged_base64_text-CFQdB-Dk.js";/* empty css               */import"./link-Dm9EQTEY.js";import"./roll_up_simple-CfS3FdB-.js";import"./espresso_logo-D4TLXJxY.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
