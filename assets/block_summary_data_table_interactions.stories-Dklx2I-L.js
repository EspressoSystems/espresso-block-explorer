import{j as o}from"./iframe-_8SXQwLA.js";import{D as m}from"./loading_provider-coYNHPqW.js";import"./date_time_formatters_provider-BPVee3-W.js";import"./locale_provider-I9PT24Uq.js";import"./page_path_provider-ZcVCYOd8.js";import"./now_provider-DzZh0NgS.js";import"./number_formatters_provider-DMKj1Rdt.js";import"./path_resolver_provider-CwUpyokH.js";import{g as i,s}from"./data_table_shared-JGERveto.js";import"./blocks-qkPXeA9w.js";import{P as p}from"./nodes-UGwKe3sl.js";import{m as n,i as l}from"./functional-aFFbciHe.js";import{B as c}from"./block_summary_data_table-CZbOHbj1.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-R7man0D-.js";import"./index-B5tnBE35.js";import"./index-B-oIjzzz.js";import"./client-qXIdXvbr.js";import"./monetary_value-B9zIXJUb.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./tagged_base64-CLbDmqUB.js";import"./base64-Pz9_wEqE.js";import"./skeleton_content-BF7nRVJr.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-BkODXE7C.js";import"./copy_hex-BO0Fj2eU.js";import"./array_buffer-DJmzCn2r.js";import"./copy_button-DIdQvTB7.js";import"./higher_order-CRjCZC6M.js";import"./check_circle_filled-BmH2gJ6J.js";import"./svg_icon_base-CyGEXINF.js";import"./copy-RJwhQmOl.js";/* empty css               */import"./date_time_text-70JgumWw.js";import"./hex_text-BfVG584z.js";import"./number_text-CFU9rp03.js";import"./data_table-DHBgeeq-.js";import"./text-CEhLEmI-.js";import"./typography-75xCdHDu.js";import"./chevron_up-Dz5W02Mo.js";import"./link-Bk51UXDT.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
