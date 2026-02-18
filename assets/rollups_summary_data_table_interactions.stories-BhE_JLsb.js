import{j as e}from"./iframe-DRi1LiY1.js";import{g as o,s as m}from"./data_table_shared-BONWvbUw.js";import{D as s}from"./data_provider-BEXgs6IU.js";import{m as i,i as n}from"./functional-Ci6o84Cp.js";import{R as p}from"./roll_ups_summary_data_table-CWEDZUCP.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-DG3gU5wN.js";import"./index-C93YOJ5V.js";import"./index-CKqPkkhs.js";import"./client-DZXhQAJG.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-BU3haTZx.js";import"./data_table-DWXjJZWb.js";import"./text-CEhLEmI-.js";import"./chevron_up-CIM7Ene_.js";import"./svg_icon_base-DRus6yG1.js";import"./higher_order-DchKpsaa.js";import"./skeleton_content-D6bR3BKC.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-ohwb6YDX.js";import"./number_formatters_provider-DrWfDPcd.js";import"./locale_provider-CADKL3Zh.js";import"./link-w3ej4rcj.js";import"./roll_up_simple-B6j2wmQU.js";import"./espresso-Bhre11Gm.js";import"./espresso_logo-C191vZ3i.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
