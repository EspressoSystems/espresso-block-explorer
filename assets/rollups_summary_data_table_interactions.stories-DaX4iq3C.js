import{j as e}from"./iframe-DVElLztL.js";import{g as o,s as m}from"./data_table_shared-BkcUiyDp.js";import{D as s}from"./data_provider-8bonweiP.js";import{m as i,i as n}from"./functional-Ci6o84Cp.js";import{R as p}from"./roll_ups_summary_data_table-D6tK7Udr.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-pmhZ34LS.js";import"./index-CBEmrpSc.js";import"./index-C0xT9PqR.js";import"./client-Dcf09WDq.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-DBH0FUs2.js";import"./data_table-B4k9tCFn.js";import"./text-CEhLEmI-.js";import"./chevron_up-C0hUPjmj.js";import"./svg_icon_base-CkxnyFHT.js";import"./higher_order-D3ayJwRx.js";import"./skeleton_content-CFCEKyZq.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-Di5ybNHr.js";import"./number_formatters_provider-amKtj06S.js";import"./locale_provider-DQ-ADSEU.js";import"./link-DAHaIVd3.js";import"./roll_up_simple-BmTsrBLt.js";import"./espresso-BfXbzjCW.js";import"./espresso_logo-C5OThuFR.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const J=["Interactions"];export{t as Interactions,J as __namedExportsOrder,G as default};
