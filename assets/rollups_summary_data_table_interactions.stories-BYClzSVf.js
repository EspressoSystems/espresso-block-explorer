import{j as e}from"./iframe-DI-11s_X.js";import{g as o,s as m}from"./data_table_shared-9Rd_AAgi.js";import{D as s}from"./data_provider-DGnnlGIN.js";import{m as i,i as n}from"./functional-DsFqNm-o.js";import{R as l}from"./roll_ups_summary_data_table-BTqccjw7.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Ci7yFpSj.js";import"./index-D4jg92GM.js";import"./index-2Qr5b_Ix.js";import"./client-Dz4AeR3J.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-CIxFUUvp.js";import"./data_table-BRCUuqRG.js";import"./text-CEhLEmI-.js";import"./chevron_up-vZR5oH8e.js";import"./svg_icon_base-D-9LFK2Z.js";import"./higher_order-CE6OGbq-.js";import"./skeleton_content-BJBzdtyc.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-BtfPTykZ.js";import"./number_formatters_provider-KddJYOdi.js";import"./locale_provider-C8e6pJUg.js";import"./link-DbE6Ew2K.js";import"./roll_up_simple-BpvZvfsl.js";import"./espresso_logo-C40Le6KV.js";const p=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(l,{})}),F={title:"components/Data/Rollups Summary Data Table/Interactions",component:p,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
