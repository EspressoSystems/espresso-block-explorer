import{j as o}from"./iframe-yFC_6Lkm.js";import{g as m,s as e}from"./data_table_shared-Bd9iC0Hj.js";import{D as i}from"./data_provider-5GKNepRL.js";import{m as p,i as s}from"./functional-BN9f4kvo.js";import{R as n}from"./roll_ups_summary_data_table-Dc3pjDPg.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CEp6g7pp.js";import"./index-BmV5BhIB.js";import"./index-CRsEpIOc.js";import"./client-3rhF3nDV.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-DHnJ8sHv.js";import"./data_table-B_ldztdE.js";import"./text-CEhLEmI-.js";import"./chevron_up-DL-aSyib.js";import"./higher_order-CjJuNElG.js";import"./circular_progress_indicator-CXUQmMaZ.js";import"./container_loading-B8wF_9BZ.js";import"./skeleton_content-Cc8wo3D2.js";import"./byte_size_text-Nx3d5HCW.js";import"./number_formatters_provider-zsFhOobu.js";import"./locale_provider-vvwlyNor.js";import"./wallet_address_text-C8RpyldE.js";import"./date_time_formatters_provider-DcGFks32.js";/* empty css               */import"./date_time_text-B_kYN0i8.js";import"./full_hex_text-Cac73Rm0.js";import"./array_buffer_hex-CckWFzk6.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./hex_text-BgMrU2_9.js";import"./money_text-H4KdIbGP.js";import"./money_text_full-lyD3UcMj.js";import"./number_text-CypWZRGu.js";import"./relative_time_since_date_text-B1-Y__aI.js";import"./tagged_base64_text-vj28S5uH.js";import"./time_text-DWAXCu0U.js";import"./block_summary-CBGYsBbN.js";import"./data-DkoEaPI0.js";import"./link--R9F_-TJ.js";import"./roll_up_simple-CLSPQQpR.js";import"./espresso-BaBYkiWZ.js";import"./x_icon-Cly8TORT.js";import"./twitter_icon-BSqXgZj9.js";import"./vertical_scroll-ABb2uixh.js";const l=t=>o.jsx(i.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),et={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await e(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
