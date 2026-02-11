import{j as o}from"./iframe-0IiCprxV.js";import{g as m,s as e}from"./data_table_shared-BkouezgV.js";import{D as i}from"./data_provider-CWMfMatq.js";import"./blocks-BLRm0qbp.js";import{P as s}from"./nodes-DdUtUYCE.js";import{m as n,i as p}from"./functional-Ci6o84Cp.js";import"./string-DoEjSKSD.js";import"./validator-BLy62hcp.js";import{T as l}from"./tagged_base64-CUYa8gnG.js";import{T as c}from"./transaction_summary_data_table-Ub2ze3YM.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Dq9zfbBo.js";import"./index-BeNat70R.js";import"./index-B092DBvd.js";import"./client-VXCbC8Sb.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOfgw7mk.js";import"./wallet_address-BEIvL2Xd.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./unimplemented_error-CUVVCP1k.js";import"./url-fXESVLgZ.js";import"./copy_tagged_base64-Bhl3jNqK.js";import"./inline-Ci-_t6oe.js";import"./now_provider-B36jZJBE.js";import"./higher_order-TwrjIOhv.js";import"./check_circle_filled-CzKT_QrB.js";import"./svg_icon_base-BV-tSSkW.js";import"./copy-CsUs9R1p.js";import"./path_resolver_provider-Cg0EKHki.js";import"./data_table-Cn2tzd49.js";import"./text-CEhLEmI-.js";import"./chevron_up-BbyjN7ne.js";import"./skeleton_content-B8Z0lfuZ.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-DQ2jkkh7.js";import"./date_time_formatters_provider-CuU_yvyW.js";import"./locale_provider-D_MD1PN6.js";import"./number_text-Dnw2NraI.js";import"./number_formatters_provider-CCuGt-nv.js";import"./tagged_base64_text-DdFDFtZy.js";/* empty css               */import"./link-DAOUXD10.js";import"./roll_up_simple-NWZcmFc8.js";import"./espresso-BrWMfKnl.js";import"./espresso_logo-C19n0o0c.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await e(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
