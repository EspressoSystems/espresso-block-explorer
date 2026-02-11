import{j as e}from"./iframe-B298lYzW.js";import{g as o,s as m}from"./data_table_shared-Bgoj8wt8.js";import{D as s}from"./data_provider-vKdZeY0D.js";import{m as i,i as n}from"./functional-Ci6o84Cp.js";import{R as p}from"./roll_ups_summary_data_table-Xmtgimd4.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BmlWp72S.js";import"./index-CiS3ONPk.js";import"./index-S2HY-myl.js";import"./client-CNu7C4Ux.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-Do-I3vWG.js";import"./data_table-BIdABvSr.js";import"./text-CEhLEmI-.js";import"./chevron_up-D6rlm-BP.js";import"./svg_icon_base-CuicflMO.js";import"./higher_order-B_g3tT7H.js";import"./skeleton_content-CnaMDnBS.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-PJZIjD72.js";import"./number_formatters_provider-CrNZeYmu.js";import"./locale_provider-COLCQzYC.js";import"./link-C4utITwA.js";import"./roll_up_simple-Ib8gEJgv.js";import"./espresso-zEcLPcjJ.js";import"./espresso_logo-C_pxVIEe.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
