import{j as e}from"./iframe-BisBQj4b.js";import{g as o,s as m}from"./data_table_shared-BVbvoHPP.js";import{D as s}from"./data_provider-DSZ9Vv_3.js";import{m as i,i as n}from"./functional-6Z2QHHX7.js";import{R as l}from"./roll_ups_summary_data_table-s95FP9qY.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BWy4QzQt.js";import"./index-CqTTn5wO.js";import"./index-C-IjjtMy.js";import"./client-Dn8PDppJ.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-CkeKuk75.js";import"./data_table-fwnGyCF7.js";import"./text-CEhLEmI-.js";import"./chevron_up-CC90xocc.js";import"./svg_icon_base-eIEhIJU_.js";import"./higher_order-B_D7TFYJ.js";import"./skeleton_content-BxEnkJYy.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-DzPmU_Wm.js";import"./number_formatters_provider-BbUevisL.js";import"./locale_provider-Cy9Qu1vd.js";import"./link-C5aiC12C.js";import"./roll_up_simple-DPh-m7Fb.js";import"./espresso_logo-CqrIXm6U.js";const p=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(l,{})}),F={title:"components/Data/Rollups Summary Data Table/Interactions",component:p,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
