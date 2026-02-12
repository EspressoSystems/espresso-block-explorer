import{j as o}from"./iframe-xhuVH5Ih.js";import{g as m,s as e}from"./data_table_shared-BQU5uM8O.js";import{D as i}from"./data_provider-CQiJ9dZf.js";import"./blocks-BLRm0qbp.js";import{P as s}from"./nodes-DdUtUYCE.js";import{m as n,i as p}from"./functional-Ci6o84Cp.js";import"./string-DoEjSKSD.js";import"./validator-BLy62hcp.js";import{T as l}from"./tagged_base64-CUYa8gnG.js";import{T as c}from"./transaction_summary_data_table-CpCGOhP-.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-jozmQJqH.js";import"./index-RzCqieok.js";import"./index-CovybvIM.js";import"./client-PzWQms9r.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOfgw7mk.js";import"./wallet_address-BEIvL2Xd.js";import"./array_buffer-DMedzaQw.js";import"./base64-Bp_idpg2.js";import"./unimplemented_error-CUVVCP1k.js";import"./url-fXESVLgZ.js";import"./copy_tagged_base64-BDoW6Lwp.js";import"./inline-MHcNUnUs.js";import"./now_provider-CmyY3F9O.js";import"./higher_order-Bdg3O_St.js";import"./check_circle_filled-p9-uDtAw.js";import"./svg_icon_base-BnZ40IBV.js";import"./copy-DqcgTqb3.js";import"./path_resolver_provider-Cp594lm0.js";import"./data_table-DPP4kqIA.js";import"./text-CEhLEmI-.js";import"./chevron_up-4fkmWFKv.js";import"./skeleton_content-DZ7VSVjZ.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-DKBOj9dd.js";import"./date_time_formatters_provider-C8B-TsDL.js";import"./locale_provider-CQ3v6PyC.js";import"./number_text-YH5W9FSg.js";import"./number_formatters_provider-BSQNp_UP.js";import"./tagged_base64_text-D3X-Z1QX.js";/* empty css               */import"./link-Do9ClAnV.js";import"./roll_up_simple-CxPggfwZ.js";import"./espresso-_f0I38LZ.js";import"./espresso_logo-DoYVcUpU.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await e(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
