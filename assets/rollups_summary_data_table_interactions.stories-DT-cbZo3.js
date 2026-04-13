import{j as o}from"./iframe-hlwV_SLU.js";import{g as m,s as e}from"./data_table_shared-BLb-ZEj1.js";import{D as i}from"./data_provider-BSV0zpAE.js";import{m as p,i as s}from"./functional-BN9f4kvo.js";import{R as n}from"./roll_ups_summary_data_table-C-AjL7QP.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-2JgpB0hW.js";import"./index-CGMwTfK0.js";import"./index-CYUkv1Xd.js";import"./client-CmMhSb24.js";import"./missing_element_error-BXDBouYu.js";import"./string-DwcMXV6G.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-D4RItF87.js";import"./data_table-CicpzNPW.js";import"./text-CEhLEmI-.js";import"./chevron_up-dgUFrBAe.js";import"./higher_order-Bp4R-A8k.js";import"./circular_progress_indicator-BYNpNd3l.js";import"./container_loading-K_Yp0bT6.js";import"./skeleton_content-BmUbB4de.js";import"./byte_size_text-BgslcI2e.js";import"./number_formatters_provider-CEQBq_Hk.js";import"./locale_provider-CqJhpaHu.js";import"./wallet_address_text-BqWLkzAy.js";import"./date_time_formatters_provider-BxM1oZxM.js";/* empty css               */import"./date_time_text-BhhckyY6.js";import"./full_hex_text-Cac73Rm0.js";import"./array_buffer_hex-CckWFzk6.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./hex_text-BSzh9nv8.js";import"./money_text-D0p8Y8LA.js";import"./money_text_full-mZgISvxt.js";import"./number_text-yX4kUbct.js";import"./relative_time_since_date_text-DQ4LaVpf.js";import"./tagged_base64_text-ClsJrra7.js";import"./time_text-CBcl6HLm.js";import"./block_summary-CBGYsBbN.js";import"./data-DkoEaPI0.js";import"./link-VKIumEN2.js";import"./roll_up_simple-DxYneYt5.js";import"./espresso-BZJBsDaB.js";import"./x_icon-CJRFBdJv.js";import"./twitter_icon-oVpBjcyD.js";import"./vertical_scroll-FnAk83CC.js";const l=t=>o.jsx(i.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),et={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await e(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
