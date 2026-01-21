import{j as e}from"./iframe-CkJJG84G.js";import{g as o,s as m}from"./data_table_shared-Bgkfz12E.js";import{D as s}from"./data_provider-BOXyJyDw.js";import{m as i,i as n}from"./functional-6Z2QHHX7.js";import{R as l}from"./roll_ups_summary_data_table-Dmi1CyNp.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BpJmwcuS.js";import"./index-lJVqr-aj.js";import"./index-C3BZzNqw.js";import"./client-C5DAk86I.js";import"./missing_element_error-BIT--q2G.js";import"./string-DDfX_5jt.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-B_G0yp4x.js";import"./data_table-BiQdoL7h.js";import"./text-CEhLEmI-.js";import"./chevron_up-D9eLAgzb.js";import"./svg_icon_base-B8zVWwnL.js";import"./higher_order-BCKgBdih.js";import"./skeleton_content-CH2aYyTn.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-B9hdqY8d.js";import"./number_formatters_provider-Ch-9Dh1T.js";import"./locale_provider-D4HbO8u7.js";import"./link-ljxhuagx.js";import"./roll_up_simple-CIMAw6Pv.js";import"./espresso_logo-Sfg6QlkJ.js";const p=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(l,{})}),F={title:"components/Data/Rollups Summary Data Table/Interactions",component:p,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
