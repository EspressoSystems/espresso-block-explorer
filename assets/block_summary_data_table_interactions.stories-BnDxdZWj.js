import{j as o}from"./iframe-B8eqWRN6.js";import{D as m}from"./loading_provider-UILi0oHh.js";import"./date_time_formatters_provider-CHxfXojh.js";import"./locale_provider-CkkM0mjB.js";import"./page_path_provider-XienNpqp.js";import"./now_provider-DFrPQ9fr.js";import"./number_formatters_provider-CulVFl8b.js";import"./path_resolver_provider-DdGZMLHv.js";import{g as i,s}from"./data_table_shared-B18X-Zgo.js";import"./blocks-l18Mm_lv.js";import{P as p}from"./nodes-DkeEh4bp.js";import{m as n,i as l}from"./functional-CRC6BLve.js";import{B as c}from"./block_summary_data_table-CLLN5leb.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./unimplemented_error-Bu4XFSEf.js";import"./react.esm-D4O7I1bM.js";import"./index-CmUZj1kq.js";import"./index-EMxXJ5Sn.js";import"./client-sBu5a9uz.js";import"./monetary_value-DtPxvzZx.js";import"./bigint-D18ZzuZl.js";import"./data-QnfQTY7I.js";import"./tagged_base64-DQyXh8_2.js";import"./base64-CraqfgLB.js";import"./skeleton_content-CuoHXIQj.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-9rvg5Wz5.js";import"./copy_hex-BYTZithj.js";import"./array_buffer-T9JUf6pH.js";import"./copy_button-CcK8wkLR.js";import"./higher_order-r1uOk2qL.js";import"./check_circle_filled-BVVX_n5V.js";import"./svg_icon_base-CoeGQ4lo.js";import"./copy-Bzf9GLJM.js";/* empty css               */import"./date_time_text-BxVHbps2.js";import"./hex_text-DIzizrVn.js";import"./number_text-D4VvN4Vs.js";import"./data_table--WiQFAS6.js";import"./text-CEhLEmI-.js";import"./typography-DJsfTh_U.js";import"./chevron_up-BTggqdTf.js";import"./link-BzLMVWby.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    blockSummaries: blockSummaries
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
}`,...r.parameters?.docs?.source}}};const st=["Interactions"];export{r as Interactions,st as __namedExportsOrder,it as default};
