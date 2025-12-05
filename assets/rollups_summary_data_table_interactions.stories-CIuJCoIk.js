import{j as e}from"./iframe-DFfdKi-0.js";import{D as o}from"./loading_provider-da-Stdik.js";import"./date_time_formatters_provider-D1KuHasK.js";import"./locale_provider-BSfkAuIP.js";import"./page_path_provider-BLpKX2CS.js";import"./now_provider-Bg99-F95.js";import"./number_formatters_provider-BFBcbrkA.js";import"./path_resolver_provider-DZ-5eptY.js";import{g as m,s}from"./data_table_shared-DI1tcrfp.js";import{m as i,i as p}from"./functional-DLuq-Zgx.js";import{a as n}from"./roll_ups_summary_data_table-CcBIu9VO.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-QcRRCiS6.js";import"./index-C5KUm6uC.js";import"./index-qjXQvvE7.js";import"./client-IBhBTdAB.js";import"./skeleton_content-CLW3IdlQ.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-BThEIcq7.js";import"./text-CEhLEmI-.js";import"./data_table-CacNGaVF.js";import"./typography-M3pkdhb1.js";import"./higher_order-CAFNA8md.js";import"./chevron_up-CgozpFm6.js";import"./svg_icon_base-Bysx7lQ6.js";import"./link-DeuX5Kmo.js";import"./roll_up_simple-CWH2zN4V.js";import"./espresso_logo-BO65uRO3.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
