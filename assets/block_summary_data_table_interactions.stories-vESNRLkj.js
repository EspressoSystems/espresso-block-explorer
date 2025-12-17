import{j as o}from"./iframe-BxVd9QhJ.js";import{D as m}from"./loading_provider-CCQwrYtN.js";import"./date_time_formatters_provider-6IxjHYrQ.js";import"./locale_provider-A_jZKLiE.js";import"./page_path_provider-DZsBij4v.js";import"./now_provider-RSgZaDSQ.js";import"./number_formatters_provider-opkF2gH_.js";import"./path_resolver_provider-BhfCU0xQ.js";import{g as i,s}from"./data_table_shared-C_uabt2T.js";import"./blocks-ofKHVHVs.js";import{P as p}from"./nodes-UGwKe3sl.js";import{m as n,i as l}from"./functional-aFFbciHe.js";import{B as c}from"./block_summary_data_table-b5_9Fybx.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-BxFI8Oap.js";import"./index-Cj4vgk-l.js";import"./index-COF4ZVwN.js";import"./client-DZCpopPS.js";import"./monetary_value-CBH2RXSq.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./tagged_base64-CLbDmqUB.js";import"./base64-Pz9_wEqE.js";import"./skeleton_content-YVZISt7j.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-BltyVUzv.js";import"./copy_hex-CLegGNUN.js";import"./array_buffer-DJmzCn2r.js";import"./copy_button-CSA9keM_.js";import"./higher_order-DG5Lsi6K.js";import"./check_circle_filled-DQNrAIZw.js";import"./svg_icon_base-C9Bpn8DM.js";import"./copy-ycI-DGxb.js";/* empty css               */import"./date_time_text-DRIeULjZ.js";import"./hex_text-T7hpqTKJ.js";import"./number_text-DKh0a-kQ.js";import"./data_table-CoGfiM9S.js";import"./text-CEhLEmI-.js";import"./typography-BUc9z9pd.js";import"./chevron_up-zhD7NoAx.js";import"./link-DIO84S1a.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
