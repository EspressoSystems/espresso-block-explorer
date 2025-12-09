import{j as o}from"./iframe-BbF3Syj1.js";import{D as e}from"./loading_provider-DEd-giv5.js";import"./date_time_formatters_provider-BCl3flcb.js";import"./locale_provider-De2PuuUV.js";import"./page_path_provider-DFntaqal.js";import"./now_provider-B6bWrODL.js";import"./number_formatters_provider-DOen9m4S.js";import"./path_resolver_provider-rPfG7hHk.js";import{g as m,s as i}from"./data_table_shared-BEWASsEA.js";import"./blocks-P1waaH9F.js";import{P as s}from"./nodes-DkeEh4bp.js";import{m as n,i as p}from"./functional-CRC6BLve.js";import"./string-BMw5G0Eo.js";import"./validator-Bu3t8B_u.js";import{T as l}from"./tagged_base64-DQyXh8_2.js";import{a as c}from"./transaction_summary_data_table-CN26qK6g.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./unimplemented_error-Bu4XFSEf.js";import"./react.esm-Cbvut28h.js";import"./index-8H9Cz35g.js";import"./index-CUKlM6e7.js";import"./client-BQV42wdX.js";import"./monetary_value-DtPxvzZx.js";import"./assert-B20_bgky.js";import"./bigint-D18ZzuZl.js";import"./data-QnfQTY7I.js";import"./wallet_address-CJdGkmLZ.js";import"./array_buffer-T9JUf6pH.js";import"./base64-CraqfgLB.js";import"./url-D77M_m7j.js";import"./skeleton_content-BRPUJFb-.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-XgccnUyj.js";import"./higher_order-P_eSrgQE.js";import"./check_circle_filled-BWA5Es7Z.js";import"./svg_icon_base-BTNiSFJX.js";import"./copy-CKx4zh30.js";/* empty css               */import"./date_time_text-DzqzJcq0.js";import"./number_text-DFd3FJlE.js";import"./tagged_base64_text-C_GjGHtj.js";import"./text-CEhLEmI-.js";import"./data_table-CEb_xGYK.js";import"./typography-B0b9ZxV3.js";import"./chevron_up-B0nn2pno.js";import"./link-BuygIwbt.js";import"./roll_up_simple-CbEwVM9Z.js";import"./espresso_logo-TfkgJlE2.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const ct=["TransactionSummaryDataTable"];export{a as TransactionSummaryDataTable,ct as __namedExportsOrder,lt as default};
