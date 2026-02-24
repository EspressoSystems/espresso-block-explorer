import{j as o}from"./iframe-DONz925b.js";import{g as m,s as e}from"./data_table_shared-dtFfs00U.js";import{D as i}from"./data_provider-B7hXyE12.js";import"./blocks-BLRm0qbp.js";import{P as s}from"./nodes-DdUtUYCE.js";import{m as n,i as p}from"./functional-Ci6o84Cp.js";import"./string-DoEjSKSD.js";import"./validator-BLy62hcp.js";import{T as l}from"./tagged_base64-CUYa8gnG.js";import{T as c}from"./transaction_summary_data_table-BVcwftmX.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-T7f3m4YS.js";import"./index-BahpNmxe.js";import"./index-DP8VdHF8.js";import"./client-BqS3t1h9.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOfgw7mk.js";import"./wallet_address-BEIvL2Xd.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./unimplemented_error-CUVVCP1k.js";import"./url-fXESVLgZ.js";import"./copy_tagged_base64-CMglVtFf.js";import"./inline-C43_HtmX.js";import"./now_provider-BpiTFYMl.js";import"./higher_order-CQdCMXOf.js";import"./check_circle_filled-B3XoOe3O.js";import"./svg_icon_base-DRdIw45a.js";import"./copy-BA4QCH76.js";import"./path_resolver_provider-C4oMFhL0.js";import"./data_table-CChIVYOJ.js";import"./text-CEhLEmI-.js";import"./chevron_up-DcNHN7qS.js";import"./skeleton_content-CmSVOojS.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-ClxFvW6d.js";import"./date_time_formatters_provider-lVIyZ2uI.js";import"./locale_provider-BEGA8X2W.js";import"./number_text-CTQz255v.js";import"./number_formatters_provider-CWOPNhEp.js";import"./tagged_base64_text-BHRO1a6t.js";/* empty css               */import"./link-CwgepKMi.js";import"./roll_up_simple-Bkr_BJpx.js";import"./espresso-C9KVqmPG.js";import"./espresso_logo-Do-NOkwB.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await e(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const ut=["TransactionSummaryDataTable"];export{a as TransactionSummaryDataTable,ut as __namedExportsOrder,ct as default};
