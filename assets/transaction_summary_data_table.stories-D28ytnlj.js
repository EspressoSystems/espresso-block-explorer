import{j as o}from"./iframe-DRi1LiY1.js";import{g as m,s as e}from"./data_table_shared-BONWvbUw.js";import{D as i}from"./data_provider-BEXgs6IU.js";import"./blocks-BLRm0qbp.js";import{P as s}from"./nodes-DdUtUYCE.js";import{m as n,i as p}from"./functional-Ci6o84Cp.js";import"./string-DoEjSKSD.js";import"./validator-BLy62hcp.js";import{T as l}from"./tagged_base64-CUYa8gnG.js";import{T as c}from"./transaction_summary_data_table-CTI2JBBE.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-DG3gU5wN.js";import"./index-C93YOJ5V.js";import"./index-CKqPkkhs.js";import"./client-DZXhQAJG.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOfgw7mk.js";import"./wallet_address-BEIvL2Xd.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./unimplemented_error-CUVVCP1k.js";import"./url-fXESVLgZ.js";import"./copy_tagged_base64-kTaOxpn6.js";import"./inline-BkKFNAeD.js";import"./now_provider-DEU80TI-.js";import"./higher_order-DchKpsaa.js";import"./check_circle_filled-D3-wVSyf.js";import"./svg_icon_base-DRus6yG1.js";import"./copy-BKDlVIrr.js";import"./path_resolver_provider-BU3haTZx.js";import"./data_table-DWXjJZWb.js";import"./text-CEhLEmI-.js";import"./chevron_up-CIM7Ene_.js";import"./skeleton_content-D6bR3BKC.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-Bg02kt8U.js";import"./date_time_formatters_provider-DrMqCwD5.js";import"./locale_provider-CADKL3Zh.js";import"./number_text-ohwb6YDX.js";import"./number_formatters_provider-DrWfDPcd.js";import"./tagged_base64_text-DkwvBY5G.js";/* empty css               */import"./link-w3ej4rcj.js";import"./roll_up_simple-B6j2wmQU.js";import"./espresso-Bhre11Gm.js";import"./espresso_logo-C191vZ3i.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await e(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
