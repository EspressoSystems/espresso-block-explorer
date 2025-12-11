import{j as o}from"./iframe-D38n0YpH.js";import{D as m}from"./loading_provider-CmIKNCgq.js";import"./date_time_formatters_provider-C_Xcb1Og.js";import"./locale_provider-DzT1QKu6.js";import"./page_path_provider-C5mOuAiV.js";import"./now_provider-DY018Nl3.js";import"./number_formatters_provider-ByDysz5-.js";import"./path_resolver_provider-DkcsmNfF.js";import{g as i,s}from"./data_table_shared-lGRIXLO2.js";import"./blocks-DWlb3Jqu.js";import{P as p}from"./nodes-BGjGUOjj.js";import{m as n,i as l}from"./functional-AkqJadlP.js";import{B as c}from"./block_summary_data_table-DyxOYeby.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./unimplemented_error-Bu4XFSEf.js";import"./react.esm-5MOUnv-I.js";import"./index-BQAHaO3b.js";import"./index-b2ucKIM2.js";import"./client-Cormy-O0.js";import"./monetary_value-DtPxvzZx.js";import"./bigint-D18ZzuZl.js";import"./data-QnfQTY7I.js";import"./tagged_base64-DQyXh8_2.js";import"./base64-CraqfgLB.js";import"./skeleton_content-BFqgBQHP.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-B_ZGQaYX.js";import"./copy_hex-Ci6gPGeT.js";import"./array_buffer-CQ8t_IxW.js";import"./copy_button-DFqAvgi0.js";import"./higher_order-xjg9P6xC.js";import"./check_circle_filled-CUn6gAdy.js";import"./svg_icon_base-DTyOsi0d.js";import"./copy-DSARhWHi.js";/* empty css               */import"./date_time_text-BYKdFTsT.js";import"./hex_text-DA_W3sj6.js";import"./number_text-BXk_sP1g.js";import"./data_table-x2NQkZcy.js";import"./text-CEhLEmI-.js";import"./typography-91BC-7Aj.js";import"./chevron_up-CR5osNpr.js";import"./link-Dpteqe9q.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
