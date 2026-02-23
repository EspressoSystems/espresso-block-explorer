import{j as e}from"./iframe-CVKXv-Cv.js";import{g as o,s as m}from"./data_table_shared-Dg0xXIpH.js";import{D as s}from"./data_provider-DliWLU-N.js";import{m as i,i as n}from"./functional-Ci6o84Cp.js";import{R as p}from"./roll_ups_summary_data_table-DaRNJP2W.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-wIl04LPn.js";import"./index-XY6BT7cC.js";import"./index-Ct7XCo7m.js";import"./client-BhZMZhyV.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-CKt_cXiG.js";import"./data_table-CVBUwP1F.js";import"./text-CEhLEmI-.js";import"./chevron_up-DhBANYx5.js";import"./svg_icon_base-D4no40oI.js";import"./higher_order-CtQuyS7n.js";import"./skeleton_content-B49VI20d.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-BCP4vfA5.js";import"./number_formatters_provider-BU8dGkN7.js";import"./locale_provider-Buk582ED.js";import"./link-jutSw9ZD.js";import"./roll_up_simple-CvWreHY6.js";import"./espresso-D7hHCnFI.js";import"./espresso_logo-BfqW0ykW.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
