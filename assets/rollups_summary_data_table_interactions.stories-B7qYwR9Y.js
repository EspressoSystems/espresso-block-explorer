import{j as e}from"./iframe-CvdxTlUs.js";import{D as o}from"./loading_provider-Cmr501Z2.js";import"./date_time_formatters_provider-BKuJ0hEW.js";import"./locale_provider-Dxagrfa_.js";import"./page_path_provider-YGSPONyz.js";import"./now_provider-Bt5H53_t.js";import"./number_formatters_provider-D6bXYiGi.js";import"./path_resolver_provider-CjPcJbFk.js";import{g as m,s}from"./data_table_shared-BuJwngwM.js";import{m as i,i as p}from"./functional-DLuq-Zgx.js";import{a as n}from"./roll_ups_summary_data_table-CC89pN-X.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-CXCGEuUy.js";import"./index-CVOp5-IZ.js";import"./index-CWvyjRcX.js";import"./client-CUWSojTA.js";import"./skeleton_content-CniyB1k2.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-C6OVBCh4.js";import"./text-CEhLEmI-.js";import"./data_table-8sqNDofv.js";import"./typography-CiO7wglO.js";import"./higher_order-D3cZvTNS.js";import"./chevron_up-D6bEtNGN.js";import"./svg_icon_base-CPzfBOG-.js";import"./link-XNPG_srd.js";import"./roll_up_simple-BSw5Sk8J.js";import"./espresso_logo-CV3VxBSX.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
