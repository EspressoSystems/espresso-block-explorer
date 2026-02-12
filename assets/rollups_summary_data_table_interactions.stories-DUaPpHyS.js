import{j as e}from"./iframe-D4NG4Ygg.js";import{g as o,s as m}from"./data_table_shared-Bb385wYj.js";import{D as s}from"./data_provider-kgUlCSLb.js";import{m as i,i as n}from"./functional-Ci6o84Cp.js";import{R as p}from"./roll_ups_summary_data_table-ow74-iIL.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-C-kTbQMi.js";import"./index-CN5LEFBF.js";import"./index-vB25Cpb6.js";import"./client-jiXVFmGw.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-T-F4e6m2.js";import"./data_table-dLKW4ONu.js";import"./text-CEhLEmI-.js";import"./chevron_up-DnyZ5qB_.js";import"./svg_icon_base-D3FfKTtS.js";import"./higher_order-BVplWATc.js";import"./skeleton_content-Ot69JtSC.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-CGho1SjB.js";import"./number_formatters_provider-CV8eEq8L.js";import"./locale_provider-y_w6A6F5.js";import"./link-BCQBx_Zl.js";import"./roll_up_simple-mT_vqy_G.js";import"./espresso-BnLvrtO7.js";import"./espresso_logo-D3A2VT0-.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
