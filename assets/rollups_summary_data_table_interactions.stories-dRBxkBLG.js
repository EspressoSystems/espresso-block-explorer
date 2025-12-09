import{j as e}from"./iframe-DxMCvlUh.js";import{D as o}from"./loading_provider-Df0mCD4_.js";import"./date_time_formatters_provider-DI9LZ6y4.js";import"./locale_provider-EJeatQlK.js";import"./page_path_provider-rK8gQ6lh.js";import"./now_provider-KL7TCSJM.js";import"./number_formatters_provider-DQjo9vlS.js";import"./path_resolver_provider-BxmbrlnP.js";import{g as m,s}from"./data_table_shared-D2I2V1o4.js";import{m as i,i as p}from"./functional-CSHHasco.js";import{a as n}from"./roll_ups_summary_data_table-ZGEcIM4c.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-CqVqGmm5.js";import"./index-S_Fpd5t-.js";import"./index-KSdcX99f.js";import"./client-BIN2nFOj.js";import"./skeleton_content-BfZgbbNq.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-DQRO7zl6.js";import"./text-CEhLEmI-.js";import"./data_table-pY2tn7I_.js";import"./typography-Cf3UQRAk.js";import"./higher_order-DagK1XCO.js";import"./chevron_up-DNEq2bw5.js";import"./svg_icon_base-BtviVFgm.js";import"./link-BXUaQY1C.js";import"./roll_up_simple-C24EKI4w.js";import"./espresso_logo-BNI1lgMS.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
