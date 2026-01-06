import{j as o}from"./iframe-B-iMvdD4.js";import{D as e}from"./loading_provider-DGgAz7Nh.js";import"./date_time_formatters_provider-DwQmISaS.js";import"./locale_provider-Bknh0OHR.js";import"./page_path_provider-DWGnqofr.js";import"./now_provider-D9QH_F6_.js";import"./number_formatters_provider-C7OuKrqX.js";import"./path_resolver_provider-DTKqJOJp.js";import{g as m,s as i}from"./data_table_shared-CZJdHrGa.js";import"./blocks-BstWny4x.js";import{P as s}from"./nodes-Bp4zkxYj.js";import{m as n,i as p}from"./functional-aFFbciHe.js";import"./string-BQNQEiqR.js";import"./validator-CNO3FRK_.js";import{T as l}from"./tagged_base64-D1knUC6u.js";import{a as c}from"./transaction_summary_data_table-BMRj69JX.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-OKxsuYgY.js";import"./index-C2Py61xS.js";import"./index-BPkPZEbx.js";import"./client-BRFImQn1.js";import"./monetary_value-B9zIXJUb.js";import"./assert-B11BgmXM.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./wallet_address-DTxp5ftj.js";import"./array_buffer-DJmzCn2r.js";import"./base64-Pz9_wEqE.js";import"./url-YePslpKX.js";import"./skeleton_content-v3SVavGm.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-ByWeuO8A.js";import"./higher_order-p8JWl9JO.js";import"./check_circle_filled-DPIQ4HbT.js";import"./svg_icon_base-BLNI1CYc.js";import"./copy-DlUw72_P.js";/* empty css               */import"./date_time_text-EU368kfm.js";import"./number_text-BjwVE4fU.js";import"./tagged_base64_text-DT1iuIo5.js";import"./text-CEhLEmI-.js";import"./data_table-DdZ_O9RT.js";import"./typography-12nFQ59z.js";import"./chevron_up-CWaJ9sme.js";import"./link-D6NAia8b.js";import"./roll_up_simple-DsDsHEqp.js";import"./espresso_logo-BW9ir_Mj.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:w},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
