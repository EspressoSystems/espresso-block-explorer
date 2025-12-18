import{j as e}from"./iframe-CUSUi-ol.js";import{D as o}from"./loading_provider-DxXUP5j3.js";import"./date_time_formatters_provider-VX2lHb9g.js";import"./locale_provider-BxbKA3wd.js";import"./page_path_provider-DlC5aC3g.js";import"./now_provider-DcSrXJuC.js";import"./number_formatters_provider-DmpWQro_.js";import"./path_resolver_provider-B1crnTdb.js";import{g as m,s}from"./data_table_shared-C2gCq_Yc.js";import{m as i,i as p}from"./functional-aFFbciHe.js";import{a as n}from"./roll_ups_summary_data_table-ClQQ9Tt-.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-CxCeA-0i.js";import"./index-BslH2gUQ.js";import"./index-BTx48-9-.js";import"./client-TzQjO8Ka.js";import"./skeleton_content-BzNMtOGK.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-YBM4-nOg.js";import"./text-CEhLEmI-.js";import"./data_table-dcZ5G3R1.js";import"./typography-1SaDHsys.js";import"./higher_order-CE7HgP1S.js";import"./chevron_up-BSdBbTnB.js";import"./svg_icon_base-HWbYxe0V.js";import"./link-DJhoy_in.js";import"./roll_up_simple-CrFg2cC3.js";import"./espresso_logo-BCac-AjN.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const N=["Interactions"];export{a as Interactions,N as __namedExportsOrder,M as default};
