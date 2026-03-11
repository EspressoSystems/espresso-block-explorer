import{j as e}from"./iframe-Cy4xjHUd.js";import{g as o,s as m}from"./data_table_shared-B_Yog760.js";import{D as s}from"./data_provider-C2a9yIBm.js";import{m as i,i as n}from"./functional-Ci6o84Cp.js";import{R as p}from"./roll_ups_summary_data_table-1ygnR2es.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CpquZluQ.js";import"./index-CNB9H_RB.js";import"./index-CVn5SYyK.js";import"./client-Dx8UaD4v.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-DY1Q2vvo.js";import"./data_table-yisRrbPa.js";import"./text-CEhLEmI-.js";import"./chevron_up-B-4vqEb2.js";import"./svg_icon_base-B8oaxq1w.js";import"./higher_order-C1TCJwML.js";import"./skeleton_content-D6wyLx9C.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-9BSNavKf.js";import"./number_formatters_provider-BzZn-8Pb.js";import"./locale_provider-CMdojvOr.js";import"./link-CIexkyYy.js";import"./roll_up_simple-DqYsPXgw.js";import"./espresso-D1SbQFtr.js";import"./espresso_logo-BzPw5yex.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
