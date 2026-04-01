import{j as e}from"./iframe-BvJnvOK3.js";import{g as o,s as m}from"./data_table_shared-B1RwelxN.js";import{D as s}from"./data_provider-D1xrNIUw.js";import{m as i,i as n}from"./functional-CHI4evRY.js";import{R as p}from"./roll_ups_summary_data_table-CnMV_Z0d.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Co-n7QZo.js";import"./index-BJtIBjVq.js";import"./index-BGnfEnc7.js";import"./client-CkpWhZAq.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./path_resolver_provider-ITMlBgoH.js";import"./data_table-DXK7Inda.js";import"./text-CEhLEmI-.js";import"./chevron_up-D-AdgxfR.js";import"./svg_icon_base-CnwbtYtI.js";import"./higher_order-CzhT3LZz.js";import"./skeleton_content-CNMj2q17.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-B3D3piOk.js";import"./number_formatters_provider-Cr-dALW7.js";import"./locale_provider-DLWcZiH3.js";import"./link-CSf1SuhH.js";import"./roll_up_simple-xq-eHijA.js";import"./espresso-UXm19uZ_.js";import"./espresso_logo-DEaQEpYQ.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
