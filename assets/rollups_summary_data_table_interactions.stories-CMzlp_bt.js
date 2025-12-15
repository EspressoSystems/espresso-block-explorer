import{j as e}from"./iframe-BQJVLOru.js";import{D as o}from"./loading_provider-Ch6GRO2a.js";import"./date_time_formatters_provider-BY4kdJV8.js";import"./locale_provider-pDxAzo83.js";import"./page_path_provider-DhmC-klQ.js";import"./now_provider-40HeobFn.js";import"./number_formatters_provider-CsOclp8o.js";import"./path_resolver_provider-DQcp-a-t.js";import{g as m,s}from"./data_table_shared-DvIHuude.js";import{m as i,i as p}from"./functional-CSbS9XJ4.js";import{a as n}from"./roll_ups_summary_data_table-w0fBh9tO.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-BnwdB3jq.js";import"./index-CgcV4qXZ.js";import"./index-B0i1z4Ao.js";import"./client-gupz7Hhc.js";import"./skeleton_content-Ql-lpo3S.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-B_bUxGq2.js";import"./text-CEhLEmI-.js";import"./data_table-C_bezsQL.js";import"./typography-BobbvlA3.js";import"./higher_order-CGGGWKBx.js";import"./chevron_up-6F1foQVT.js";import"./svg_icon_base-ClkAJAYe.js";import"./link-BZb4n-kD.js";import"./roll_up_simple-GOmK4zZX.js";import"./espresso_logo-1Ww7O42p.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
