import{j as o}from"./iframe-ClKDkTx9.js";import{D as e}from"./loading_provider-BA4zBxyH.js";import"./date_time_formatters_provider-Cf6wYALs.js";import"./locale_provider-DJPVjQlf.js";import"./page_path_provider-ZBtbZN9A.js";import"./now_provider-CbLkKTxk.js";import"./number_formatters_provider-Dzy7g4cY.js";import"./path_resolver_provider-DQmcKCeL.js";import{g as m,s as i}from"./data_table_shared-DgacbOuN.js";import"./blocks-BRbj-15H.js";import{P as s}from"./nodes-UGwKe3sl.js";import{m as n,i as p}from"./functional-aFFbciHe.js";import"./string-BQNQEiqR.js";import"./validator-CZmgkc-d.js";import{T as l}from"./tagged_base64-CLbDmqUB.js";import{a as c}from"./transaction_summary_data_table-DFXdn5Jo.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-Cykdo6lV.js";import"./index-GLakHcs0.js";import"./index-L2MXTyI-.js";import"./client-CcWLmDfD.js";import"./monetary_value-CBH2RXSq.js";import"./assert-B11BgmXM.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./wallet_address-DTxp5ftj.js";import"./array_buffer-DJmzCn2r.js";import"./base64-Pz9_wEqE.js";import"./url-YePslpKX.js";import"./skeleton_content-kY3mGp8K.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-DumrgIxC.js";import"./higher_order-DGDN5Dfc.js";import"./check_circle_filled-CuxB0CvJ.js";import"./svg_icon_base-Ik10Mkci.js";import"./copy-CB9E4g7X.js";/* empty css               */import"./date_time_text-BzpapEyn.js";import"./number_text-CYRmJkvB.js";import"./tagged_base64_text-BoJwIYKK.js";import"./text-CEhLEmI-.js";import"./data_table-CRQlXWgA.js";import"./typography-BXZmVxaS.js";import"./chevron_up-D7LcXd8N.js";import"./link-L8ZhC1Mm.js";import"./roll_up_simple-CmdD5KM8.js";import"./espresso_logo-BE-nd3vZ.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:w},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
