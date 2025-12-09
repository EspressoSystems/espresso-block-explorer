import{j as e}from"./iframe-BbF3Syj1.js";import{D as o}from"./loading_provider-DEd-giv5.js";import"./date_time_formatters_provider-BCl3flcb.js";import"./locale_provider-De2PuuUV.js";import"./page_path_provider-DFntaqal.js";import"./now_provider-B6bWrODL.js";import"./number_formatters_provider-DOen9m4S.js";import"./path_resolver_provider-rPfG7hHk.js";import{g as m,s}from"./data_table_shared-BEWASsEA.js";import{m as i,i as p}from"./functional-CRC6BLve.js";import{a as n}from"./roll_ups_summary_data_table-DqoQQbf5.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./unimplemented_error-Bu4XFSEf.js";import"./react.esm-Cbvut28h.js";import"./index-8H9Cz35g.js";import"./index-CUKlM6e7.js";import"./client-BQV42wdX.js";import"./skeleton_content-BRPUJFb-.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-DFd3FJlE.js";import"./text-CEhLEmI-.js";import"./data_table-CEb_xGYK.js";import"./typography-B0b9ZxV3.js";import"./higher_order-P_eSrgQE.js";import"./chevron_up-B0nn2pno.js";import"./svg_icon_base-BTNiSFJX.js";import"./link-BuygIwbt.js";import"./roll_up_simple-CbEwVM9Z.js";import"./espresso_logo-TfkgJlE2.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
