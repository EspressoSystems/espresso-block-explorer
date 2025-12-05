import{j as e}from"./iframe-DIKNrIIb.js";import{D as o}from"./loading_provider-Dn9ytlaz.js";import"./date_time_formatters_provider-DhcWWpu8.js";import"./locale_provider-DYOAFLcG.js";import"./page_path_provider-B1N-ENWh.js";import"./now_provider-DNU3NT7E.js";import"./number_formatters_provider-CoB2HbbC.js";import"./path_resolver_provider-D_k7zmI5.js";import{g as m,s}from"./data_table_shared-CgHw2KBb.js";import{m as i,i as p}from"./functional-DLuq-Zgx.js";import{a as n}from"./roll_ups_summary_data_table-b-_y_O9a.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-PYvwRhAE.js";import"./index-B1u9hlBx.js";import"./index-C8ROo_QO.js";import"./client-Cgb01xwx.js";import"./skeleton_content-DoayltBs.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-C_D0_0Sh.js";import"./text-CEhLEmI-.js";import"./data_table-D7kIY5bn.js";import"./typography-C-u2xTwd.js";import"./higher_order-CERhs-Yx.js";import"./chevron_up-BShDt5bd.js";import"./svg_icon_base-CJsibPKU.js";import"./link-BA2MO7y4.js";import"./roll_up_simple-D_DPRQ3W.js";import"./espresso_logo-B5uM5svJ.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
