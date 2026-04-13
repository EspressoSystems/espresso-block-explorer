import{j as o}from"./iframe-Da-pRdj_.js";import{g as m,s as e}from"./data_table_shared-DJlthJZK.js";import{D as i}from"./data_provider-DT5b-p5f.js";import{m as p,i as s}from"./functional-BY4LX4kJ.js";import{R as n}from"./roll_ups_summary_data_table-nOMF0Nrt.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-D5C08SFq.js";import"./index-Csied5Tc.js";import"./index-CVsL8RUv.js";import"./client-ClnuHdtC.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-lIT2T7X3.js";import"./data_table-DNqZAqdt.js";import"./text-CEhLEmI-.js";import"./chevron_up-CA2lC1se.js";import"./higher_order-BliYGj6D.js";import"./circular_progress_indicator-CmgbbPhU.js";import"./container_loading-Bs_nCWyM.js";import"./skeleton_content-B8Hxs29M.js";import"./byte_size_text-DzPI3Ku4.js";import"./number_formatters_provider-DIxko5iX.js";import"./locale_provider-Bv2GXKLp.js";import"./wallet_address_text-BXyJ1CeJ.js";import"./date_time_formatters_provider-Bq_dXrCb.js";/* empty css               */import"./date_time_text-B8ynrPRp.js";import"./full_hex_text-DhrOCfLO.js";import"./array_buffer_hex-Bcc-7BbE.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./hex_text-b6On9MuH.js";import"./money_text-DVODtpBJ.js";import"./money_text_full-BBNORgie.js";import"./number_text-By_u4Wjn.js";import"./relative_time_since_date_text-dTJLjam_.js";import"./tagged_base64_text-B_jFbqJ5.js";import"./time_text-BfBn8ExL.js";import"./block_summary-CBGYsBbN.js";import"./data-DkoEaPI0.js";import"./link-5-QQNNE3.js";import"./roll_up_simple-DNvBSI5w.js";import"./espresso-C6NGAUAg.js";import"./x_icon-DUOKCEyJ.js";import"./twitter_icon-DJH4hGMI.js";import"./vertical_scroll-NWp1kiUw.js";const l=t=>o.jsx(i.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),et={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await e(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
