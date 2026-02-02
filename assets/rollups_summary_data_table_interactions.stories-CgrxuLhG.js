import{j as e}from"./iframe-tJD8ctAX.js";import{g as o,s as m}from"./data_table_shared-Dz_8xf2u.js";import{D as s}from"./data_provider-C6PVTx9l.js";import{m as i,i as n}from"./functional-6Z2QHHX7.js";import{R as l}from"./roll_ups_summary_data_table-fyZu-MZ0.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-B8emAic1.js";import"./index-D9AGz99-.js";import"./index-F4go5FlQ.js";import"./client-DQNBvfP2.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-COaFMYwC.js";import"./data_table-B7uqBxSZ.js";import"./text-CEhLEmI-.js";import"./chevron_up-dJKzCaOa.js";import"./svg_icon_base-BGhuzfHK.js";import"./higher_order-DMx3Maq3.js";import"./skeleton_content-cNfy38NO.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-gCrqYneN.js";import"./number_formatters_provider-Dl9eEFvN.js";import"./locale_provider-BfT--jL0.js";import"./link-YfrimRsA.js";import"./roll_up_simple-D6CZKcOV.js";import"./espresso_logo-BIgMo0UX.js";const p=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(l,{})}),F={title:"components/Data/Rollups Summary Data Table/Interactions",component:p,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
