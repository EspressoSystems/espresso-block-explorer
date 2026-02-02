import{j as e}from"./iframe-lCBbYCEU.js";import{g as o,s as m}from"./data_table_shared-BXRhLs5m.js";import{D as s}from"./data_provider-JNzMXrDd.js";import{m as i,i as n}from"./functional-6Z2QHHX7.js";import{R as l}from"./roll_ups_summary_data_table-DDwvT0qE.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-DPsyTmJB.js";import"./index-DmtrKp90.js";import"./index-D-VaSj31.js";import"./client-BJ4MhKIH.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-BQqhBI_r.js";import"./data_table-CkewT-se.js";import"./text-CEhLEmI-.js";import"./chevron_up-JQFOFxdg.js";import"./svg_icon_base-K_bknCBI.js";import"./higher_order-B24NaQsc.js";import"./skeleton_content-uXbBjkPV.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-C1feg6s_.js";import"./number_formatters_provider-n3Owoqke.js";import"./locale_provider-CivmyzXf.js";import"./link-BP2mDpKa.js";import"./roll_up_simple-B-EATf-a.js";import"./espresso_logo-CbXS2B1E.js";const p=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(l,{})}),F={title:"components/Data/Rollups Summary Data Table/Interactions",component:p,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const G=["Interactions"];export{t as Interactions,G as __namedExportsOrder,F as default};
