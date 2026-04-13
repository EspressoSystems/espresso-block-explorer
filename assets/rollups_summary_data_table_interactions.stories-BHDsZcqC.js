import{j as o}from"./iframe-C0Hnu7F5.js";import{g as m,s as e}from"./data_table_shared-DlV9N8XH.js";import{D as i}from"./data_provider-Cti-MZ1B.js";import{m as p,i as s}from"./functional-BN9f4kvo.js";import{R as n}from"./roll_ups_summary_data_table-DBeaIVYO.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BmvGHcn0.js";import"./index-CSmO33r6.js";import"./index-DEeGj3Zr.js";import"./client-Dgo_JQY_.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-CgYmj1Q9.js";import"./data_table-Bc2Y3FO7.js";import"./text-CEhLEmI-.js";import"./chevron_up-DNzirS0I.js";import"./higher_order-_6gYxibe.js";import"./circular_progress_indicator-C7NtlUw_.js";import"./container_loading-DfiAqqhd.js";import"./skeleton_content-BOn3R2xW.js";import"./byte_size_text-BSxBAPzi.js";import"./number_formatters_provider-Cxc9ljbf.js";import"./locale_provider-DiHDaUDA.js";import"./wallet_address_text-DncnO_z8.js";import"./date_time_formatters_provider-CfHgi1rZ.js";/* empty css               */import"./date_time_text-BYlmSoj7.js";import"./full_hex_text-Cac73Rm0.js";import"./array_buffer_hex-CckWFzk6.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./hex_text-Cz8JEBHx.js";import"./money_text-Sqeltofb.js";import"./money_text_full-xwpQIE19.js";import"./number_text-Cyj64pmv.js";import"./relative_time_since_date_text-5Vk5RJ1c.js";import"./tagged_base64_text-KFPcJOl9.js";import"./time_text-L0LlBiF3.js";import"./block_summary-CBGYsBbN.js";import"./data-DkoEaPI0.js";import"./link-BM_K7FwM.js";import"./roll_up_simple-BdUoL_Qb.js";import"./espresso-CS7UlZiC.js";import"./x_icon-f1IZuvpB.js";import"./twitter_icon-DOVsDg5z.js";import"./vertical_scroll-BD8vqH8Y.js";const l=t=>o.jsx(i.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),et={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await e(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const it=["Interactions"];export{r as Interactions,it as __namedExportsOrder,et as default};
