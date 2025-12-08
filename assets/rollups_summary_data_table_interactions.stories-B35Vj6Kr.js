import{j as e}from"./iframe-C-FY04Dt.js";import{D as o}from"./loading_provider-DnAejYMo.js";import"./date_time_formatters_provider-B-vZWfoJ.js";import"./locale_provider-BEfBJ-G2.js";import"./page_path_provider-BLt1qKxU.js";import"./now_provider-CdVpNbMd.js";import"./number_formatters_provider-Cj_9aXLE.js";import"./path_resolver_provider-DSNRN_OB.js";import{g as m,s}from"./data_table_shared-BzxzO9_U.js";import{m as i,i as p}from"./functional-DLuq-Zgx.js";import{a as n}from"./roll_ups_summary_data_table-Bwxw-A67.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-mJyUse9Y.js";import"./index-1NFWsmuN.js";import"./index-CGPMUsLj.js";import"./client-DG11ClFy.js";import"./skeleton_content-BTav3GN9.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-Dfg5k-Tp.js";import"./text-CEhLEmI-.js";import"./data_table-DmCU9zKE.js";import"./typography-DKmexolR.js";import"./higher_order-BZ-GvUz5.js";import"./chevron_up-Ke2o9v55.js";import"./svg_icon_base-CdfmCcAh.js";import"./link-B72a8BNx.js";import"./roll_up_simple-Dm69T6_h.js";import"./espresso_logo-OVqKyvu-.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
