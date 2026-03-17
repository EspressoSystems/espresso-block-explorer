import{j as e}from"./iframe-FW1O3eUf.js";import{g as o,s as m}from"./data_table_shared-VaBLYEqt.js";import{D as s}from"./data_provider-BbqeYGia.js";import{m as i,i as n}from"./functional-DzI6oRAM.js";import{R as p}from"./roll_ups_summary_data_table-DNahhFhz.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CPYV7Nbv.js";import"./index-BMEX-Xo9.js";import"./index-CHh1lDEX.js";import"./client-DR6EZN8l.js";import"./missing_element_error-D0dGm0KW.js";import"./string-BCb2Pt7Y.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-nbJvAjBm.js";import"./data_table-t1i8txp6.js";import"./text-CEhLEmI-.js";import"./chevron_up-B9MjSPlu.js";import"./svg_icon_base-4ERQ15ko.js";import"./higher_order-CZN8Z6mQ.js";import"./skeleton_content-C2ZsUKe2.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-DgAnb3aC.js";import"./number_formatters_provider-BUUmLBk_.js";import"./locale_provider-D1mYVGxJ.js";import"./link-WSxXw9tq.js";import"./roll_up_simple-DrEtVSWo.js";import"./espresso-OnZrmjo8.js";import"./espresso_logo-BaPS_vjc.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const J=["Interactions"];export{t as Interactions,J as __namedExportsOrder,G as default};
