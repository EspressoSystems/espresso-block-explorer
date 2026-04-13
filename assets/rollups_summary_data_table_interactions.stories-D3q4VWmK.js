import{j as o}from"./iframe-CRN6ir_k.js";import{g as m,s as e}from"./data_table_shared-DXkFtdCi.js";import{D as i}from"./data_provider-BRUBq0Ii.js";import{m as p,i as s}from"./functional-BN9f4kvo.js";import{R as n}from"./roll_ups_summary_data_table-CiwgusMg.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BoUDZ0HR.js";import"./index-D_J2JNbG.js";import"./index-DmZRm6GY.js";import"./client-bOvuQbJW.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-D1HmFeDs.js";import"./data_table-Ckzo1iyL.js";import"./text-CEhLEmI-.js";import"./chevron_up-BIFMo3iJ.js";import"./higher_order-BJoFsnsT.js";import"./circular_progress_indicator-D_atp0op.js";import"./container_loading-C9coGMSW.js";import"./skeleton_content-BqOji4jo.js";import"./byte_size_text-Ch1N4NZS.js";import"./number_formatters_provider-CV2JCVAy.js";import"./locale_provider-DitRBxok.js";import"./wallet_address_text-iOdgpcaz.js";import"./date_time_formatters_provider-CO-VImxK.js";/* empty css               */import"./date_time_text-CO7oiG9G.js";import"./full_hex_text-Cac73Rm0.js";import"./array_buffer_hex-CckWFzk6.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./hex_text-Dmo4jBH1.js";import"./money_text-Mf2-fP6d.js";import"./money_text_full-CyFzKqQ4.js";import"./number_text-i0V-NKlU.js";import"./relative_time_since_date_text-BvB0wkUr.js";import"./tagged_base64_text-C5VDRjcO.js";import"./time_text-CSZWe2p1.js";import"./block_summary-CBGYsBbN.js";import"./data-DkoEaPI0.js";import"./link-CUJ-dmn5.js";import"./roll_up_simple-BNwqYafe.js";import"./espresso-B4ZxD2K0.js";import"./x_icon-CeOMdX2y.js";import"./twitter_icon-BMz0LQWW.js";import"./vertical_scroll-BFk-ygDy.js";const l=t=>o.jsx(i.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),et={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await e(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
