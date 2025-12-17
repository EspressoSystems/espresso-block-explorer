import{j as e}from"./iframe-BxVd9QhJ.js";import{D as o}from"./loading_provider-CCQwrYtN.js";import"./date_time_formatters_provider-6IxjHYrQ.js";import"./locale_provider-A_jZKLiE.js";import"./page_path_provider-DZsBij4v.js";import"./now_provider-RSgZaDSQ.js";import"./number_formatters_provider-opkF2gH_.js";import"./path_resolver_provider-BhfCU0xQ.js";import{g as m,s}from"./data_table_shared-C_uabt2T.js";import{m as i,i as p}from"./functional-aFFbciHe.js";import{a as n}from"./roll_ups_summary_data_table-DUyELz5r.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-BxFI8Oap.js";import"./index-Cj4vgk-l.js";import"./index-COF4ZVwN.js";import"./client-DZCpopPS.js";import"./skeleton_content-YVZISt7j.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-DKh0a-kQ.js";import"./text-CEhLEmI-.js";import"./data_table-CoGfiM9S.js";import"./typography-BUc9z9pd.js";import"./higher_order-DG5Lsi6K.js";import"./chevron_up-zhD7NoAx.js";import"./svg_icon_base-C9Bpn8DM.js";import"./link-DIO84S1a.js";import"./roll_up_simple-k0-LaSvE.js";import"./espresso_logo-Cwn4rNLC.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
