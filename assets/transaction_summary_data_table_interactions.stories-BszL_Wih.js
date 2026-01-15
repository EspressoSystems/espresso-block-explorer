import{j as o}from"./iframe-tCHaFxbc.js";import{g as e,s as m}from"./data_table_shared-DfqwVFXA.js";import{D as i}from"./data_provider-DMdJRqvD.js";import"./blocks-CTgVmMXl.js";import{P as s}from"./nodes-9I9c2iOF.js";import{m as n,i as p}from"./functional-DT4GooI6.js";import"./string-DoEjSKSD.js";import"./validator-nxDvP-Ih.js";import{T as l}from"./tagged_base64-YfeKLRN5.js";import{T as c}from"./transaction_summary_data_table-CsFvXepl.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CWaj5apr.js";import"./index-BZbs2elc.js";import"./index-Cuxb-LnB.js";import"./client-CM43emWd.js";import"./sleep-CW-vxfof.js";import"./monetary_value-CL5YFX4A.js";import"./assert-B11BgmXM.js";import"./bigint-CAUtzhcw.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOfgw7mk.js";import"./wallet_address-CE0HFCr5.js";import"./array_buffer-BGAdkDgu.js";import"./base64-_rmSu-kQ.js";import"./unimplemented_error-CUVVCP1k.js";import"./url-fXESVLgZ.js";import"./copy_tagged_base64-Bi6yN2a2.js";import"./inline-pKsM_oa5.js";import"./now_provider-CXG0hpMO.js";import"./higher_order-DFvPhzqR.js";import"./check_circle_filled-Ca5DCuxR.js";import"./svg_icon_base-DPHHXJOQ.js";import"./copy-DlwEnnyc.js";import"./path_resolver_provider-BBe-WNBo.js";import"./data_table-Dq9o6xGN.js";import"./text-CEhLEmI-.js";import"./chevron_up-CTacPNtY.js";import"./skeleton_content-B2LbE2wz.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-CKrQdG-h.js";import"./date_time_formatters_provider-sufyA7A-.js";import"./locale_provider-_bKYlsJ_.js";import"./number_text--8_8YX8A.js";import"./number_formatters_provider-BWiH38Om.js";import"./tagged_base64_text-CAUH6KHu.js";/* empty css               */import"./link-CDJ7miSy.js";import"./roll_up_simple-DtjSPPBi.js";import"./espresso-CRLpOLt6.js";import"./espresso_logo-DrrSZ2bC.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
