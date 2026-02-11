import{j as o}from"./iframe-B298lYzW.js";import{g as m,s as e}from"./data_table_shared-Bgoj8wt8.js";import{D as i}from"./data_provider-vKdZeY0D.js";import"./blocks-BLRm0qbp.js";import{P as s}from"./nodes-DdUtUYCE.js";import{m as n,i as p}from"./functional-Ci6o84Cp.js";import"./string-DoEjSKSD.js";import"./validator-BLy62hcp.js";import{T as l}from"./tagged_base64-CUYa8gnG.js";import{T as c}from"./transaction_summary_data_table-CR4p2iYQ.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BmlWp72S.js";import"./index-CiS3ONPk.js";import"./index-S2HY-myl.js";import"./client-CNu7C4Ux.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOfgw7mk.js";import"./wallet_address-BEIvL2Xd.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./unimplemented_error-CUVVCP1k.js";import"./url-fXESVLgZ.js";import"./copy_tagged_base64-CFQ3J3Jz.js";import"./inline-BRvRflL0.js";import"./now_provider-Bs88lXDN.js";import"./higher_order-B_g3tT7H.js";import"./check_circle_filled-tuFE-8sK.js";import"./svg_icon_base-CuicflMO.js";import"./copy-QJqx3jJn.js";import"./path_resolver_provider-Do-I3vWG.js";import"./data_table-BIdABvSr.js";import"./text-CEhLEmI-.js";import"./chevron_up-D6rlm-BP.js";import"./skeleton_content-CnaMDnBS.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-DosEKnJD.js";import"./date_time_formatters_provider-4ga6Ydx1.js";import"./locale_provider-COLCQzYC.js";import"./number_text-PJZIjD72.js";import"./number_formatters_provider-CrNZeYmu.js";import"./tagged_base64_text-1th--7UD.js";/* empty css               */import"./link-C4utITwA.js";import"./roll_up_simple-Ib8gEJgv.js";import"./espresso-zEcLPcjJ.js";import"./espresso_logo-C_pxVIEe.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await e(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
