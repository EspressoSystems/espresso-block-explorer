import{j as o}from"./iframe-DVElLztL.js";import{g as e,s as m}from"./data_table_shared-BkcUiyDp.js";import{D as i}from"./data_provider-8bonweiP.js";import"./blocks-BLRm0qbp.js";import{P as s}from"./nodes-DdUtUYCE.js";import{m as n,i as p}from"./functional-Ci6o84Cp.js";import"./string-DoEjSKSD.js";import"./validator-BLy62hcp.js";import{T as l}from"./tagged_base64-CUYa8gnG.js";import{T as c}from"./transaction_summary_data_table-C-dQ532J.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-pmhZ34LS.js";import"./index-CBEmrpSc.js";import"./index-C0xT9PqR.js";import"./client-Dcf09WDq.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOfgw7mk.js";import"./wallet_address-BEIvL2Xd.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./unimplemented_error-CUVVCP1k.js";import"./url-fXESVLgZ.js";import"./copy_tagged_base64-GLGYR8f8.js";import"./inline-C0oXTFN4.js";import"./now_provider-CdcVy4pF.js";import"./higher_order-D3ayJwRx.js";import"./check_circle_filled-BQXSmJgu.js";import"./svg_icon_base-CkxnyFHT.js";import"./copy-DPJqZE1B.js";import"./path_resolver_provider-DBH0FUs2.js";import"./data_table-B4k9tCFn.js";import"./text-CEhLEmI-.js";import"./chevron_up-C0hUPjmj.js";import"./skeleton_content-CFCEKyZq.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-CvS8iW3y.js";import"./date_time_formatters_provider-cwztD3ji.js";import"./locale_provider-DQ-ADSEU.js";import"./number_text-Di5ybNHr.js";import"./number_formatters_provider-amKtj06S.js";import"./tagged_base64_text-iWIJ9zak.js";/* empty css               */import"./link-DAHaIVd3.js";import"./roll_up_simple-BmTsrBLt.js";import"./espresso-BfXbzjCW.js";import"./espresso_logo-C5OThuFR.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
