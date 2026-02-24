import{j as e}from"./iframe-DFUTgPQB.js";import{g as o,s as m}from"./data_table_shared-D1NwN3mD.js";import{D as s}from"./data_provider-xp9wZ2A1.js";import{m as i,i as n}from"./functional-Ci6o84Cp.js";import{R as p}from"./roll_ups_summary_data_table-DUyUOAA-.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CqlGwNOr.js";import"./index-DaW-g7vb.js";import"./index-hc1MaISu.js";import"./client-BReTPsvU.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-5gBwoeK9.js";import"./data_table-B7WZpwEl.js";import"./text-CEhLEmI-.js";import"./chevron_up-DuX2aDGx.js";import"./svg_icon_base-CCv-kRqo.js";import"./higher_order-DKNKSq1q.js";import"./skeleton_content-WZfPrkCA.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text--cH6Scsp.js";import"./number_formatters_provider-Dy59aJqz.js";import"./locale_provider-D7-IQ_iJ.js";import"./link-CgJzIbgO.js";import"./roll_up_simple-DCGPkxya.js";import"./espresso-mI_kQW8e.js";import"./espresso_logo-BU1janGn.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
