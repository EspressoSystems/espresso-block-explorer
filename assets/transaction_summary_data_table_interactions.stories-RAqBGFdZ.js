import{j as o}from"./iframe-D38n0YpH.js";import{D as e}from"./loading_provider-CmIKNCgq.js";import"./date_time_formatters_provider-C_Xcb1Og.js";import"./locale_provider-DzT1QKu6.js";import"./page_path_provider-C5mOuAiV.js";import"./now_provider-DY018Nl3.js";import"./number_formatters_provider-ByDysz5-.js";import"./path_resolver_provider-DkcsmNfF.js";import{g as m,s as i}from"./data_table_shared-lGRIXLO2.js";import"./blocks-DWlb3Jqu.js";import{P as s}from"./nodes-BGjGUOjj.js";import{m as n,i as p}from"./functional-AkqJadlP.js";import"./string-BMw5G0Eo.js";import"./validator-CIjtoNtH.js";import{T as l}from"./tagged_base64-DQyXh8_2.js";import{a as c}from"./transaction_summary_data_table-BKZG5u-9.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./unimplemented_error-Bu4XFSEf.js";import"./react.esm-5MOUnv-I.js";import"./index-BQAHaO3b.js";import"./index-b2ucKIM2.js";import"./client-Cormy-O0.js";import"./monetary_value-DtPxvzZx.js";import"./assert-B20_bgky.js";import"./bigint-D18ZzuZl.js";import"./data-QnfQTY7I.js";import"./wallet_address-SfsM8dHX.js";import"./array_buffer-CQ8t_IxW.js";import"./base64-CraqfgLB.js";import"./url-D77M_m7j.js";import"./skeleton_content-BFqgBQHP.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-DFqAvgi0.js";import"./higher_order-xjg9P6xC.js";import"./check_circle_filled-CUn6gAdy.js";import"./svg_icon_base-DTyOsi0d.js";import"./copy-DSARhWHi.js";/* empty css               */import"./date_time_text-BYKdFTsT.js";import"./number_text-BXk_sP1g.js";import"./tagged_base64_text-DbKNcDnK.js";import"./text-CEhLEmI-.js";import"./data_table-x2NQkZcy.js";import"./typography-91BC-7Aj.js";import"./chevron_up-CR5osNpr.js";import"./link-Dpteqe9q.js";import"./roll_up_simple-jml_HJXt.js";import"./espresso_logo-Dw92O4Hz.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:w},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
