import{j as o}from"./iframe-B8eqWRN6.js";import{D as e}from"./loading_provider-UILi0oHh.js";import"./date_time_formatters_provider-CHxfXojh.js";import"./locale_provider-CkkM0mjB.js";import"./page_path_provider-XienNpqp.js";import"./now_provider-DFrPQ9fr.js";import"./number_formatters_provider-CulVFl8b.js";import"./path_resolver_provider-DdGZMLHv.js";import{g as m,s as i}from"./data_table_shared-B18X-Zgo.js";import"./blocks-l18Mm_lv.js";import{P as s}from"./nodes-DkeEh4bp.js";import{m as n,i as p}from"./functional-CRC6BLve.js";import"./string-BMw5G0Eo.js";import"./validator-Bu3t8B_u.js";import{T as l}from"./tagged_base64-DQyXh8_2.js";import{a as c}from"./transaction_summary_data_table-CyavWDyD.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./unimplemented_error-Bu4XFSEf.js";import"./react.esm-D4O7I1bM.js";import"./index-CmUZj1kq.js";import"./index-EMxXJ5Sn.js";import"./client-sBu5a9uz.js";import"./monetary_value-DtPxvzZx.js";import"./assert-B20_bgky.js";import"./bigint-D18ZzuZl.js";import"./data-QnfQTY7I.js";import"./wallet_address-CJdGkmLZ.js";import"./array_buffer-T9JUf6pH.js";import"./base64-CraqfgLB.js";import"./url-D77M_m7j.js";import"./skeleton_content-CuoHXIQj.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-CcK8wkLR.js";import"./higher_order-r1uOk2qL.js";import"./check_circle_filled-BVVX_n5V.js";import"./svg_icon_base-CoeGQ4lo.js";import"./copy-Bzf9GLJM.js";/* empty css               */import"./date_time_text-BxVHbps2.js";import"./number_text-D4VvN4Vs.js";import"./tagged_base64_text-CY4V2M5a.js";import"./text-CEhLEmI-.js";import"./data_table--WiQFAS6.js";import"./typography-DJsfTh_U.js";import"./chevron_up-BTggqdTf.js";import"./link-BzLMVWby.js";import"./roll_up_simple-JGUsD13J.js";import"./espresso_logo-BAqkl7kW.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:w},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
