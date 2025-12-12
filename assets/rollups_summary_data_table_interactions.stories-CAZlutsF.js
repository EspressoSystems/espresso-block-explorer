import{j as e}from"./iframe-I4yCP4NU.js";import{D as o}from"./loading_provider-CstATCXD.js";import"./date_time_formatters_provider-DnsUBTX8.js";import"./locale_provider-CErGmAbV.js";import"./page_path_provider-FUPkNIoK.js";import"./now_provider-BJMkyC0g.js";import"./number_formatters_provider-B4pMjwPi.js";import"./path_resolver_provider-C7oDnXbF.js";import{g as m,s}from"./data_table_shared-BAKP7gQ-.js";import{m as i,i as p}from"./functional-CSbS9XJ4.js";import{a as n}from"./roll_ups_summary_data_table-BHv0II6r.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-CxeFvyvM.js";import"./index-CtCr44L0.js";import"./index-C5rye2NI.js";import"./client-CYItMId7.js";import"./skeleton_content-D2wyeEsn.js";import"./block_summary-CBGYsBbN.js";import"./data-QnfQTY7I.js";import"./number_text-B5Ox6wzX.js";import"./text-CEhLEmI-.js";import"./data_table-BjO2HltM.js";import"./typography-C6Hxzndb.js";import"./higher_order-mqQ14nIG.js";import"./chevron_up-COlPGcDD.js";import"./svg_icon_base-FiNyuFYc.js";import"./link-BcgA0920.js";import"./roll_up_simple-Dal5-OIX.js";import"./espresso_logo-Emh2xXD7.js";const l=t=>e.jsx(o.Provider,{value:t.rollupSummaries,children:e.jsx(n,{})}),M={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(p(20),t=>({namespace:t,transactions:t*2}))),a={args:{rollupSummaries:c},play:async({canvasElement:t,step:r})=>{await r("retrieve the data table element",async()=>{await m(t)}),await r("sort all columns",async()=>{await s(t)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
