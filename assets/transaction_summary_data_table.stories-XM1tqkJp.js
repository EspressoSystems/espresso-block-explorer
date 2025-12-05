import{j as o}from"./iframe-DIKNrIIb.js";import{D as e}from"./loading_provider-Dn9ytlaz.js";import"./date_time_formatters_provider-DhcWWpu8.js";import"./locale_provider-DYOAFLcG.js";import"./page_path_provider-B1N-ENWh.js";import"./now_provider-DNU3NT7E.js";import"./number_formatters_provider-CoB2HbbC.js";import"./path_resolver_provider-D_k7zmI5.js";import{g as m,s as i}from"./data_table_shared-CgHw2KBb.js";import"./blocks-D62ayDG_.js";import{P as s}from"./nodes-BtP9A9m5.js";import{m as n,i as p}from"./functional-DLuq-Zgx.js";import"./string-DO2hqbbz.js";import"./validator-DiMZuNkp.js";import{T as l}from"./tagged_base64-DlPC3yRR.js";import{a as c}from"./transaction_summary_data_table-zrhANSjQ.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-PYvwRhAE.js";import"./index-B1u9hlBx.js";import"./index-C8ROo_QO.js";import"./client-Cgb01xwx.js";import"./monetary_value-CGCIrnLJ.js";import"./assert-B20_bgky.js";import"./bigint-Rw5otYDY.js";import"./data-QnfQTY7I.js";import"./wallet_address-cs0DJHAB.js";import"./array_buffer-DYdk84gS.js";import"./base64-Dpbg5EzT.js";import"./url-BkzmLfUb.js";import"./skeleton_content-DoayltBs.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-DrvH4bvD.js";import"./higher_order-CERhs-Yx.js";import"./check_circle_filled-B7jxOVSh.js";import"./svg_icon_base-CJsibPKU.js";import"./copy-CnbsWkwa.js";/* empty css               */import"./date_time_text-Di9xHhdz.js";import"./number_text-C_D0_0Sh.js";import"./tagged_base64_text-DaoCGQRV.js";import"./text-CEhLEmI-.js";import"./data_table-D7kIY5bn.js";import"./typography-C-u2xTwd.js";import"./chevron_up-BShDt5bd.js";import"./link-BA2MO7y4.js";import"./roll_up_simple-D_DPRQ3W.js";import"./espresso_logo-B5uM5svJ.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},T=new s,d=Array.from(n(p(20),t=>({hash:new l("TxHash",T.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:d},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const ct=["TransactionSummaryDataTable"];export{a as TransactionSummaryDataTable,ct as __namedExportsOrder,lt as default};
