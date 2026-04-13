import{j as o}from"./iframe-COKd2Os-.js";import{g as m,s as e}from"./data_table_shared-BYDPVGW-.js";import{D as i}from"./data_provider-I8Cq7ni6.js";import{m as p,i as s}from"./functional-BY4LX4kJ.js";import{R as n}from"./roll_ups_summary_data_table-Dl0yo4TU.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-D3iyLMaI.js";import"./index-CLIMVHVb.js";import"./index-Dw0SlraX.js";import"./client-mRDDk3Gp.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-C9PXJtCJ.js";import"./data_table-CWGiaFxK.js";import"./text-CEhLEmI-.js";import"./chevron_up-0QfBWqbC.js";import"./higher_order-t8f3m54J.js";import"./circular_progress_indicator-BaJ1dg1I.js";import"./container_loading-CS6S1NZO.js";import"./skeleton_content-DpknspYU.js";import"./byte_size_text-B8oLdHc1.js";import"./number_formatters_provider-5P6oMbBj.js";import"./locale_provider-CRfUaY6B.js";import"./wallet_address_text-DCA28Uqg.js";import"./date_time_formatters_provider-KQLt3BJr.js";/* empty css               */import"./date_time_text-CDMhlPwa.js";import"./full_hex_text-DhrOCfLO.js";import"./array_buffer_hex-Bcc-7BbE.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./hex_text-DK79PIUk.js";import"./money_text-C-wrGRGL.js";import"./money_text_full-LCIKV8NP.js";import"./number_text-CAbUHr29.js";import"./relative_time_since_date_text-CnpaFYv_.js";import"./tagged_base64_text-VkJW1cYD.js";import"./time_text-hbHHO61s.js";import"./block_summary-CBGYsBbN.js";import"./data-DkoEaPI0.js";import"./link-BgrEN8bL.js";import"./roll_up_simple-CfnMMIAY.js";import"./espresso-BT1dUU-Q.js";import"./x_icon-BdiuL9tT.js";import"./twitter_icon-CDA43j3T.js";import"./vertical_scroll-e5WQDJ-j.js";const l=t=>o.jsx(i.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),et={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await e(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
