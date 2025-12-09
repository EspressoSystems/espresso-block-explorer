import{j as e}from"./iframe-BhfBVhTN.js";import{D as o}from"./loading_provider-DuSSXXi4.js";import"./date_time_formatters_provider-DE6pqwEE.js";import"./locale_provider-yL7RjglX.js";import"./page_path_provider-0leIx6sS.js";import"./now_provider-BZ0gf5-c.js";import"./number_formatters_provider-BXMu2AYo.js";import"./path_resolver_provider-B_VwRBzs.js";import{g as m,s}from"./data_table_shared-DX4VM112.js";import{m as i,i as p}from"./functional-CSHHasco.js";import{a as n}from"./roll_ups_summary_data_table-ChWLfCac.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-CYZ_RHTj.js";import"./index-BieZ3BMC.js";import"./index-DGUlzzb1.js";import"./client-CjB65kfM.js";import"./skeleton_content-_MaUAuT1.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-ClR_i9Ow.js";import"./text-CEhLEmI-.js";import"./data_table-BxkFH38i.js";import"./typography-ZJRa9Te0.js";import"./higher_order-D_YdbROE.js";import"./chevron_up-WX9KDKGI.js";import"./svg_icon_base-BmNIBSz5.js";import"./link-43hKML25.js";import"./roll_up_simple-DfzDmu-r.js";import"./espresso_logo-BYCu5-AX.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
