import{j as e}from"./iframe-C36uQjwe.js";import{D as o}from"./loading_provider-BllPH4wN.js";import"./date_time_formatters_provider-CAjNQyov.js";import"./locale_provider-wQt49r1W.js";import"./page_path_provider-C4TVebhC.js";import"./now_provider-D6WuJJod.js";import"./number_formatters_provider-DywPH02u.js";import"./path_resolver_provider-D1l7Ftg7.js";import{g as m,s}from"./data_table_shared-qA3ZhzF5.js";import{m as i,i as p}from"./functional-aFFbciHe.js";import{a as n}from"./roll_ups_summary_data_table-C4jAqDeR.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-DMHPUCOI.js";import"./index-USsukJ9q.js";import"./index-CuQTq9WB.js";import"./client-NDPkqDfF.js";import"./skeleton_content-D1Jtp_i-.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-CLzfObOD.js";import"./text-CEhLEmI-.js";import"./data_table-CSH7CJYS.js";import"./typography-DJ4LlwQ2.js";import"./higher_order-CfyPS3zu.js";import"./chevron_up-BOTGh5V0.js";import"./svg_icon_base-CociR3Gf.js";import"./link-COgTKsYC.js";import"./roll_up_simple-DGLgiOxR.js";import"./espresso_logo-DDbmMhnA.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
