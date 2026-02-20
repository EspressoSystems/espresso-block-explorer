import{j as o}from"./iframe-TrusCfP7.js";import{g as e,s as m}from"./data_table_shared-Zu3kLD10.js";import{D as i}from"./data_provider-DhSR8fHD.js";import"./blocks-BLRm0qbp.js";import{P as s}from"./nodes-DdUtUYCE.js";import{m as n,i as p}from"./functional-Ci6o84Cp.js";import"./string-DoEjSKSD.js";import"./validator-BLy62hcp.js";import{T as l}from"./tagged_base64-CUYa8gnG.js";import{T as c}from"./transaction_summary_data_table-JPKHa-Or.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-DPX_x2RN.js";import"./index-BLtf1UP9.js";import"./index-CmYdQwgm.js";import"./client-DjC4PwCD.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOfgw7mk.js";import"./wallet_address-BEIvL2Xd.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./unimplemented_error-CUVVCP1k.js";import"./url-fXESVLgZ.js";import"./copy_tagged_base64-DpN7Q40k.js";import"./inline-CfUsX7jX.js";import"./now_provider-C1ZXEB30.js";import"./higher_order-BaXXaYUD.js";import"./check_circle_filled-BJ3ravcz.js";import"./svg_icon_base-CMA4dtm_.js";import"./copy-VY-zqqlc.js";import"./path_resolver_provider-dVkTiHR-.js";import"./data_table-kzgFRMNa.js";import"./text-CEhLEmI-.js";import"./chevron_up-ChAy-4n9.js";import"./skeleton_content-DeKZZP6m.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-CeAneBD3.js";import"./date_time_formatters_provider-18E19bYy.js";import"./locale_provider-VmkWYhBv.js";import"./number_text-Dzzgw1-A.js";import"./number_formatters_provider-BjVNSDzq.js";import"./tagged_base64_text-DRDUlYqA.js";/* empty css               */import"./link-BLgksYwu.js";import"./roll_up_simple-DteaaT4J.js";import"./espresso-Bvz0ybyC.js";import"./espresso_logo-COd0OqzR.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
