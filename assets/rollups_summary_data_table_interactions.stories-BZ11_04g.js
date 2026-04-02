import{j as e}from"./iframe-CmLG4Pok.js";import{g as o,s as m}from"./data_table_shared-DomwqaDL.js";import{D as s}from"./data_provider-dnPZr8Zm.js";import{m as i,i as n}from"./functional-CHI4evRY.js";import{R as p}from"./roll_ups_summary_data_table-VydlsKO7.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-D07X3gEr.js";import"./index-BgBvZsR8.js";import"./index-CrMXpkeL.js";import"./client-nqOaR84a.js";import"./missing_element_error-BMmla67R.js";import"./string-BGbpIfpT.js";import"./assert-BWgKxNW2.js";import"./path_resolver_provider-Txf-h2eU.js";import"./data_table-BhRISOED.js";import"./text-CEhLEmI-.js";import"./chevron_up-BztjpIQ4.js";import"./svg_icon_base-B57ylFbh.js";import"./higher_order-aMxBsUlx.js";import"./skeleton_content-CSUHDwQ0.js";import"./block_summary-CBGYsBbN.js";import"./data-DkoEaPI0.js";import"./number_text-B1GPWJ_a.js";import"./number_formatters_provider-CF2CsDka.js";import"./locale_provider-Be6w3M1T.js";import"./link-B6ZWobqn.js";import"./roll_up_simple-CRctzn9f.js";import"./espresso-B78Cpgqq.js";import"./espresso_logo-Cv79EDYn.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
