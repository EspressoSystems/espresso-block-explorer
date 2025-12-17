import{j as o}from"./iframe-CA0H6dFm.js";import{D as e}from"./loading_provider-Bop1FT1r.js";import"./date_time_formatters_provider-iQnZ9iG6.js";import"./locale_provider-Do7FCuk7.js";import"./page_path_provider-DyEC-PMZ.js";import"./now_provider-yxwAovoR.js";import"./number_formatters_provider-Dn_m9GFj.js";import"./path_resolver_provider-k_ObrSQz.js";import{g as m,s as i}from"./data_table_shared-CXzYYHr3.js";import"./blocks-DYXYUTef.js";import{P as s}from"./nodes-UGwKe3sl.js";import{m as n,i as p}from"./functional-aFFbciHe.js";import"./string-BQNQEiqR.js";import"./validator-CZmgkc-d.js";import{T as l}from"./tagged_base64-CLbDmqUB.js";import{a as c}from"./transaction_summary_data_table-BpPJ5SnU.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-B_UvOKDk.js";import"./index-DawEcZgu.js";import"./index-DI5NdN2T.js";import"./client-BnoBeERF.js";import"./monetary_value-CBH2RXSq.js";import"./assert-B11BgmXM.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./wallet_address-DTxp5ftj.js";import"./array_buffer-DJmzCn2r.js";import"./base64-Pz9_wEqE.js";import"./url-YePslpKX.js";import"./skeleton_content-BYfFOyG1.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-CtPx2g5K.js";import"./higher_order-dlQKFR8S.js";import"./check_circle_filled-D3H5up06.js";import"./svg_icon_base-CBYYQSYN.js";import"./copy-DDyiK6Oj.js";/* empty css               */import"./date_time_text-BNAE24nJ.js";import"./number_text-Bo37snxl.js";import"./tagged_base64_text-eYe5cH2c.js";import"./text-CEhLEmI-.js";import"./data_table-CZoEcMFa.js";import"./typography-BMAv5PTs.js";import"./chevron_up-CWMk1tu5.js";import"./link-CPQMPThB.js";import"./roll_up_simple-D_lKNGc9.js";import"./espresso_logo-Db1nD6QE.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:w},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
