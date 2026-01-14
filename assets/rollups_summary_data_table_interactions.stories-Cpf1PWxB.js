import{j as e}from"./iframe-CCLKIoat.js";import{g as o,s as m}from"./data_table_shared-BUuDOTPB.js";import{D as s}from"./data_provider-BF5QLA6e.js";import{m as i,i as n}from"./functional-DsFqNm-o.js";import{R as l}from"./roll_ups_summary_data_table-D045rHYt.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-cZ1DOXl5.js";import"./index-D298oDv-.js";import"./index-BBD36RIg.js";import"./client-CZEMcj29.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-C-CQoB0e.js";import"./data_table-UR9ORkGf.js";import"./text-CEhLEmI-.js";import"./chevron_up-DUXgi73a.js";import"./svg_icon_base-BQe2kabo.js";import"./higher_order-DyFKxQfc.js";import"./skeleton_content-DNXiQAlC.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-BXbb_2Rl.js";import"./number_formatters_provider-3ltM0G6e.js";import"./locale_provider-K_0BCaCZ.js";import"./link-Dm9EQTEY.js";import"./roll_up_simple-CfS3FdB-.js";import"./espresso_logo-D4TLXJxY.js";const p=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(l,{})}),F={title:"components/Data/Rollups Summary Data Table/Interactions",component:p,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const G=["Interactions"];export{t as Interactions,G as __namedExportsOrder,F as default};
