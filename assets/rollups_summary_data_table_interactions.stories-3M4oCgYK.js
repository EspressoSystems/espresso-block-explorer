import{j as o}from"./iframe-3Z2fgCPY.js";import{D as e}from"./loading_provider-Ur2XoJ-b.js";import"./date_time_formatters_provider-Dd-pwKzP.js";import"./locale_provider-B-1mGrFX.js";import"./page_path_provider-B_tgBqRU.js";import"./now_provider-5ZcTXbz-.js";import"./number_formatters_provider-C17xfnZz.js";import"./path_resolver_provider-BSMezMxn.js";import{g as m,s as i}from"./data_table_shared-D0Fg6I40.js";import{m as p,i as s}from"./functional-DLuq-Zgx.js";import{a as n}from"./roll_ups_summary_data_table-DYvM9RHg.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-B8zBXy6I.js";import"./index-CBJu0xp2.js";import"./index-E3DUaXpY.js";import"./client-KGSUeVuu.js";import"./skeleton_content-DOTDChQ8.js";import"./block_summary-CBGYsBbN.js";import"./data-Cpeha0UW.js";import"./number_text-BJeOQPuJ.js";import"./text-CEhLEmI-.js";import"./data_table-DXuNLSIj.js";import"./typography-CaQwexFI.js";import"./higher_order-HipsDJR4.js";import"./chevron_up-BTjh4m5r.js";import"./svg_icon_base-VH6Zm-Te.js";import"./link-B59nsfmY.js";import"./roll_up_simple-7ubS0xsT.js";import"./payments-Du_ltXII.js";import"./twitter_icon-PV1oXO13.js";import"./arrow_right-DJHFiOk8.js";import"./check_circle_filled-DDgAunYF.js";import"./close-Cx4FQ0d4.js";import"./copy-BAAgR512.js";import"./medium_icon-CUSXVVMv.js";import"./espresso_logo-BaVwok8L.js";import"./espresso_logo_and_title-CiCQqSmU.js";import"./menu-6zjDqROU.js";import"./search_glass-DnKCyrqn.js";import"./x_icon-B8wSyKYi.js";const l=t=>o.jsx(e.Provider,{value:t.rollupSummaries,children:o.jsx(n,{})}),at={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(p(s(20),t=>({namespace:t,transactions:t*2}))),r={args:{rollupSummaries:c},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const ot=["Interactions"];export{r as Interactions,ot as __namedExportsOrder,at as default};
