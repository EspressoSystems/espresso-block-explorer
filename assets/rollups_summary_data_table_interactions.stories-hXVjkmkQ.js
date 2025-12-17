import{j as e}from"./iframe-CA0H6dFm.js";import{D as o}from"./loading_provider-Bop1FT1r.js";import"./date_time_formatters_provider-iQnZ9iG6.js";import"./locale_provider-Do7FCuk7.js";import"./page_path_provider-DyEC-PMZ.js";import"./now_provider-yxwAovoR.js";import"./number_formatters_provider-Dn_m9GFj.js";import"./path_resolver_provider-k_ObrSQz.js";import{g as m,s}from"./data_table_shared-CXzYYHr3.js";import{m as i,i as p}from"./functional-aFFbciHe.js";import{a as n}from"./roll_ups_summary_data_table-c6t9VIcz.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-B_UvOKDk.js";import"./index-DawEcZgu.js";import"./index-DI5NdN2T.js";import"./client-BnoBeERF.js";import"./skeleton_content-BYfFOyG1.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-Bo37snxl.js";import"./text-CEhLEmI-.js";import"./data_table-CZoEcMFa.js";import"./typography-BMAv5PTs.js";import"./higher_order-dlQKFR8S.js";import"./chevron_up-CWMk1tu5.js";import"./svg_icon_base-CBYYQSYN.js";import"./link-CPQMPThB.js";import"./roll_up_simple-D_lKNGc9.js";import"./espresso_logo-Db1nD6QE.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
