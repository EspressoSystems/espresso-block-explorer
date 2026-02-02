import{j as o}from"./iframe-lCBbYCEU.js";import{g as e,s as m}from"./data_table_shared-BXRhLs5m.js";import{D as i}from"./data_provider-JNzMXrDd.js";import"./blocks-XwzhN47T.js";import{P as s}from"./nodes--GPtCQfL.js";import{m as n,i as p}from"./functional-6Z2QHHX7.js";import"./string-DDfX_5jt.js";import"./validator-D7TaBp9n.js";import{T as l}from"./tagged_base64-Beas1ikT.js";import{T as c}from"./transaction_summary_data_table-B926Cnqr.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-DPsyTmJB.js";import"./index-DmtrKp90.js";import"./index-D-VaSj31.js";import"./client-BJ4MhKIH.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BgU0H56Y.js";import"./assert-B11BgmXM.js";import"./bigint-CrsQnXJW.js";import"./data-D5p7UK42.js";import"./missing_element_error-BIT--q2G.js";import"./wallet_address-DvLNDg5r.js";import"./array_buffer-BrH4NOGl.js";import"./base64-Cs6zZcIo.js";import"./unimplemented_error--qiu5jWk.js";import"./url-dt6vXsS3.js";import"./copy_tagged_base64-D9DlsC9t.js";import"./inline--kc1kPVO.js";import"./now_provider-BJlCMxdf.js";import"./higher_order-B24NaQsc.js";import"./check_circle_filled-ClNr7Qgn.js";import"./svg_icon_base-K_bknCBI.js";import"./copy-K-9mLOCa.js";import"./path_resolver_provider-BQqhBI_r.js";import"./data_table-CkewT-se.js";import"./text-CEhLEmI-.js";import"./chevron_up-JQFOFxdg.js";import"./skeleton_content-uXbBjkPV.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-PZluedtG.js";import"./date_time_formatters_provider-D_P0LLFh.js";import"./locale_provider-CivmyzXf.js";import"./number_text-C1feg6s_.js";import"./number_formatters_provider-n3Owoqke.js";import"./tagged_base64_text-DSPnvE07.js";/* empty css               */import"./link-BP2mDpKa.js";import"./roll_up_simple-B-EATf-a.js";import"./espresso_logo-CbXS2B1E.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
