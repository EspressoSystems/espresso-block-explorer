import{j as o}from"./iframe-CkJJG84G.js";import{g as e,s as m}from"./data_table_shared-Bgkfz12E.js";import{D as i}from"./data_provider-BOXyJyDw.js";import"./blocks-sWDJM2B-.js";import{P as s}from"./nodes--GPtCQfL.js";import{m as n,i as p}from"./functional-6Z2QHHX7.js";import"./string-DDfX_5jt.js";import"./validator-CIqAVCmb.js";import{T as l}from"./tagged_base64-Beas1ikT.js";import{T as c}from"./transaction_summary_data_table-RGnE0tM1.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BpJmwcuS.js";import"./index-lJVqr-aj.js";import"./index-C3BZzNqw.js";import"./client-C5DAk86I.js";import"./sleep-CW-vxfof.js";import"./monetary_value-G07G05gY.js";import"./assert-B11BgmXM.js";import"./bigint-DiV2x33h.js";import"./data-D5p7UK42.js";import"./missing_element_error-BIT--q2G.js";import"./wallet_address-DiWe8W0n.js";import"./array_buffer-BrH4NOGl.js";import"./base64-Cs6zZcIo.js";import"./unimplemented_error--qiu5jWk.js";import"./url-dt6vXsS3.js";import"./copy_tagged_base64-DQp2PDg5.js";import"./inline-CYR5u-D3.js";import"./now_provider-CzEuiO7J.js";import"./higher_order-BCKgBdih.js";import"./check_circle_filled-B6Sut2lV.js";import"./svg_icon_base-B8zVWwnL.js";import"./copy-CU_l8Nbo.js";import"./path_resolver_provider-B_G0yp4x.js";import"./data_table-BiQdoL7h.js";import"./text-CEhLEmI-.js";import"./chevron_up-D9eLAgzb.js";import"./skeleton_content-CH2aYyTn.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-NIJnJKnu.js";import"./date_time_formatters_provider-BiaU2KTa.js";import"./locale_provider-D4HbO8u7.js";import"./number_text-B9hdqY8d.js";import"./number_formatters_provider-Ch-9Dh1T.js";import"./tagged_base64_text-CHiBLPbm.js";/* empty css               */import"./link-ljxhuagx.js";import"./roll_up_simple-CIMAw6Pv.js";import"./espresso_logo-Sfg6QlkJ.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
