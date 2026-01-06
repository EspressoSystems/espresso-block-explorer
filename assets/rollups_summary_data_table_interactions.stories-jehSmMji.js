import{j as e}from"./iframe-B-iMvdD4.js";import{D as o}from"./loading_provider-DGgAz7Nh.js";import"./date_time_formatters_provider-DwQmISaS.js";import"./locale_provider-Bknh0OHR.js";import"./page_path_provider-DWGnqofr.js";import"./now_provider-D9QH_F6_.js";import"./number_formatters_provider-C7OuKrqX.js";import"./path_resolver_provider-DTKqJOJp.js";import{g as m,s}from"./data_table_shared-CZJdHrGa.js";import{m as i,i as p}from"./functional-aFFbciHe.js";import{a as n}from"./roll_ups_summary_data_table-vjpS0Xfv.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-OKxsuYgY.js";import"./index-C2Py61xS.js";import"./index-BPkPZEbx.js";import"./client-BRFImQn1.js";import"./skeleton_content-v3SVavGm.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-BjwVE4fU.js";import"./text-CEhLEmI-.js";import"./data_table-DdZ_O9RT.js";import"./typography-12nFQ59z.js";import"./higher_order-p8JWl9JO.js";import"./chevron_up-CWaJ9sme.js";import"./svg_icon_base-BLNI1CYc.js";import"./link-D6NAia8b.js";import"./roll_up_simple-DsDsHEqp.js";import"./espresso_logo-BW9ir_Mj.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
