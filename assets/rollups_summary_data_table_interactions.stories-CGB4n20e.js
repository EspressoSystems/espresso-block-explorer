import{j as e}from"./iframe-B8eqWRN6.js";import{D as o}from"./loading_provider-UILi0oHh.js";import"./date_time_formatters_provider-CHxfXojh.js";import"./locale_provider-CkkM0mjB.js";import"./page_path_provider-XienNpqp.js";import"./now_provider-DFrPQ9fr.js";import"./number_formatters_provider-CulVFl8b.js";import"./path_resolver_provider-DdGZMLHv.js";import{g as m,s}from"./data_table_shared-B18X-Zgo.js";import{m as i,i as p}from"./functional-CRC6BLve.js";import{a as n}from"./roll_ups_summary_data_table-BvnOCsgU.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./unimplemented_error-Bu4XFSEf.js";import"./react.esm-D4O7I1bM.js";import"./index-CmUZj1kq.js";import"./index-EMxXJ5Sn.js";import"./client-sBu5a9uz.js";import"./skeleton_content-CuoHXIQj.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-D4VvN4Vs.js";import"./text-CEhLEmI-.js";import"./data_table--WiQFAS6.js";import"./typography-DJsfTh_U.js";import"./higher_order-r1uOk2qL.js";import"./chevron_up-BTggqdTf.js";import"./svg_icon_base-CoeGQ4lo.js";import"./link-BzLMVWby.js";import"./roll_up_simple-JGUsD13J.js";import"./espresso_logo-BAqkl7kW.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
