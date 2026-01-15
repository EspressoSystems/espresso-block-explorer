import{j as o}from"./iframe-ChMM8fie.js";import{g as m,s as e}from"./data_table_shared-D10kuCBF.js";import{D as i}from"./data_provider-DipucN8t.js";import"./blocks-CTgVmMXl.js";import{P as s}from"./nodes-9I9c2iOF.js";import{m as n,i as p}from"./functional-DT4GooI6.js";import"./string-DoEjSKSD.js";import"./validator-nxDvP-Ih.js";import{T as l}from"./tagged_base64-YfeKLRN5.js";import{T as c}from"./transaction_summary_data_table-C9mfoS5u.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CDELKqQ0.js";import"./index-B53Fy-CQ.js";import"./index-Cv4Z6q07.js";import"./client-laTrBQ9W.js";import"./sleep-CW-vxfof.js";import"./monetary_value-CL5YFX4A.js";import"./assert-B11BgmXM.js";import"./bigint-CAUtzhcw.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOfgw7mk.js";import"./wallet_address-CE0HFCr5.js";import"./array_buffer-BGAdkDgu.js";import"./base64-_rmSu-kQ.js";import"./unimplemented_error-CUVVCP1k.js";import"./url-fXESVLgZ.js";import"./copy_tagged_base64-BrmQTbhU.js";import"./inline-C5_Tbt8A.js";import"./now_provider-CCB05c4h.js";import"./higher_order-BDzlKa4m.js";import"./check_circle_filled-C0-R1RGO.js";import"./svg_icon_base-CS1Nu1nM.js";import"./copy-DOwzo494.js";import"./path_resolver_provider-Bi7OwYmA.js";import"./data_table-BhlvqEva.js";import"./text-CEhLEmI-.js";import"./chevron_up-4QltwyBf.js";import"./skeleton_content-D_9h32no.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-CsqteGv_.js";import"./date_time_formatters_provider-BWsAdsOr.js";import"./locale_provider--Ln2ac7i.js";import"./number_text-CahUOGB6.js";import"./number_formatters_provider-CudGGieU.js";import"./tagged_base64_text-DfwL_HLi.js";/* empty css               */import"./link-Cs7jL8in.js";import"./roll_up_simple-CnuekN6z.js";import"./espresso-CsXSlGY9.js";import"./espresso_logo-DVDi9sh1.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await e(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
