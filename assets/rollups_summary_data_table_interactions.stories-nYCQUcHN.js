import{j as e}from"./iframe-tCHaFxbc.js";import{g as o,s as m}from"./data_table_shared-DfqwVFXA.js";import{D as s}from"./data_provider-DMdJRqvD.js";import{m as i,i as n}from"./functional-DT4GooI6.js";import{R as p}from"./roll_ups_summary_data_table-DwYbMzrC.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CWaj5apr.js";import"./index-BZbs2elc.js";import"./index-Cuxb-LnB.js";import"./client-CM43emWd.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-BBe-WNBo.js";import"./data_table-Dq9o6xGN.js";import"./text-CEhLEmI-.js";import"./chevron_up-CTacPNtY.js";import"./svg_icon_base-DPHHXJOQ.js";import"./higher_order-DFvPhzqR.js";import"./skeleton_content-B2LbE2wz.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text--8_8YX8A.js";import"./number_formatters_provider-BWiH38Om.js";import"./locale_provider-_bKYlsJ_.js";import"./link-CDJ7miSy.js";import"./roll_up_simple-DtjSPPBi.js";import"./espresso-CRLpOLt6.js";import"./espresso_logo-DrrSZ2bC.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
