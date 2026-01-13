import{j as o}from"./iframe-BwY8Nc_o.js";import{g as m,s as e}from"./data_table_shared-B_KEi0Aq.js";import{D as i}from"./data_provider-BIkZvgj5.js";import"./blocks-Dw_RhIDq.js";import{P as s}from"./nodes-BcMKYiFz.js";import{m as n,i as p}from"./functional-DsFqNm-o.js";import"./string-BsSBvYb_.js";import"./validator-DvtB0LEj.js";import{T as l}from"./tagged_base64-OJExTSEK.js";import{T as c}from"./transaction_summary_data_table-DzwAwsVW.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Dexxyoa5.js";import"./index-CFEphY2-.js";import"./index-CY-YAoDF.js";import"./client-BxCpvd2i.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B8_AgdSi.js";import"./assert-B11BgmXM.js";import"./bigint-XOkPApkc.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOXFIEXu.js";import"./wallet_address-Djn4OEas.js";import"./array_buffer-OWUzmdpG.js";import"./base64-C9eISNYa.js";import"./unimplemented_error-B7nptaaw.js";import"./url-D1AcOu20.js";import"./skeleton_content-2CbNU9lX.js";import"./path_resolver_provider-Ty5NTk7B.js";import"./data_table-B2ZnAtti.js";import"./text-CEhLEmI-.js";import"./typography-PELJ4Pi9.js";import"./higher_order-CDuDe3l-.js";import"./chevron_up-BWu4GSwW.js";import"./svg_icon_base-C4H5d3RL.js";import"./transaction_summary-_-RUzodv.js";import"./copy_tagged_base64-1237_mJB.js";import"./inline-B6x12Za0.js";import"./now_provider--GGOYw_8.js";import"./check_circle_filled-8SKb6LCa.js";import"./copy-CrkfaOdj.js";import"./date_time_text-B7XZh9vE.js";import"./date_time_formatters_provider-DyEL5Gtx.js";import"./locale_provider-CuUrHs_V.js";import"./number_text-v_ckRp1n.js";import"./number_formatters_provider-DMP6I6Q-.js";import"./tagged_base64_text-C_twqSLi.js";/* empty css               */import"./link-D1QpCoYu.js";import"./roll_up_simple-fHlQTwQJ.js";import"./espresso_logo-GnYaZFWM.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await e(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const ut=["TransactionSummaryDataTable"];export{a as TransactionSummaryDataTable,ut as __namedExportsOrder,ct as default};
