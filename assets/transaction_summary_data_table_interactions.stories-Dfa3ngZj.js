import{j as o}from"./iframe-B5yazBMa.js";import{g as e,s as m}from"./data_table_shared-CsXKyFGc.js";import{D as i}from"./data_provider-CBESNSYd.js";import"./blocks-CTgVmMXl.js";import{P as s}from"./nodes-9I9c2iOF.js";import{m as n,i as p}from"./functional-DT4GooI6.js";import"./string-DoEjSKSD.js";import"./validator-nxDvP-Ih.js";import{T as l}from"./tagged_base64-YfeKLRN5.js";import{T as c}from"./transaction_summary_data_table-Yj7WCyB3.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BxvuRqt7.js";import"./index-BxJ8R_BA.js";import"./index-BF6SAvto.js";import"./client-BmhTVXFr.js";import"./sleep-CW-vxfof.js";import"./monetary_value-CL5YFX4A.js";import"./assert-B11BgmXM.js";import"./bigint-CAUtzhcw.js";import"./data-D5p7UK42.js";import"./missing_element_error-BOfgw7mk.js";import"./wallet_address-CE0HFCr5.js";import"./array_buffer-BGAdkDgu.js";import"./base64-_rmSu-kQ.js";import"./unimplemented_error-CUVVCP1k.js";import"./url-fXESVLgZ.js";import"./copy_tagged_base64-BgumYZwl.js";import"./inline-VsFotXG0.js";import"./now_provider-CKP5Onif.js";import"./higher_order-BSTN8Q9z.js";import"./check_circle_filled-Cf1muq7p.js";import"./svg_icon_base-Dpg1LSL1.js";import"./copy-B-Iczg8i.js";import"./path_resolver_provider-BIv70dJ5.js";import"./data_table-TyxNtaAu.js";import"./text-CEhLEmI-.js";import"./chevron_up-BDq0EKiF.js";import"./skeleton_content-Di70z-0k.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-Dt7jas3i.js";import"./date_time_formatters_provider-BxCsegdJ.js";import"./locale_provider-BWInepqb.js";import"./number_text-B0ClmNgK.js";import"./number_formatters_provider-B-XsBDCo.js";import"./tagged_base64_text-BHpURdDI.js";/* empty css               */import"./link-Dxs4z83q.js";import"./roll_up_simple-c7_tyfPm.js";import"./espresso-B5gCFGuO.js";import"./espresso_logo-vUXwbkla.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
