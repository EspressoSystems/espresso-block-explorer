import{j as e}from"./iframe-D38n0YpH.js";import{D as o}from"./loading_provider-CmIKNCgq.js";import"./date_time_formatters_provider-C_Xcb1Og.js";import"./locale_provider-DzT1QKu6.js";import"./page_path_provider-C5mOuAiV.js";import"./now_provider-DY018Nl3.js";import"./number_formatters_provider-ByDysz5-.js";import"./path_resolver_provider-DkcsmNfF.js";import{g as m,s}from"./data_table_shared-lGRIXLO2.js";import{m as i,i as p}from"./functional-AkqJadlP.js";import{a as n}from"./roll_ups_summary_data_table-oSOTZuJd.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./unimplemented_error-Bu4XFSEf.js";import"./react.esm-5MOUnv-I.js";import"./index-BQAHaO3b.js";import"./index-b2ucKIM2.js";import"./client-Cormy-O0.js";import"./skeleton_content-BFqgBQHP.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-BXk_sP1g.js";import"./text-CEhLEmI-.js";import"./data_table-x2NQkZcy.js";import"./typography-91BC-7Aj.js";import"./higher_order-xjg9P6xC.js";import"./chevron_up-CR5osNpr.js";import"./svg_icon_base-DTyOsi0d.js";import"./link-Dpteqe9q.js";import"./roll_up_simple-jml_HJXt.js";import"./espresso_logo-Dw92O4Hz.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
