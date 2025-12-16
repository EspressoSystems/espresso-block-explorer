import{j as e}from"./iframe-NIO84YtG.js";import{D as o}from"./loading_provider-DKk4mEKX.js";import"./date_time_formatters_provider-DtoU_Lel.js";import"./locale_provider-BToOAThm.js";import"./page_path_provider-BsYrj1YB.js";import"./now_provider-DhUBwSdf.js";import"./number_formatters_provider-Cs1RR9ei.js";import"./path_resolver_provider-ozKsNWj3.js";import{g as m,s}from"./data_table_shared-k7YomRC9.js";import{m as i,i as p}from"./functional-aFFbciHe.js";import{a as n}from"./roll_ups_summary_data_table-D9VQYtOg.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-CmaPJcyU.js";import"./index-Ck50nEkD.js";import"./index-C4dssNlT.js";import"./client-CQBnCKjl.js";import"./skeleton_content-B0jttthw.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-B6VPapgb.js";import"./text-CEhLEmI-.js";import"./data_table-ChVJ73c8.js";import"./typography-knZYGk3h.js";import"./higher_order-D0pXbT2F.js";import"./chevron_up-DObhM6Sz.js";import"./svg_icon_base-BtJbuG48.js";import"./link-BLp8HdBr.js";import"./roll_up_simple-p1AupOdx.js";import"./espresso_logo-ZjwkwXzk.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
