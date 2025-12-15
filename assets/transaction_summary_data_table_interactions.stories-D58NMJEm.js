import{j as o}from"./iframe-BQJVLOru.js";import{D as e}from"./loading_provider-Ch6GRO2a.js";import"./date_time_formatters_provider-BY4kdJV8.js";import"./locale_provider-pDxAzo83.js";import"./page_path_provider-DhmC-klQ.js";import"./now_provider-40HeobFn.js";import"./number_formatters_provider-CsOclp8o.js";import"./path_resolver_provider-DQcp-a-t.js";import{g as m,s as i}from"./data_table_shared-DvIHuude.js";import"./blocks-CuN_SkNp.js";import{P as s}from"./nodes-BW3vnLyv.js";import{m as n,i as p}from"./functional-CSbS9XJ4.js";import"./string-BQNQEiqR.js";import"./validator-9Zars6fs.js";import{T as l}from"./tagged_base64-CLbDmqUB.js";import{a as c}from"./transaction_summary_data_table-BPfXsCR-.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-BnwdB3jq.js";import"./index-CgcV4qXZ.js";import"./index-B0i1z4Ao.js";import"./client-gupz7Hhc.js";import"./monetary_value-CBH2RXSq.js";import"./assert-B11BgmXM.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./wallet_address-B7hVNXuP.js";import"./array_buffer-C6cnUoAD.js";import"./base64-Pz9_wEqE.js";import"./url-YePslpKX.js";import"./skeleton_content-Ql-lpo3S.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-DcUDNJt9.js";import"./higher_order-CGGGWKBx.js";import"./check_circle_filled-BBNFWEKP.js";import"./svg_icon_base-ClkAJAYe.js";import"./copy-dqXCVCBe.js";/* empty css               */import"./date_time_text-DVcFOhyI.js";import"./number_text-B_bUxGq2.js";import"./tagged_base64_text-Bjj5jXV2.js";import"./text-CEhLEmI-.js";import"./data_table-C_bezsQL.js";import"./typography-BobbvlA3.js";import"./chevron_up-6F1foQVT.js";import"./link-BZb4n-kD.js";import"./roll_up_simple-GOmK4zZX.js";import"./espresso_logo-1Ww7O42p.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:w},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
