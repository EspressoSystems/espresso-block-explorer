import{j as e}from"./iframe-CMnlNZVY.js";import{D as o}from"./loading_provider-CDQmatE4.js";import"./date_time_formatters_provider-DBEnsNUl.js";import"./locale_provider-BdMkMFD6.js";import"./page_path_provider-BBjnTzQ1.js";import"./now_provider-Bm-WfiXb.js";import"./number_formatters_provider-fXsUJ3gc.js";import"./path_resolver_provider-CM-lLLot.js";import{g as m,s}from"./data_table_shared-Flr5xOHw.js";import{m as i,i as p}from"./functional-aFFbciHe.js";import{a as n}from"./roll_ups_summary_data_table-B5TtszMW.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-BeEbU39k.js";import"./index-6p_kJ8eY.js";import"./index-dWiu48WL.js";import"./client-CXPUPldC.js";import"./skeleton_content-Dg5AgUY7.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-D6vdtiOW.js";import"./text-CEhLEmI-.js";import"./data_table-CJ5guDsm.js";import"./typography-3_NTd_7n.js";import"./higher_order-CwufDn_N.js";import"./chevron_up-CxZ6ZQul.js";import"./svg_icon_base-DLdqNfMl.js";import"./link-Cr-ardMZ.js";import"./roll_up_simple-CvWkxo0i.js";import"./espresso_logo-DEnUOJwi.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    rollupSummaries
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
}`,...a.parameters?.docs?.source}}};const N=["Interactions"];export{a as Interactions,N as __namedExportsOrder,M as default};
