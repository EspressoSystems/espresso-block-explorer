import{j as o}from"./iframe-DFUTgPQB.js";import{g as e,s as m}from"./data_table_shared-D1NwN3mD.js";import{D as i}from"./data_provider-xp9wZ2A1.js";import"./blocks-BLRm0qbp.js";import{P as s}from"./nodes-DdUtUYCE.js";import{m as n,i as p}from"./functional-Ci6o84Cp.js";import"./string-DoEjSKSD.js";import"./validator-BLy62hcp.js";import{T as l}from"./tagged_base64-CUYa8gnG.js";import{T as c}from"./transaction_summary_data_table-BQxZ4kFX.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CqlGwNOr.js";import"./index-DaW-g7vb.js";import"./index-hc1MaISu.js";import"./client-BReTPsvU.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOfgw7mk.js";import"./wallet_address-BEIvL2Xd.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./unimplemented_error-CUVVCP1k.js";import"./url-fXESVLgZ.js";import"./copy_tagged_base64-D1uMWam2.js";import"./inline-Bm3F58Fg.js";import"./now_provider-DzuFne6J.js";import"./higher_order-DKNKSq1q.js";import"./check_circle_filled-DKHf5ICZ.js";import"./svg_icon_base-CCv-kRqo.js";import"./copy-CXY7jyjd.js";import"./path_resolver_provider-5gBwoeK9.js";import"./data_table-B7WZpwEl.js";import"./text-CEhLEmI-.js";import"./chevron_up-DuX2aDGx.js";import"./skeleton_content-WZfPrkCA.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-C6447bpz.js";import"./date_time_formatters_provider-OVkj5-N5.js";import"./locale_provider-D7-IQ_iJ.js";import"./number_text--cH6Scsp.js";import"./number_formatters_provider-Dy59aJqz.js";import"./tagged_base64_text-loCOu9ik.js";/* empty css               */import"./link-CgJzIbgO.js";import"./roll_up_simple-DCGPkxya.js";import"./espresso-mI_kQW8e.js";import"./espresso_logo-BU1janGn.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
