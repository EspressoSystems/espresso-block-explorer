import{j as o}from"./iframe-Cy4xjHUd.js";import{g as m,s as e}from"./data_table_shared-B_Yog760.js";import{D as i}from"./data_provider-C2a9yIBm.js";import"./blocks-BLRm0qbp.js";import{P as s}from"./nodes-DdUtUYCE.js";import{m as n,i as p}from"./functional-Ci6o84Cp.js";import"./string-DoEjSKSD.js";import"./validator-BLy62hcp.js";import{T as l}from"./tagged_base64-CUYa8gnG.js";import{T as c}from"./transaction_summary_data_table-BO7zaBYC.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CpquZluQ.js";import"./index-CNB9H_RB.js";import"./index-CVn5SYyK.js";import"./client-Dx8UaD4v.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOfgw7mk.js";import"./wallet_address-BEIvL2Xd.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./unimplemented_error-CUVVCP1k.js";import"./url-fXESVLgZ.js";import"./copy_tagged_base64-GEPsF9PS.js";import"./inline-BvC8Efrs.js";import"./now_provider-CHx9qqh5.js";import"./higher_order-C1TCJwML.js";import"./check_circle_filled-ZiVLafnM.js";import"./svg_icon_base-B8oaxq1w.js";import"./copy-Dk9pXHjY.js";import"./path_resolver_provider-DY1Q2vvo.js";import"./data_table-yisRrbPa.js";import"./text-CEhLEmI-.js";import"./chevron_up-B-4vqEb2.js";import"./skeleton_content-D6wyLx9C.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-Dp6lUZ-6.js";import"./date_time_formatters_provider-Cj5Fa5jE.js";import"./locale_provider-CMdojvOr.js";import"./number_text-9BSNavKf.js";import"./number_formatters_provider-BzZn-8Pb.js";import"./tagged_base64_text-Cgaol6v1.js";/* empty css               */import"./link-CIexkyYy.js";import"./roll_up_simple-DqYsPXgw.js";import"./espresso-D1SbQFtr.js";import"./espresso_logo-BzPw5yex.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await e(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
