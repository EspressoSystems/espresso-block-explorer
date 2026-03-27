import{j as o}from"./iframe-RrH5notm.js";import{g as e,s as m}from"./data_table_shared-DssNzi8S.js";import{D as i}from"./data_provider-CnI5ffrM.js";import"./blocks-BEHlDsni.js";import{P as s}from"./nodes-DZ7P8xPE.js";import{m as n,i as p}from"./functional-CHI4evRY.js";import"./string-BGbpIfpT.js";import"./validator-CeWWAq22.js";import{T as l}from"./tagged_base64-C1c0MovD.js";import{T as c}from"./transaction_summary_data_table-DRFWJ6DB.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-mGbqDEpr.js";import"./index-DyPC3jWh.js";import"./index-B30HYQ58.js";import"./client-opeFtPJh.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BBaBP7s4.js";import"./assert-BWgKxNW2.js";import"./data-D5p7UK42.js";import"./missing_element_error-BMmla67R.js";import"./wallet_address-JTIetClq.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./unimplemented_error-BDiuBEcJ.js";import"./array_buffer_base64-Df7I341a.js";import"./copy_tagged_base64-DOmFtn7x.js";import"./inline-DWYfX2ad.js";import"./now_provider-DTqjxJ47.js";import"./higher_order-Bm-4pUU4.js";import"./check_circle_filled-DPFde0XQ.js";import"./svg_icon_base-n5AH4Zhh.js";import"./copy-xEs8E4tz.js";import"./path_resolver_provider-CGxT658b.js";import"./data_table-CpwQJm7B.js";import"./text-CEhLEmI-.js";import"./chevron_up-DIltLCUC.js";import"./skeleton_content-DmqNHUTV.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-C_CBnpzd.js";import"./date_time_formatters_provider-DapLe-dN.js";import"./locale_provider-Cyvsr7cz.js";import"./number_text-BiMC9TJ3.js";import"./number_formatters_provider-BWToNpc0.js";import"./tagged_base64_text-D8IOrji7.js";/* empty css               */import"./link-DqAZbzMw.js";import"./roll_up_simple-CnzgI2Ol.js";import"./espresso-DG00-6VA.js";import"./espresso_logo-C91YyoF-.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
