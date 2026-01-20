import{j as e}from"./iframe-B5yazBMa.js";import{g as o,s as m}from"./data_table_shared-CsXKyFGc.js";import{D as s}from"./data_provider-CBESNSYd.js";import{m as i,i as n}from"./functional-DT4GooI6.js";import{R as p}from"./roll_ups_summary_data_table-CfMy5O8f.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BxvuRqt7.js";import"./index-BxJ8R_BA.js";import"./index-BF6SAvto.js";import"./client-BmhTVXFr.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-BIv70dJ5.js";import"./data_table-TyxNtaAu.js";import"./text-CEhLEmI-.js";import"./chevron_up-BDq0EKiF.js";import"./svg_icon_base-Dpg1LSL1.js";import"./higher_order-BSTN8Q9z.js";import"./skeleton_content-Di70z-0k.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-B0ClmNgK.js";import"./number_formatters_provider-B-XsBDCo.js";import"./locale_provider-BWInepqb.js";import"./link-Dxs4z83q.js";import"./roll_up_simple-c7_tyfPm.js";import"./espresso-B5gCFGuO.js";import"./espresso_logo-vUXwbkla.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const J=["Interactions"];export{t as Interactions,J as __namedExportsOrder,G as default};
