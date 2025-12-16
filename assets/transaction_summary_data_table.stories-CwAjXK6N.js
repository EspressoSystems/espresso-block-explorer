import{j as o}from"./iframe-C36uQjwe.js";import{D as e}from"./loading_provider-BllPH4wN.js";import"./date_time_formatters_provider-CAjNQyov.js";import"./locale_provider-wQt49r1W.js";import"./page_path_provider-C4TVebhC.js";import"./now_provider-D6WuJJod.js";import"./number_formatters_provider-DywPH02u.js";import"./path_resolver_provider-D1l7Ftg7.js";import{g as m,s as i}from"./data_table_shared-qA3ZhzF5.js";import"./blocks-Cvf_KKut.js";import{P as s}from"./nodes-UGwKe3sl.js";import{m as n,i as p}from"./functional-aFFbciHe.js";import"./string-BQNQEiqR.js";import"./validator-CZmgkc-d.js";import{T as l}from"./tagged_base64-CLbDmqUB.js";import{a as c}from"./transaction_summary_data_table-Coxu3BLg.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-DMHPUCOI.js";import"./index-USsukJ9q.js";import"./index-CuQTq9WB.js";import"./client-NDPkqDfF.js";import"./monetary_value-CBH2RXSq.js";import"./assert-B11BgmXM.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./wallet_address-DTxp5ftj.js";import"./array_buffer-DJmzCn2r.js";import"./base64-Pz9_wEqE.js";import"./url-YePslpKX.js";import"./skeleton_content-D1Jtp_i-.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-BiIYGymM.js";import"./higher_order-CfyPS3zu.js";import"./check_circle_filled-DS2y5kq9.js";import"./svg_icon_base-CociR3Gf.js";import"./copy-DFD6qtai.js";/* empty css               */import"./date_time_text-C_B9GWia.js";import"./number_text-CLzfObOD.js";import"./tagged_base64_text-C7K2A3rC.js";import"./text-CEhLEmI-.js";import"./data_table-CSH7CJYS.js";import"./typography-DJ4LlwQ2.js";import"./chevron_up-BOTGh5V0.js";import"./link-COgTKsYC.js";import"./roll_up_simple-DGLgiOxR.js";import"./espresso_logo-DDbmMhnA.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
