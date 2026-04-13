import{j as o}from"./iframe-DaQbwpKg.js";import{g as m,s as e}from"./data_table_shared-KriCJy-N.js";import{D as i}from"./data_provider-Urjmc4oX.js";import{m as p,i as s}from"./functional-BN9f4kvo.js";import{R as n}from"./roll_ups_summary_data_table-bffsBL7H.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BGTc2wHv.js";import"./index-Bzu4Q9_J.js";import"./index-BMvX1_G5.js";import"./client-DTTjU2yR.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-BDMPzd-5.js";import"./data_table-CUbkKUvM.js";import"./text-CEhLEmI-.js";import"./chevron_up-C8VviZ1S.js";import"./higher_order-B-9I1gLU.js";import"./circular_progress_indicator-DEGUc7sM.js";import"./container_loading-CIrdureV.js";import"./skeleton_content-DyjkIHid.js";import"./byte_size_text-ipFt3fsr.js";import"./number_formatters_provider-CcXSIvuI.js";import"./locale_provider-D3R0CJI7.js";import"./wallet_address_text-CqwLBR2A.js";import"./date_time_formatters_provider-CEA6JPej.js";/* empty css               */import"./date_time_text-CiNBQC5Z.js";import"./full_hex_text-Cac73Rm0.js";import"./array_buffer_hex-CckWFzk6.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./hex_text-BAI0PzpF.js";import"./money_text-CNPln5bU.js";import"./money_text_full-fYF8MyIy.js";import"./number_text-BqIrmfNw.js";import"./relative_time_since_date_text-CWZP_ccf.js";import"./tagged_base64_text-Mmk-wGJg.js";import"./time_text-DmW55R4T.js";import"./block_summary-CBGYsBbN.js";import"./data-DkoEaPI0.js";import"./link-COlrr4wN.js";import"./roll_up_simple-BeBeqTga.js";import"./espresso-8j5zM5mY.js";import"./x_icon-C35_i0U-.js";import"./twitter_icon-Dj6C_0cQ.js";import"./vertical_scroll-CEacRZkh.js";const l=t=>o.jsx(i.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),et={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await e(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
