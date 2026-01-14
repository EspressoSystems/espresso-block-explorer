import{j as o}from"./iframe-DI-11s_X.js";import{g as e,s as m}from"./data_table_shared-9Rd_AAgi.js";import{D as i}from"./data_provider-DGnnlGIN.js";import"./blocks-Dw_RhIDq.js";import{P as s}from"./nodes-BcMKYiFz.js";import{m as n,i as p}from"./functional-DsFqNm-o.js";import"./string-BsSBvYb_.js";import"./validator-DvtB0LEj.js";import{T as l}from"./tagged_base64-OJExTSEK.js";import{T as c}from"./transaction_summary_data_table-CdFXBIWc.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Ci7yFpSj.js";import"./index-D4jg92GM.js";import"./index-2Qr5b_Ix.js";import"./client-Dz4AeR3J.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B8_AgdSi.js";import"./assert-B11BgmXM.js";import"./bigint-XOkPApkc.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOXFIEXu.js";import"./wallet_address-Djn4OEas.js";import"./array_buffer-OWUzmdpG.js";import"./base64-C9eISNYa.js";import"./unimplemented_error-B7nptaaw.js";import"./url-D1AcOu20.js";import"./copy_tagged_base64-BRWMwl_X.js";import"./inline-l05htj65.js";import"./now_provider-Cyuty8k3.js";import"./higher_order-CE6OGbq-.js";import"./check_circle_filled-DJShb2x5.js";import"./svg_icon_base-D-9LFK2Z.js";import"./copy-CXF1xCyb.js";import"./path_resolver_provider-CIxFUUvp.js";import"./data_table-BRCUuqRG.js";import"./text-CEhLEmI-.js";import"./chevron_up-vZR5oH8e.js";import"./skeleton_content-BJBzdtyc.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-DPkozv3x.js";import"./date_time_formatters_provider-M9CCk0Jh.js";import"./locale_provider-C8e6pJUg.js";import"./number_text-BtfPTykZ.js";import"./number_formatters_provider-KddJYOdi.js";import"./tagged_base64_text-CvsXgAKe.js";/* empty css               */import"./link-DbE6Ew2K.js";import"./roll_up_simple-BpvZvfsl.js";import"./espresso_logo-C40Le6KV.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
