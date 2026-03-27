import{j as e}from"./iframe-Cvx6RpPY.js";import{g as o,s as m}from"./data_table_shared-D_GXYoPc.js";import{D as s}from"./data_provider-DuSHNFDm.js";import{m as i,i as n}from"./functional-DzI6oRAM.js";import{R as p}from"./roll_ups_summary_data_table-8rWPv5-6.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-DpAMl9g-.js";import"./index-DV0fPn1x.js";import"./index-CF-oR5Dv.js";import"./client-MqscF9bh.js";import"./missing_element_error-D0dGm0KW.js";import"./string-BCb2Pt7Y.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-4NfNH-Lz.js";import"./data_table-CdvI3_gP.js";import"./text-CEhLEmI-.js";import"./chevron_up-bnQmtD7Q.js";import"./svg_icon_base-CJF1g_tc.js";import"./higher_order-CcpOgoeh.js";import"./skeleton_content-DsbU2c_Z.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-6gO1h8MR.js";import"./number_formatters_provider-DSWMRQJW.js";import"./locale_provider-D5aNHbGy.js";import"./link-DLE7hRkE.js";import"./roll_up_simple-CLh6i9xI.js";import"./espresso-stnEA2eC.js";import"./espresso_logo-DxQbk5YS.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
