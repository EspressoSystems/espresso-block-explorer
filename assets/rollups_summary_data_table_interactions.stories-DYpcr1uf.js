import{j as o}from"./iframe-mpHEnFNJ.js";import{g as m,s as e}from"./data_table_shared-8zEDrx_R.js";import{D as i}from"./data_provider-CrCMtXFK.js";import{m as p,i as s}from"./functional-BN9f4kvo.js";import{R as n}from"./roll_ups_summary_data_table-DHj0RDpr.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-yV1C_LQf.js";import"./index-DcWMdZIP.js";import"./index-CZsTPGzU.js";import"./client-CNthiOje.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-SqaJ-27M.js";import"./data_table-yBmOqmV0.js";import"./text-CEhLEmI-.js";import"./chevron_up-DlQkqxWe.js";import"./higher_order-BSlQmUED.js";import"./circular_progress_indicator-DomheTJH.js";import"./container_loading-CX5jC8rD.js";import"./skeleton_content-DqloY_f-.js";import"./byte_size_text-Cv4QuSL9.js";import"./number_formatters_provider-OPX5cdf1.js";import"./locale_provider-CFUFv6Rr.js";import"./wallet_address_text-bqe02_aa.js";import"./date_time_formatters_provider-DzftIXyF.js";/* empty css               */import"./date_time_text-cRk5ucDj.js";import"./full_hex_text-Cac73Rm0.js";import"./array_buffer_hex-CckWFzk6.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./hex_text-aVTQS5pR.js";import"./money_text-DAJraeQH.js";import"./money_text_full-D2eyImrj.js";import"./number_text-DGs2xjUf.js";import"./relative_time_since_date_text-uDiJnjBg.js";import"./tagged_base64_text-B2aws7WV.js";import"./time_text-C3n6I0QM.js";import"./block_summary-CBGYsBbN.js";import"./data-DkoEaPI0.js";import"./link-3iULCeS4.js";import"./roll_up_simple-DQzNaSL6.js";import"./espresso-W7iQVYCS.js";import"./x_icon-BLoNJM-C.js";import"./twitter_icon-CaKe8i_l.js";import"./vertical_scroll-CLg0oi0m.js";const l=t=>o.jsx(i.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),et={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await e(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
