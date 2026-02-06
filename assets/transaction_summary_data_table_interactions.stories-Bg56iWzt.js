import{j as o}from"./iframe-B98JvFlS.js";import{g as e,s as m}from"./data_table_shared-DxW_eoZf.js";import{D as i}from"./data_provider-3-u40w_S.js";import"./blocks-DxW4BCgY.js";import{P as s}from"./nodes-DkqQpvmH.js";import{m as n,i as p}from"./functional-6Z2QHHX7.js";import"./string-DDfX_5jt.js";import"./validator-CdkOZxMl.js";import{T as l}from"./tagged_base64-ZlJISydJ.js";import{T as c}from"./transaction_summary_data_table-BOBUFpWD.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Bzlau9Ck.js";import"./index-DzVgPpp9.js";import"./index-Def8Sx_B.js";import"./client-CE2IJ18h.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BgU0H56Y.js";import"./assert-B11BgmXM.js";import"./bigint-CrsQnXJW.js";import"./data-D5p7UK42.js";import"./missing_element_error-BIT--q2G.js";import"./wallet_address-DHR3FL3i.js";import"./array_buffer-D3ACJkCk.js";import"./base64-GdO7PHhr.js";import"./unimplemented_error--qiu5jWk.js";import"./url-dt6vXsS3.js";import"./copy_tagged_base64-DMA-sH4q.js";import"./inline-CoE879Bc.js";import"./now_provider-BOX7yRpC.js";import"./higher_order-DFW_Utmg.js";import"./check_circle_filled-BGn-E9bU.js";import"./svg_icon_base-CJ0J5j9p.js";import"./copy-Chp_emH-.js";import"./path_resolver_provider-G_S0-zyJ.js";import"./data_table-BX5e_VEt.js";import"./text-CEhLEmI-.js";import"./chevron_up-DqwUH8EF.js";import"./skeleton_content-CeIngfNJ.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-DxklR_a2.js";import"./date_time_formatters_provider-L5X9Fiw0.js";import"./locale_provider-YmKQyVQa.js";import"./number_text-DXEYwiPL.js";import"./number_formatters_provider-eJntoBts.js";import"./tagged_base64_text-uunfgkXS.js";/* empty css               */import"./link-mN7KWGba.js";import"./roll_up_simple-DNnR1IO9.js";import"./espresso_logo-BuA0cE0P.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
