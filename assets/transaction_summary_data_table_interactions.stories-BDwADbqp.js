import{j as o}from"./iframe-FW1O3eUf.js";import{g as e,s as m}from"./data_table_shared-VaBLYEqt.js";import{D as i}from"./data_provider-BbqeYGia.js";import"./blocks-6yclG0ka.js";import{P as s}from"./nodes-B70Gne2-.js";import{m as n,i as p}from"./functional-DzI6oRAM.js";import"./string-BCb2Pt7Y.js";import"./validator-C0io6BAI.js";import{T as l}from"./tagged_base64-B_lPSlUf.js";import{T as c}from"./transaction_summary_data_table-DYfqB5GO.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CPYV7Nbv.js";import"./index-BMEX-Xo9.js";import"./index-CHh1lDEX.js";import"./client-DR6EZN8l.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DXbf4XhX.js";import"./assert-B11BgmXM.js";import"./bigint-DeSLcxHO.js";import"./data-D5p7UK42.js";import"./missing_element_error-D0dGm0KW.js";import"./wallet_address-BnrZuCWl.js";import"./array_buffer-DFcBajus.js";import"./base64-CqV3gweX.js";import"./unimplemented_error-BB_FSuj1.js";import"./url-CDyI1Tkc.js";import"./copy_tagged_base64-DvjPTFS7.js";import"./inline-BBMDYuCl.js";import"./now_provider-yzpWQ6ve.js";import"./higher_order-CZN8Z6mQ.js";import"./check_circle_filled-CwHJEwU6.js";import"./svg_icon_base-4ERQ15ko.js";import"./copy-CTHVe2vX.js";import"./path_resolver_provider-nbJvAjBm.js";import"./data_table-t1i8txp6.js";import"./text-CEhLEmI-.js";import"./chevron_up-B9MjSPlu.js";import"./skeleton_content-C2ZsUKe2.js";import"./transaction_summary-_-RUzodv.js";import"./date_time_text-CrmlPWV7.js";import"./date_time_formatters_provider-CpNhPCjr.js";import"./locale_provider-D1mYVGxJ.js";import"./number_text-DgAnb3aC.js";import"./number_formatters_provider-BUUmLBk_.js";import"./tagged_base64_text-_xODqK5j.js";/* empty css               */import"./link-WSxXw9tq.js";import"./roll_up_simple-DrEtVSWo.js";import"./espresso-OnZrmjo8.js";import"./espresso_logo-BaPS_vjc.js";const u=t=>o.jsx(i.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),ct={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,T=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:T},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await e(t)}),await r("sort all columns",async()=>{await m(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
