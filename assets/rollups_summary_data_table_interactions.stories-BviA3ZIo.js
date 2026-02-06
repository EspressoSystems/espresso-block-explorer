import{j as e}from"./iframe-B98JvFlS.js";import{g as o,s as m}from"./data_table_shared-DxW_eoZf.js";import{D as s}from"./data_provider-3-u40w_S.js";import{m as i,i as n}from"./functional-6Z2QHHX7.js";import{R as l}from"./roll_ups_summary_data_table-DQJclpL7.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Bzlau9Ck.js";import"./index-DzVgPpp9.js";import"./index-Def8Sx_B.js";import"./client-CE2IJ18h.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-G_S0-zyJ.js";import"./data_table-BX5e_VEt.js";import"./text-CEhLEmI-.js";import"./chevron_up-DqwUH8EF.js";import"./svg_icon_base-CJ0J5j9p.js";import"./higher_order-DFW_Utmg.js";import"./skeleton_content-CeIngfNJ.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-DXEYwiPL.js";import"./number_formatters_provider-eJntoBts.js";import"./locale_provider-YmKQyVQa.js";import"./link-mN7KWGba.js";import"./roll_up_simple-DNnR1IO9.js";import"./espresso_logo-BuA0cE0P.js";const p=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(l,{})}),F={title:"components/Data/Rollups Summary Data Table/Interactions",component:p,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const G=["Interactions"];export{t as Interactions,G as __namedExportsOrder,F as default};
