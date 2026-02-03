import{j as o}from"./iframe-BisBQj4b.js";import{g as e,s as m}from"./data_table_shared-BVbvoHPP.js";import{D as i}from"./data_provider-DSZ9Vv_3.js";import"./blocks-DxW4BCgY.js";import{P as s}from"./nodes-DkqQpvmH.js";import{m as n,i as p}from"./functional-6Z2QHHX7.js";import"./string-DDfX_5jt.js";import"./validator-CdkOZxMl.js";import{T as l}from"./tagged_base64-ZlJISydJ.js";import{T as c}from"./transaction_summary_data_table-CDBoYCc8.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BWy4QzQt.js";import"./index-CqTTn5wO.js";import"./index-C-IjjtMy.js";import"./client-Dn8PDppJ.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BgU0H56Y.js";import"./assert-B11BgmXM.js";import"./bigint-CrsQnXJW.js";import"./data-D5p7UK42.js";import"./missing_element_error-BIT--q2G.js";import"./wallet_address-DHR3FL3i.js";import"./array_buffer-D3ACJkCk.js";import"./base64-GdO7PHhr.js";import"./unimplemented_error--qiu5jWk.js";import"./url-dt6vXsS3.js";import"./copy_tagged_base64---hokzT4.js";import"./inline-BgAnjhKo.js";import"./now_provider-BADpF5pN.js";import"./higher_order-B_D7TFYJ.js";import"./check_circle_filled-DGfSNt1o.js";import"./svg_icon_base-eIEhIJU_.js";import"./copy-B0isQiaQ.js";import"./path_resolver_provider-CkeKuk75.js";import"./data_table-fwnGyCF7.js";import"./text-CEhLEmI-.js";import"./chevron_up-CC90xocc.js";import"./skeleton_content-BxEnkJYy.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-CWBRTMWe.js";import"./date_time_formatters_provider-T4Gwii8n.js";import"./locale_provider-Cy9Qu1vd.js";import"./number_text-DzPmU_Wm.js";import"./number_formatters_provider-BbUevisL.js";import"./tagged_base64_text-BsrZb43h.js";/* empty css               */import"./link-C5aiC12C.js";import"./roll_up_simple-DPh-m7Fb.js";import"./espresso_logo-CqrIXm6U.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
