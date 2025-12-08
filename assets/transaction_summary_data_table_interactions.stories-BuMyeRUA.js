import{j as o}from"./iframe-C-FY04Dt.js";import{D as e}from"./loading_provider-DnAejYMo.js";import"./date_time_formatters_provider-B-vZWfoJ.js";import"./locale_provider-BEfBJ-G2.js";import"./page_path_provider-BLt1qKxU.js";import"./now_provider-CdVpNbMd.js";import"./number_formatters_provider-Cj_9aXLE.js";import"./path_resolver_provider-DSNRN_OB.js";import{g as m,s as i}from"./data_table_shared-BzxzO9_U.js";import"./blocks-rY6BnBSU.js";import{P as s}from"./nodes-BtP9A9m5.js";import{m as n,i as p}from"./functional-DLuq-Zgx.js";import"./string-DO2hqbbz.js";import"./validator-DiMZuNkp.js";import{T as l}from"./tagged_base64-DlPC3yRR.js";import{a as c}from"./transaction_summary_data_table-BOxAFHE_.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-mJyUse9Y.js";import"./index-1NFWsmuN.js";import"./index-CGPMUsLj.js";import"./client-DG11ClFy.js";import"./monetary_value-CGCIrnLJ.js";import"./assert-B20_bgky.js";import"./bigint-Rw5otYDY.js";import"./data-QnfQTY7I.js";import"./wallet_address-cs0DJHAB.js";import"./array_buffer-DYdk84gS.js";import"./base64-Dpbg5EzT.js";import"./url-BkzmLfUb.js";import"./skeleton_content-BTav3GN9.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-OfjfjW38.js";import"./higher_order-BZ-GvUz5.js";import"./check_circle_filled-Dw0Z14xA.js";import"./svg_icon_base-CdfmCcAh.js";import"./copy-ClB3np3W.js";/* empty css               */import"./date_time_text-h7ay6K-e.js";import"./number_text-Dfg5k-Tp.js";import"./tagged_base64_text-C7-ll7v4.js";import"./text-CEhLEmI-.js";import"./data_table-DmCU9zKE.js";import"./typography-DKmexolR.js";import"./chevron_up-Ke2o9v55.js";import"./link-B72a8BNx.js";import"./roll_up_simple-Dm69T6_h.js";import"./espresso_logo-OVqKyvu-.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:w},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const ct=["Interactions"];export{a as Interactions,ct as __namedExportsOrder,lt as default};
