import{j as o}from"./iframe-DERpcsaj.js";import{D as e}from"./loading_provider-DWAOa2Po.js";import"./date_time_formatters_provider-4OV54txv.js";import"./locale_provider-BSCycvT5.js";import"./page_path_provider-CdVsPBlv.js";import"./now_provider-Du-h2Rp4.js";import"./number_formatters_provider-CAdhGcCB.js";import"./path_resolver_provider-yTnYQJl0.js";import{g as m,s as i}from"./data_table_shared-BEdyb-Il.js";import"./blocks-D-RxNLhz.js";import{P as s}from"./nodes-BGjGUOjj.js";import{m as n,i as p}from"./functional-AkqJadlP.js";import"./string-BMw5G0Eo.js";import"./validator-CIjtoNtH.js";import{T as l}from"./tagged_base64-DQyXh8_2.js";import{a as c}from"./transaction_summary_data_table-BlkRXzkS.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./unimplemented_error-Bu4XFSEf.js";import"./react.esm-BCrxck9h.js";import"./index-Blc0c5dJ.js";import"./index-BMZNw6o_.js";import"./client-BRIjTmLC.js";import"./monetary_value-DtPxvzZx.js";import"./assert-B20_bgky.js";import"./bigint-D18ZzuZl.js";import"./data-QnfQTY7I.js";import"./wallet_address-SfsM8dHX.js";import"./array_buffer-CQ8t_IxW.js";import"./base64-CraqfgLB.js";import"./url-D77M_m7j.js";import"./skeleton_content-D1PJ_eX5.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-Bml6zmCr.js";import"./higher_order-DzHtQVvV.js";import"./check_circle_filled-DonIuhOn.js";import"./svg_icon_base-BSoegY8q.js";import"./copy-G-i-gDej.js";/* empty css               */import"./date_time_text-xQ32h6XM.js";import"./number_text-CWqYRbqG.js";import"./tagged_base64_text-BoQvMWTe.js";import"./text-CEhLEmI-.js";import"./data_table-Cz-rzykX.js";import"./typography-Dj8C4yvB.js";import"./chevron_up-D1pFdZoM.js";import"./link-Ci1XeN4i.js";import"./roll_up_simple-Bn8vWnxL.js";import"./espresso_logo-BqJYeSBr.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:w},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
