import{j as o}from"./iframe-BtlXJKZ1.js";import{g as e,s as m}from"./data_table_shared-Dwg62EfB.js";import{D as i}from"./data_provider-DZfionCo.js";import"./blocks-BEHlDsni.js";import{P as s}from"./nodes-DZ7P8xPE.js";import{m as n,i as p}from"./functional-CHI4evRY.js";import"./string-BGbpIfpT.js";import"./validator-CeWWAq22.js";import{T as l}from"./tagged_base64-C1c0MovD.js";import{T as c}from"./transaction_summary_data_table-CWfVwKZ1.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Bb7ebJnf.js";import"./index-DVf-yhbM.js";import"./index-CzfUxczt.js";import"./client-CdOtE264.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BBaBP7s4.js";import"./assert-BWgKxNW2.js";import"./data-D5p7UK42.js";import"./missing_element_error-BMmla67R.js";import"./wallet_address-JTIetClq.js";import"./array_buffer_hex-2CxW6xhL.js";import"./base64-D2HwddJb.js";import"./unimplemented_error-BDiuBEcJ.js";import"./array_buffer_base64-Df7I341a.js";import"./copy_tagged_base64-Cxp2yGc2.js";import"./inline-jN5wC3v9.js";import"./now_provider-D29HcoOP.js";import"./higher_order-DrPNsCRC.js";import"./check_circle_filled-xq0CVmDA.js";import"./svg_icon_base-BHrQ2xhA.js";import"./copy-B8AV97Y6.js";import"./path_resolver_provider-DFkOybrh.js";import"./data_table-DguU8lNy.js";import"./text-CEhLEmI-.js";import"./chevron_up-C63lzylG.js";import"./skeleton_content-C3wfAwRT.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-DirxX4OA.js";import"./date_time_formatters_provider-C0tfyVOJ.js";import"./locale_provider-Ghcznv9j.js";import"./number_text-BdO7pZh2.js";import"./number_formatters_provider-uduEK5FV.js";import"./tagged_base64_text-Clxk9y88.js";/* empty css               */import"./link-tL5mD4Oo.js";import"./roll_up_simple-Bjnm7bq7.js";import"./espresso-RSia6qf6.js";import"./espresso_logo-VJAzIWo1.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
