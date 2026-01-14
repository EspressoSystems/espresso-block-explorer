import{j as o}from"./iframe-uLWYWIdy.js";import{g as e,s as m}from"./data_table_shared-CL5XJtXy.js";import{D as i}from"./data_provider-wCUWR71U.js";import"./blocks-Dw_RhIDq.js";import{P as s}from"./nodes-BcMKYiFz.js";import{m as n,i as p}from"./functional-DsFqNm-o.js";import"./string-BsSBvYb_.js";import"./validator-DvtB0LEj.js";import{T as l}from"./tagged_base64-OJExTSEK.js";import{T as c}from"./transaction_summary_data_table-CkMPlsar.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-xIgWRSjR.js";import"./index-B2AoEzCK.js";import"./index-DmRnPi0A.js";import"./client-Dc6hmvfU.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B8_AgdSi.js";import"./assert-B11BgmXM.js";import"./bigint-XOkPApkc.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOXFIEXu.js";import"./wallet_address-Djn4OEas.js";import"./array_buffer-OWUzmdpG.js";import"./base64-C9eISNYa.js";import"./unimplemented_error-B7nptaaw.js";import"./url-D1AcOu20.js";import"./copy_tagged_base64-cDoRLkHj.js";import"./inline-D4BTx294.js";import"./now_provider-b5eqaHEI.js";import"./higher_order-BV5WAo3w.js";import"./check_circle_filled-CZhl7HxG.js";import"./svg_icon_base-kLW-7jgl.js";import"./copy-DcZzltx3.js";import"./path_resolver_provider-WtzdELai.js";import"./data_table-CtQ5bjYG.js";import"./text-CEhLEmI-.js";import"./chevron_up-BlhLCVww.js";import"./skeleton_content-CXAzo2K4.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-BPg9gf0T.js";import"./date_time_formatters_provider-DTa7qZb-.js";import"./locale_provider-CWIPDalB.js";import"./number_text-DsiwwU3j.js";import"./number_formatters_provider-BJawDDf5.js";import"./tagged_base64_text-CI2MD-yf.js";/* empty css               */import"./link-DP5Zd1n-.js";import"./roll_up_simple-DA0cUue6.js";import"./espresso_logo-gwsiqy1d.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
