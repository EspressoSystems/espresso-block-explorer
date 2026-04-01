import{j as o}from"./iframe-ChCxfwos.js";import{g as e,s as m}from"./data_table_shared-CCLNRxh2.js";import{D as i}from"./data_provider-DFHjvLMD.js";import"./blocks-BO0jjecB.js";import{P as s}from"./nodes-DZ7P8xPE.js";import{m as n,i as p}from"./functional-CHI4evRY.js";import"./string-BGbpIfpT.js";import"./validator-CeWWAq22.js";import{T as l}from"./tagged_base64-C1c0MovD.js";import{T as c}from"./transaction_summary_data_table-B2XkCDAf.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Cz0XuZNv.js";import"./index-BgdMPv3v.js";import"./index-BfisTMic.js";import"./client-CG3cgWWz.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BBaBP7s4.js";import"./assert-BWgKxNW2.js";import"./data-D5p7UK42.js";import"./missing_element_error-BMmla67R.js";import"./wallet_address-JTIetClq.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./unimplemented_error-BDiuBEcJ.js";import"./array_buffer_base64-Df7I341a.js";import"./copy_tagged_base64-zFqizt1-.js";import"./inline-C_QQjNOV.js";import"./now_provider-BLPyobGt.js";import"./higher_order-d4YXWLIv.js";import"./check_circle_filled-_3c2nQY8.js";import"./svg_icon_base-BBi7gb5S.js";import"./copy-CKsgcC37.js";import"./path_resolver_provider-RMZHQ9FE.js";import"./data_table-XgBx71M4.js";import"./text-CEhLEmI-.js";import"./chevron_up-BXN0Q57t.js";import"./skeleton_content-BRFTzvsa.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-FQcsgJ1N.js";import"./date_time_formatters_provider-BNFT2aGM.js";import"./locale_provider-5mesaRdn.js";import"./number_text-VJGMQbGs.js";import"./number_formatters_provider-CYynOyj2.js";import"./tagged_base64_text-CYORB88f.js";/* empty css               */import"./link-DK1gVj_6.js";import"./roll_up_simple-96EiflqN.js";import"./espresso-DlIYWwH8.js";import"./espresso_logo-CW0FvKcw.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
