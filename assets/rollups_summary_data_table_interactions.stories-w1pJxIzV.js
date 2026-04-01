import{j as e}from"./iframe-hejhwxVl.js";import{g as o,s as m}from"./data_table_shared-DjFrUQak.js";import{D as s}from"./data_provider-oqf6yKht.js";import{m as i,i as n}from"./functional-CHI4evRY.js";import{R as p}from"./roll_ups_summary_data_table-C4je7sb_.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CtXjynZ4.js";import"./index-CrNDxhwo.js";import"./index-CogtgnYk.js";import"./client-D6exDgc_.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./path_resolver_provider-rWpEttVD.js";import"./data_table-BaNa2ei5.js";import"./text-CEhLEmI-.js";import"./chevron_up-BIXFaApl.js";import"./svg_icon_base-C4F1Mj4O.js";import"./higher_order-W9buzvfY.js";import"./skeleton_content-DoOnEOVP.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-BsE1LgbZ.js";import"./number_formatters_provider-DDCZmzjm.js";import"./locale_provider-B6ewQipp.js";import"./link-Bpr-6faG.js";import"./roll_up_simple-BwJS4AVF.js";import"./espresso-BEdnAGQ0.js";import"./espresso_logo-CW96dy7s.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
