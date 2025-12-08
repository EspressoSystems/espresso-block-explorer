import{j as e}from"./iframe-BD1yaix1.js";import{D as o}from"./loading_provider-BbzSpk-c.js";import"./date_time_formatters_provider-D85-FJC7.js";import"./locale_provider-CMpeMO95.js";import"./page_path_provider-5HsnBsq2.js";import"./now_provider-BiYKTb9R.js";import"./number_formatters_provider-CYQ6aY_k.js";import"./path_resolver_provider-7jpIaJCk.js";import{g as m,s}from"./data_table_shared-BG_i13PE.js";import{m as i,i as p}from"./functional-DLuq-Zgx.js";import{a as n}from"./roll_ups_summary_data_table-CXyGiC-z.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-D7jH-8cm.js";import"./index-DB82ngbe.js";import"./index-C8rR8fZL.js";import"./client-DFM34XNO.js";import"./skeleton_content-D9B9Vsd-.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-hxKhlidF.js";import"./text-CEhLEmI-.js";import"./data_table-EFbEfsRt.js";import"./typography-r90yo729.js";import"./higher_order-T0GH9dDo.js";import"./chevron_up-BOvwN3J3.js";import"./svg_icon_base-COhmG2Uq.js";import"./link-CiXs1UM0.js";import"./roll_up_simple-C1FqRAuj.js";import"./espresso_logo-BTL20vaV.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
