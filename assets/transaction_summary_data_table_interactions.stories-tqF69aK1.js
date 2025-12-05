import{j as o}from"./iframe-DFfdKi-0.js";import{D as e}from"./loading_provider-da-Stdik.js";import"./date_time_formatters_provider-D1KuHasK.js";import"./locale_provider-BSfkAuIP.js";import"./page_path_provider-BLpKX2CS.js";import"./now_provider-Bg99-F95.js";import"./number_formatters_provider-BFBcbrkA.js";import"./path_resolver_provider-DZ-5eptY.js";import{g as m,s as i}from"./data_table_shared-DI1tcrfp.js";import"./blocks-2SbdhCgZ.js";import{P as s}from"./nodes-BtP9A9m5.js";import{m as n,i as p}from"./functional-DLuq-Zgx.js";import"./string-DO2hqbbz.js";import"./validator-DiMZuNkp.js";import{T as l}from"./tagged_base64-DlPC3yRR.js";import{a as c}from"./transaction_summary_data_table-CSB_kJkg.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-QcRRCiS6.js";import"./index-C5KUm6uC.js";import"./index-qjXQvvE7.js";import"./client-IBhBTdAB.js";import"./monetary_value-CGCIrnLJ.js";import"./assert-B20_bgky.js";import"./bigint-Rw5otYDY.js";import"./data-QnfQTY7I.js";import"./wallet_address-cs0DJHAB.js";import"./array_buffer-DYdk84gS.js";import"./base64-Dpbg5EzT.js";import"./url-BkzmLfUb.js";import"./skeleton_content-CLW3IdlQ.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-CNhoUW5a.js";import"./higher_order-CAFNA8md.js";import"./check_circle_filled-C8KuScJK.js";import"./svg_icon_base-Bysx7lQ6.js";import"./copy-Yrm6dGhz.js";/* empty css               */import"./date_time_text-Cno5hICi.js";import"./number_text-BThEIcq7.js";import"./tagged_base64_text-V3FlBX9h.js";import"./text-CEhLEmI-.js";import"./data_table-CacNGaVF.js";import"./typography-M3pkdhb1.js";import"./chevron_up-CgozpFm6.js";import"./link-DeuX5Kmo.js";import"./roll_up_simple-CWH2zN4V.js";import"./espresso_logo-BO65uRO3.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:w},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
