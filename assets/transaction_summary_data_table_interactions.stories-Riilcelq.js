import{j as o}from"./iframe-I4yCP4NU.js";import{D as e}from"./loading_provider-CstATCXD.js";import"./date_time_formatters_provider-DnsUBTX8.js";import"./locale_provider-CErGmAbV.js";import"./page_path_provider-FUPkNIoK.js";import"./now_provider-BJMkyC0g.js";import"./number_formatters_provider-B4pMjwPi.js";import"./path_resolver_provider-C7oDnXbF.js";import{g as m,s as i}from"./data_table_shared-BAKP7gQ-.js";import"./blocks-BWBQzLKI.js";import{P as s}from"./nodes-BW3vnLyv.js";import{m as n,i as p}from"./functional-CSbS9XJ4.js";import"./string-BQNQEiqR.js";import"./validator-9Zars6fs.js";import{T as l}from"./tagged_base64-CLbDmqUB.js";import{a as c}from"./transaction_summary_data_table-B1R7Hato.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-CxeFvyvM.js";import"./index-CtCr44L0.js";import"./index-C5rye2NI.js";import"./client-CYItMId7.js";import"./monetary_value-CBH2RXSq.js";import"./assert-B11BgmXM.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./wallet_address-B7hVNXuP.js";import"./array_buffer-C6cnUoAD.js";import"./base64-Pz9_wEqE.js";import"./url-YePslpKX.js";import"./skeleton_content-D2wyeEsn.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-gUT264g6.js";import"./higher_order-mqQ14nIG.js";import"./check_circle_filled-6vpUhM8E.js";import"./svg_icon_base-FiNyuFYc.js";import"./copy-CF7cLfNz.js";/* empty css               */import"./date_time_text-CI8fzMqk.js";import"./number_text-B5Ox6wzX.js";import"./tagged_base64_text-CsiWtjb8.js";import"./text-CEhLEmI-.js";import"./data_table-BjO2HltM.js";import"./typography-C6Hxzndb.js";import"./chevron_up-COlPGcDD.js";import"./link-BcgA0920.js";import"./roll_up_simple-Dal5-OIX.js";import"./espresso_logo-Emh2xXD7.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:w},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
