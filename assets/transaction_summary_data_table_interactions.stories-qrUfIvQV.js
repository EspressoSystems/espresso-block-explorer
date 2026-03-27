import{j as o}from"./iframe-Cvx6RpPY.js";import{g as e,s as m}from"./data_table_shared-D_GXYoPc.js";import{D as i}from"./data_provider-DuSHNFDm.js";import"./blocks-6yclG0ka.js";import{P as s}from"./nodes-B70Gne2-.js";import{m as n,i as p}from"./functional-DzI6oRAM.js";import"./string-BCb2Pt7Y.js";import"./validator-C0io6BAI.js";import{T as l}from"./tagged_base64-B_lPSlUf.js";import{T as c}from"./transaction_summary_data_table-CIv1aKiZ.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-DpAMl9g-.js";import"./index-DV0fPn1x.js";import"./index-CF-oR5Dv.js";import"./client-MqscF9bh.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DXbf4XhX.js";import"./assert-B11BgmXM.js";import"./bigint-DeSLcxHO.js";import"./data-D5p7UK42.js";import"./missing_element_error-D0dGm0KW.js";import"./wallet_address-BnrZuCWl.js";import"./array_buffer-DFcBajus.js";import"./base64-CqV3gweX.js";import"./unimplemented_error-BB_FSuj1.js";import"./url-CDyI1Tkc.js";import"./copy_tagged_base64-kYpiTUy7.js";import"./inline-C4QibOpQ.js";import"./now_provider-C_TnA9uy.js";import"./higher_order-CcpOgoeh.js";import"./check_circle_filled-l-VtYo1v.js";import"./svg_icon_base-CJF1g_tc.js";import"./copy-CUWUjZqu.js";import"./path_resolver_provider-4NfNH-Lz.js";import"./data_table-CdvI3_gP.js";import"./text-CEhLEmI-.js";import"./chevron_up-bnQmtD7Q.js";import"./skeleton_content-DsbU2c_Z.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-plZBolwB.js";import"./date_time_formatters_provider-DcUzUZDq.js";import"./locale_provider-D5aNHbGy.js";import"./number_text-6gO1h8MR.js";import"./number_formatters_provider-DSWMRQJW.js";import"./tagged_base64_text-BiKx3vV-.js";/* empty css               */import"./link-DLE7hRkE.js";import"./roll_up_simple-CLh6i9xI.js";import"./espresso-stnEA2eC.js";import"./espresso_logo-DxQbk5YS.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const ut=["Interactions"];export{a as Interactions,ut as __namedExportsOrder,ct as default};
