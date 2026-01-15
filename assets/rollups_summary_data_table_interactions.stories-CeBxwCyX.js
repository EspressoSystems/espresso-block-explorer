import{j as e}from"./iframe-ChMM8fie.js";import{g as o,s as m}from"./data_table_shared-D10kuCBF.js";import{D as s}from"./data_provider-DipucN8t.js";import{m as i,i as n}from"./functional-DT4GooI6.js";import{R as p}from"./roll_ups_summary_data_table-D58PvG0Y.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CDELKqQ0.js";import"./index-B53Fy-CQ.js";import"./index-Cv4Z6q07.js";import"./client-laTrBQ9W.js";import"./missing_element_error-BOfgw7mk.js";import"./string-DoEjSKSD.js";import"./assert-B11BgmXM.js";import"./path_resolver_provider-Bi7OwYmA.js";import"./data_table-BhlvqEva.js";import"./text-CEhLEmI-.js";import"./chevron_up-4QltwyBf.js";import"./svg_icon_base-CS1Nu1nM.js";import"./higher_order-BDzlKa4m.js";import"./skeleton_content-D_9h32no.js";import"./block_summary-CBGYsBbN.js";import"./data-D5p7UK42.js";import"./number_text-CahUOGB6.js";import"./number_formatters_provider-CudGGieU.js";import"./locale_provider--Ln2ac7i.js";import"./link-Cs7jL8in.js";import"./roll_up_simple-CnuekN6z.js";import"./espresso-CsXSlGY9.js";import"./espresso_logo-DVDi9sh1.js";const l=a=>e.jsx(s.Provider,{value:a.rollupSummaries,children:e.jsx(p,{})}),G={title:"components/Data/Rollups Summary Data Table/Interactions",component:l,args:{rollupSummaries:[]},argTypes:{rollupSummaries:{control:"object"}}},c=Array.from(i(n(20),a=>({namespace:a,transactions:a*2}))),t={args:{rollupSummaries:c},play:async({canvasElement:a,step:r})=>{await r("retrieve the data table element",async()=>{await o(a)}),await r("sort all columns",async()=>{await m(a)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
