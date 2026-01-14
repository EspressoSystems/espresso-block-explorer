import{j as e}from"./iframe-uLWYWIdy.js";import{g as o,s as m}from"./data_table_shared-CL5XJtXy.js";import{D as s}from"./data_provider-wCUWR71U.js";import{m as i,i as n}from"./functional-DsFqNm-o.js";import{R as l}from"./roll_ups_summary_data_table-CAx1qsj8.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-xIgWRSjR.js";import"./index-B2AoEzCK.js";import"./index-DmRnPi0A.js";import"./client-Dc6hmvfU.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-WtzdELai.js";import"./data_table-CtQ5bjYG.js";import"./text-CEhLEmI-.js";import"./chevron_up-BlhLCVww.js";import"./svg_icon_base-kLW-7jgl.js";import"./higher_order-BV5WAo3w.js";import"./skeleton_content-CXAzo2K4.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-DsiwwU3j.js";import"./number_formatters_provider-BJawDDf5.js";import"./locale_provider-CWIPDalB.js";import"./link-DP5Zd1n-.js";import"./roll_up_simple-DA0cUue6.js";import"./espresso_logo-gwsiqy1d.js";const p=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(l,{})}),F={title:"components/Data/Rollups Summary Data Table/Interactions",component:p,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
