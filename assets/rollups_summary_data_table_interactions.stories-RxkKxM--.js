import{j as e}from"./iframe-BtlXJKZ1.js";import{g as o,s as m}from"./data_table_shared-Dwg62EfB.js";import{D as s}from"./data_provider-DZfionCo.js";import{m as i,i as n}from"./functional-CHI4evRY.js";import{R as p}from"./roll_ups_summary_data_table-CgG601z9.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Bb7ebJnf.js";import"./index-DVf-yhbM.js";import"./index-CzfUxczt.js";import"./client-CdOtE264.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./path_resolver_provider-DFkOybrh.js";import"./data_table-DguU8lNy.js";import"./text-CEhLEmI-.js";import"./chevron_up-C63lzylG.js";import"./svg_icon_base-BHrQ2xhA.js";import"./higher_order-DrPNsCRC.js";import"./skeleton_content-C3wfAwRT.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-BdO7pZh2.js";import"./number_formatters_provider-uduEK5FV.js";import"./locale_provider-Ghcznv9j.js";import"./link-tL5mD4Oo.js";import"./roll_up_simple-Bjnm7bq7.js";import"./espresso-RSia6qf6.js";import"./espresso_logo-VJAzIWo1.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
