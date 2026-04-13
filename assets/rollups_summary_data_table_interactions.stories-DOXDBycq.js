import{j as o}from"./iframe-BksmdVSd.js";import{g as m,s as e}from"./data_table_shared-CnW3WwKK.js";import{D as i}from"./data_provider-BRYRNXMl.js";import{m as p,i as s}from"./functional-BN9f4kvo.js";import{R as n}from"./roll_ups_summary_data_table-DJwBJPtS.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-B289Vihx.js";import"./index-CWxRi01P.js";import"./index-t0v7j-Gk.js";import"./client-BNP_YTsP.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-E1behPU7.js";import"./data_table-66TiUVy6.js";import"./text-CEhLEmI-.js";import"./chevron_up-CItFZDEJ.js";import"./higher_order-B_XZVdVh.js";import"./circular_progress_indicator-DhXdZUen.js";import"./container_loading-BWtQjVcS.js";import"./skeleton_content-DoJA4yxB.js";import"./byte_size_text-Q_L4p0C8.js";import"./number_formatters_provider-D57eZ9qo.js";import"./locale_provider-BoPyfNaQ.js";import"./wallet_address_text-CwerMuLc.js";import"./date_time_formatters_provider-CUEYb_H3.js";/* empty css               */import"./date_time_text-wJX1NRRA.js";import"./full_hex_text-Cac73Rm0.js";import"./array_buffer_hex-CckWFzk6.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./hex_text-6nX_iKNt.js";import"./money_text-CIrPK4v4.js";import"./money_text_full-Dw3sYrPH.js";import"./number_text-COoe7N9r.js";import"./relative_time_since_date_text-BWEO7OuA.js";import"./tagged_base64_text-DzdGugy0.js";import"./time_text-DRBXWMgt.js";import"./block_summary-CBGYsBbN.js";import"./data-DkoEaPI0.js";import"./link-CGf4BcVB.js";import"./roll_up_simple-BK_answ-.js";import"./espresso-MSRlTHSk.js";import"./x_icon-Ckd5lxDK.js";import"./twitter_icon-CJDnwTSA.js";import"./vertical_scroll-C1pvaFMK.js";const l=t=>o.jsx(i.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),et={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await e(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
