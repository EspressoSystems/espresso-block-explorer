import{j as o}from"./iframe-CVKXv-Cv.js";import{g as e,s as m}from"./data_table_shared-Dg0xXIpH.js";import{D as i}from"./data_provider-DliWLU-N.js";import"./blocks-BLRm0qbp.js";import{P as s}from"./nodes-DdUtUYCE.js";import{m as n,i as p}from"./functional-Ci6o84Cp.js";import"./string-DoEjSKSD.js";import"./validator-BLy62hcp.js";import{T as l}from"./tagged_base64-CUYa8gnG.js";import{T as c}from"./transaction_summary_data_table-DR3YOkO3.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-wIl04LPn.js";import"./index-XY6BT7cC.js";import"./index-Ct7XCo7m.js";import"./client-BhZMZhyV.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOfgw7mk.js";import"./wallet_address-BEIvL2Xd.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./unimplemented_error-CUVVCP1k.js";import"./url-fXESVLgZ.js";import"./copy_tagged_base64-5oUWVkhJ.js";import"./inline-mkqERNbS.js";import"./now_provider-CSo9VQ4G.js";import"./higher_order-CtQuyS7n.js";import"./check_circle_filled-C_5JJyvp.js";import"./svg_icon_base-D4no40oI.js";import"./copy-_svnnwkd.js";import"./path_resolver_provider-CKt_cXiG.js";import"./data_table-CVBUwP1F.js";import"./text-CEhLEmI-.js";import"./chevron_up-DhBANYx5.js";import"./skeleton_content-B49VI20d.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-9trY_1aa.js";import"./date_time_formatters_provider-63KZ-fVJ.js";import"./locale_provider-Buk582ED.js";import"./number_text-BCP4vfA5.js";import"./number_formatters_provider-BU8dGkN7.js";import"./tagged_base64_text-DIda8KF0.js";/* empty css               */import"./link-jutSw9ZD.js";import"./roll_up_simple-CvWreHY6.js";import"./espresso-D7hHCnFI.js";import"./espresso_logo-BfqW0ykW.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
