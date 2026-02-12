import{j as o}from"./iframe-D4NG4Ygg.js";import{g as e,s as m}from"./data_table_shared-Bb385wYj.js";import{D as i}from"./data_provider-kgUlCSLb.js";import"./blocks-BLRm0qbp.js";import{P as s}from"./nodes-DdUtUYCE.js";import{m as n,i as p}from"./functional-Ci6o84Cp.js";import"./string-DoEjSKSD.js";import"./validator-BLy62hcp.js";import{T as l}from"./tagged_base64-CUYa8gnG.js";import{T as c}from"./transaction_summary_data_table-D9qQoFjZ.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-C-kTbQMi.js";import"./index-CN5LEFBF.js";import"./index-vB25Cpb6.js";import"./client-jiXVFmGw.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOfgw7mk.js";import"./wallet_address-BEIvL2Xd.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./unimplemented_error-CUVVCP1k.js";import"./url-fXESVLgZ.js";import"./copy_tagged_base64-DvU1k3hI.js";import"./inline-BdgexMR_.js";import"./now_provider-DEocB4vj.js";import"./higher_order-BVplWATc.js";import"./check_circle_filled-BEqZoCaN.js";import"./svg_icon_base-D3FfKTtS.js";import"./copy-efENwpca.js";import"./path_resolver_provider-T-F4e6m2.js";import"./data_table-dLKW4ONu.js";import"./text-CEhLEmI-.js";import"./chevron_up-DnyZ5qB_.js";import"./skeleton_content-Ot69JtSC.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-fOLyOuvc.js";import"./date_time_formatters_provider-D_NikJXM.js";import"./locale_provider-y_w6A6F5.js";import"./number_text-CGho1SjB.js";import"./number_formatters_provider-CV8eEq8L.js";import"./tagged_base64_text-DCRL9Rv3.js";/* empty css               */import"./link-BCQBx_Zl.js";import"./roll_up_simple-mT_vqy_G.js";import"./espresso-BnLvrtO7.js";import"./espresso_logo-D3A2VT0-.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
