import{j as e}from"./iframe-ChCxfwos.js";import{g as o,s as m}from"./data_table_shared-CCLNRxh2.js";import{D as s}from"./data_provider-DFHjvLMD.js";import{m as i,i as n}from"./functional-CHI4evRY.js";import{R as p}from"./roll_ups_summary_data_table-2DPikV4t.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Cz0XuZNv.js";import"./index-BgdMPv3v.js";import"./index-BfisTMic.js";import"./client-CG3cgWWz.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./path_resolver_provider-RMZHQ9FE.js";import"./data_table-XgBx71M4.js";import"./text-CEhLEmI-.js";import"./chevron_up-BXN0Q57t.js";import"./svg_icon_base-BBi7gb5S.js";import"./higher_order-d4YXWLIv.js";import"./skeleton_content-BRFTzvsa.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-VJGMQbGs.js";import"./number_formatters_provider-CYynOyj2.js";import"./locale_provider-5mesaRdn.js";import"./link-DK1gVj_6.js";import"./roll_up_simple-96EiflqN.js";import"./espresso-DlIYWwH8.js";import"./espresso_logo-CW0FvKcw.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
