import{j as e}from"./iframe-BwY8Nc_o.js";import{g as o,s as m}from"./data_table_shared-B_KEi0Aq.js";import{D as s}from"./data_provider-BIkZvgj5.js";import{m as i,i as n}from"./functional-DsFqNm-o.js";import{R as p}from"./roll_ups_summary_data_table-BJmAdJIN.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Dexxyoa5.js";import"./index-CFEphY2-.js";import"./index-CY-YAoDF.js";import"./client-BxCpvd2i.js";import"./missing_element_error-BOXFIEXu.js";import"./string-BsSBvYb_.js";import"./assert-B11BgmXM.js";import"./skeleton_content-2CbNU9lX.js";import"./path_resolver_provider-Ty5NTk7B.js";import"./data_table-B2ZnAtti.js";import"./text-CEhLEmI-.js";import"./typography-PELJ4Pi9.js";import"./higher_order-CDuDe3l-.js";import"./chevron_up-BWu4GSwW.js";import"./svg_icon_base-C4H5d3RL.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-v_ckRp1n.js";import"./number_formatters_provider-DMP6I6Q-.js";import"./locale_provider-CuUrHs_V.js";import"./link-D1QpCoYu.js";import"./roll_up_simple-fHlQTwQJ.js";import"./espresso_logo-GnYaZFWM.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
