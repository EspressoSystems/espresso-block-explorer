import{j as o}from"./iframe-CvdxTlUs.js";import{D as e}from"./loading_provider-Cmr501Z2.js";import"./date_time_formatters_provider-BKuJ0hEW.js";import"./locale_provider-Dxagrfa_.js";import"./page_path_provider-YGSPONyz.js";import"./now_provider-Bt5H53_t.js";import"./number_formatters_provider-D6bXYiGi.js";import"./path_resolver_provider-CjPcJbFk.js";import{g as m,s as i}from"./data_table_shared-BuJwngwM.js";import"./blocks-l6gLalHZ.js";import{P as s}from"./nodes-BtP9A9m5.js";import{m as n,i as p}from"./functional-DLuq-Zgx.js";import"./string-DO2hqbbz.js";import"./validator-DiMZuNkp.js";import{T as l}from"./tagged_base64-DlPC3yRR.js";import{a as c}from"./transaction_summary_data_table-DfEQXkJn.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-CXCGEuUy.js";import"./index-CVOp5-IZ.js";import"./index-CWvyjRcX.js";import"./client-CUWSojTA.js";import"./monetary_value-CGCIrnLJ.js";import"./assert-B20_bgky.js";import"./bigint-Rw5otYDY.js";import"./data-QnfQTY7I.js";import"./wallet_address-cs0DJHAB.js";import"./array_buffer-DYdk84gS.js";import"./base64-Dpbg5EzT.js";import"./url-BkzmLfUb.js";import"./skeleton_content-CniyB1k2.js";import"./transaction_summary-_-RUzodv.js";import"./copy_button-D0jzV1TE.js";import"./higher_order-D3cZvTNS.js";import"./check_circle_filled-DxQNnYSi.js";import"./svg_icon_base-CPzfBOG-.js";import"./copy-D9JuLAn3.js";/* empty css               */import"./date_time_text-Ts-vL5DY.js";import"./number_text-C6OVBCh4.js";import"./tagged_base64_text-DOpV7jG_.js";import"./text-CEhLEmI-.js";import"./data_table-8sqNDofv.js";import"./typography-CiO7wglO.js";import"./chevron_up-D6bEtNGN.js";import"./link-XNPG_srd.js";import"./roll_up_simple-BSw5Sk8J.js";import"./espresso_logo-CV3VxBSX.js";const u=t=>o.jsx(e.Provider,{value:t.transactionSummaries,children:o.jsx(c,{})}),lt={title:"components/Data/Transaction Summary Data Table/Interactions",component:u,args:{transactionSummaries:[]},argTypes:{transactionSummaries:{control:"object"}}},d=new s,w=Array.from(n(p(20),t=>({hash:new l("TxHash",d.fillBytes(32)),rollups:[1],block:t,offset:t,time:new Date(Date.now()+t*1e3)}))),a={args:{transactionSummaries:w},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await i(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
