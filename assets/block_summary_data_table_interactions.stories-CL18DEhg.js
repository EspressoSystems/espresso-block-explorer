import{j as o}from"./iframe-DxMCvlUh.js";import{D as m}from"./loading_provider-Df0mCD4_.js";import"./date_time_formatters_provider-DI9LZ6y4.js";import"./locale_provider-EJeatQlK.js";import"./page_path_provider-rK8gQ6lh.js";import"./now_provider-KL7TCSJM.js";import"./number_formatters_provider-DQjo9vlS.js";import"./path_resolver_provider-BxmbrlnP.js";import{g as i,s}from"./data_table_shared-D2I2V1o4.js";import"./blocks-C2sSQJmD.js";import{P as p}from"./nodes-BPkpfAJX.js";import{m as n,i as l}from"./functional-CSHHasco.js";import{B as c}from"./block_summary_data_table-Cid9V1Fw.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-CqVqGmm5.js";import"./index-S_Fpd5t-.js";import"./index-KSdcX99f.js";import"./client-BIN2nFOj.js";import"./monetary_value-CGCIrnLJ.js";import"./bigint-Rw5otYDY.js";import"./data-QnfQTY7I.js";import"./tagged_base64-DlPC3yRR.js";import"./base64-Dpbg5EzT.js";import"./skeleton_content-BfZgbbNq.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-DeHJXIYi.js";import"./copy_hex-DDUL6eZz.js";import"./array_buffer-CekOYGOQ.js";import"./copy_button-CEfYl7CI.js";import"./higher_order-DagK1XCO.js";import"./check_circle_filled-COGkqefa.js";import"./svg_icon_base-BtviVFgm.js";import"./copy-sHvp9Qji.js";/* empty css               */import"./date_time_text-CCfbQ2QT.js";import"./hex_text-Cu8EIONB.js";import"./number_text-DQRO7zl6.js";import"./data_table-pY2tn7I_.js";import"./text-CEhLEmI-.js";import"./typography-Cf3UQRAk.js";import"./chevron_up-DNEq2bw5.js";import"./link-BXUaQY1C.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
