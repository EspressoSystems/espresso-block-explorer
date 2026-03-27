import{j as e}from"./iframe-RrH5notm.js";import{g as o,s as m}from"./data_table_shared-DssNzi8S.js";import{D as s}from"./data_provider-CnI5ffrM.js";import{m as i,i as n}from"./functional-CHI4evRY.js";import{R as p}from"./roll_ups_summary_data_table-DNi3OGss.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-mGbqDEpr.js";import"./index-DyPC3jWh.js";import"./index-B30HYQ58.js";import"./client-opeFtPJh.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./path_resolver_provider-CGxT658b.js";import"./data_table-CpwQJm7B.js";import"./text-CEhLEmI-.js";import"./chevron_up-DIltLCUC.js";import"./svg_icon_base-n5AH4Zhh.js";import"./higher_order-Bm-4pUU4.js";import"./skeleton_content-DmqNHUTV.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-BiMC9TJ3.js";import"./number_formatters_provider-BWToNpc0.js";import"./locale_provider-Cyvsr7cz.js";import"./link-DqAZbzMw.js";import"./roll_up_simple-CnzgI2Ol.js";import"./espresso-DG00-6VA.js";import"./espresso_logo-C91YyoF-.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
