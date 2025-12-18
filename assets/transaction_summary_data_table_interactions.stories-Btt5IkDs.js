import{j as o}from"./iframe-CUSUi-ol.js";import{D as e}from"./loading_provider-DxXUP5j3.js";import"./date_time_formatters_provider-VX2lHb9g.js";import"./locale_provider-BxbKA3wd.js";import"./page_path_provider-DlC5aC3g.js";import"./now_provider-DcSrXJuC.js";import"./number_formatters_provider-DmpWQro_.js";import"./path_resolver_provider-B1crnTdb.js";import{g as m,s as i}from"./data_table_shared-C2gCq_Yc.js";import"./blocks-CHAE2YcB.js";import{P as s}from"./nodes-UGwKe3sl.js";import{m as n,i as p}from"./functional-aFFbciHe.js";import"./string-BQNQEiqR.js";import"./validator-CZmgkc-d.js";import{T as l}from"./tagged_base64-CLbDmqUB.js";import{a as c}from"./transaction_summary_data_table-Ce1hTqXE.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-CxCeA-0i.js";import"./index-BslH2gUQ.js";import"./index-BTx48-9-.js";import"./client-TzQjO8Ka.js";import"./monetary_value-B9zIXJUb.js";import"./assert-B11BgmXM.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./wallet_address-DTxp5ftj.js";import"./array_buffer-DJmzCn2r.js";import"./base64-Pz9_wEqE.js";import"./url-YePslpKX.js";import"./skeleton_content-BzNMtOGK.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-DSITBYtb.js";import"./higher_order-CE7HgP1S.js";import"./check_circle_filled-CKsYdq35.js";import"./svg_icon_base-HWbYxe0V.js";import"./copy-CKUBvaav.js";/* empty css               */import"./date_time_text-CeEXUMSd.js";import"./number_text-YBM4-nOg.js";import"./tagged_base64_text-DEKslrSb.js";import"./text-CEhLEmI-.js";import"./data_table-dcZ5G3R1.js";import"./typography-1SaDHsys.js";import"./chevron_up-BSdBbTnB.js";import"./link-DJhoy_in.js";import"./roll_up_simple-CrFg2cC3.js";import"./espresso_logo-BCac-AjN.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:w},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
