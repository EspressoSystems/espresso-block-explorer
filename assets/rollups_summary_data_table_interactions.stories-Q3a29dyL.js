import{j as e}from"./iframe-DERpcsaj.js";import{D as o}from"./loading_provider-DWAOa2Po.js";import"./date_time_formatters_provider-4OV54txv.js";import"./locale_provider-BSCycvT5.js";import"./page_path_provider-CdVsPBlv.js";import"./now_provider-Du-h2Rp4.js";import"./number_formatters_provider-CAdhGcCB.js";import"./path_resolver_provider-yTnYQJl0.js";import{g as m,s}from"./data_table_shared-BEdyb-Il.js";import{m as i,i as p}from"./functional-AkqJadlP.js";import{a as n}from"./roll_ups_summary_data_table-C0_R6MtT.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./unimplemented_error-Bu4XFSEf.js";import"./react.esm-BCrxck9h.js";import"./index-Blc0c5dJ.js";import"./index-BMZNw6o_.js";import"./client-BRIjTmLC.js";import"./skeleton_content-D1PJ_eX5.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-CWqYRbqG.js";import"./text-CEhLEmI-.js";import"./data_table-Cz-rzykX.js";import"./typography-Dj8C4yvB.js";import"./higher_order-DzHtQVvV.js";import"./chevron_up-D1pFdZoM.js";import"./svg_icon_base-BSoegY8q.js";import"./link-Ci1XeN4i.js";import"./roll_up_simple-Bn8vWnxL.js";import"./espresso_logo-BqJYeSBr.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
