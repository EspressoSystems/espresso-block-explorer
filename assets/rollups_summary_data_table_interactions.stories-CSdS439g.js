import{j as e}from"./iframe-BmS3xRbu.js";import{g as o,s as m}from"./data_table_shared-BXwyOTUZ.js";import{D as s}from"./data_provider-Bc8LLRJq.js";import{m as i,i as n}from"./functional-6Z2QHHX7.js";import{R as l}from"./roll_ups_summary_data_table-CB7wELx6.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-C5ocioGz.js";import"./index-C7WTE1ec.js";import"./index-D9IcjNSq.js";import"./client-DzYR3hGn.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-D4kQF33W.js";import"./data_table-DQ-k_VTm.js";import"./text-CEhLEmI-.js";import"./chevron_up-D0Pz47GW.js";import"./svg_icon_base-C9vCfi1H.js";import"./higher_order-BcBNDTSF.js";import"./skeleton_content-1t1_tVBp.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-3CvBpJ-A.js";import"./number_formatters_provider-BMOfqz6h.js";import"./locale_provider-DXJjPQek.js";import"./link-D0w5oTkU.js";import"./roll_up_simple-ByH1Pz0X.js";import"./espresso_logo-DTcMAend.js";const p=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(l,{})}),F={title:"components/Data/Rollups Summary Data Table/Interactions",component:p,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
