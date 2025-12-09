import{j as o}from"./iframe-DxMCvlUh.js";import{D as e}from"./loading_provider-Df0mCD4_.js";import"./date_time_formatters_provider-DI9LZ6y4.js";import"./locale_provider-EJeatQlK.js";import"./page_path_provider-rK8gQ6lh.js";import"./now_provider-KL7TCSJM.js";import"./number_formatters_provider-DQjo9vlS.js";import"./path_resolver_provider-BxmbrlnP.js";import{g as m,s as i}from"./data_table_shared-D2I2V1o4.js";import"./blocks-C2sSQJmD.js";import{P as s}from"./nodes-BPkpfAJX.js";import{m as n,i as p}from"./functional-CSHHasco.js";import"./string-DO2hqbbz.js";import"./validator-CiTB3PK8.js";import{T as l}from"./tagged_base64-DlPC3yRR.js";import{a as c}from"./transaction_summary_data_table-BeqtHb7v.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-CqVqGmm5.js";import"./index-S_Fpd5t-.js";import"./index-KSdcX99f.js";import"./client-BIN2nFOj.js";import"./monetary_value-CGCIrnLJ.js";import"./assert-B20_bgky.js";import"./bigint-Rw5otYDY.js";import"./data-QnfQTY7I.js";import"./wallet_address-CWJZxHZ9.js";import"./array_buffer-CekOYGOQ.js";import"./base64-Dpbg5EzT.js";import"./url-D2S2nX8d.js";import"./skeleton_content-BfZgbbNq.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-CEfYl7CI.js";import"./higher_order-DagK1XCO.js";import"./check_circle_filled-COGkqefa.js";import"./svg_icon_base-BtviVFgm.js";import"./copy-sHvp9Qji.js";/* empty css               */import"./date_time_text-CCfbQ2QT.js";import"./number_text-DQRO7zl6.js";import"./tagged_base64_text-YlTaibsx.js";import"./text-CEhLEmI-.js";import"./data_table-pY2tn7I_.js";import"./typography-Cf3UQRAk.js";import"./chevron_up-DNEq2bw5.js";import"./link-BXUaQY1C.js";import"./roll_up_simple-C24EKI4w.js";import"./espresso_logo-BNI1lgMS.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
