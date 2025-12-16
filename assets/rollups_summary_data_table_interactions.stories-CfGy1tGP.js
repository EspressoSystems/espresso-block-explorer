import{j as e}from"./iframe-ClKDkTx9.js";import{D as o}from"./loading_provider-BA4zBxyH.js";import"./date_time_formatters_provider-Cf6wYALs.js";import"./locale_provider-DJPVjQlf.js";import"./page_path_provider-ZBtbZN9A.js";import"./now_provider-CbLkKTxk.js";import"./number_formatters_provider-Dzy7g4cY.js";import"./path_resolver_provider-DQmcKCeL.js";import{g as m,s}from"./data_table_shared-DgacbOuN.js";import{m as i,i as p}from"./functional-aFFbciHe.js";import{a as n}from"./roll_ups_summary_data_table-Dq06w_YR.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-Cykdo6lV.js";import"./index-GLakHcs0.js";import"./index-L2MXTyI-.js";import"./client-CcWLmDfD.js";import"./skeleton_content-kY3mGp8K.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-CYRmJkvB.js";import"./text-CEhLEmI-.js";import"./data_table-CRQlXWgA.js";import"./typography-BXZmVxaS.js";import"./higher_order-DGDN5Dfc.js";import"./chevron_up-D7LcXd8N.js";import"./svg_icon_base-Ik10Mkci.js";import"./link-L8ZhC1Mm.js";import"./roll_up_simple-CmdD5KM8.js";import"./espresso_logo-BE-nd3vZ.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
