import{j as e}from"./iframe-TrusCfP7.js";import{g as o,s as m}from"./data_table_shared-Zu3kLD10.js";import{D as s}from"./data_provider-DhSR8fHD.js";import{m as i,i as n}from"./functional-Ci6o84Cp.js";import{R as p}from"./roll_ups_summary_data_table-CUjoBt2F.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-DPX_x2RN.js";import"./index-BLtf1UP9.js";import"./index-CmYdQwgm.js";import"./client-DjC4PwCD.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-dVkTiHR-.js";import"./data_table-kzgFRMNa.js";import"./text-CEhLEmI-.js";import"./chevron_up-ChAy-4n9.js";import"./svg_icon_base-CMA4dtm_.js";import"./higher_order-BaXXaYUD.js";import"./skeleton_content-DeKZZP6m.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-Dzzgw1-A.js";import"./number_formatters_provider-BjVNSDzq.js";import"./locale_provider-VmkWYhBv.js";import"./link-BLgksYwu.js";import"./roll_up_simple-DteaaT4J.js";import"./espresso-Bvz0ybyC.js";import"./espresso_logo-COd0OqzR.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
