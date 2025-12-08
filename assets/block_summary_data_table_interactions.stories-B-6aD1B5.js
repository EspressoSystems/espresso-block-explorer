import{j as o}from"./iframe-BD1yaix1.js";import{D as m}from"./loading_provider-BbzSpk-c.js";import"./date_time_formatters_provider-D85-FJC7.js";import"./locale_provider-CMpeMO95.js";import"./page_path_provider-5HsnBsq2.js";import"./now_provider-BiYKTb9R.js";import"./number_formatters_provider-CYQ6aY_k.js";import"./path_resolver_provider-7jpIaJCk.js";import{g as i,s}from"./data_table_shared-BG_i13PE.js";import"./blocks-ByV96TRh.js";import{P as p}from"./nodes-BtP9A9m5.js";import{m as n,i as l}from"./functional-DLuq-Zgx.js";import{B as c}from"./block_summary_data_table-CCyOV9cD.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-D7jH-8cm.js";import"./index-DB82ngbe.js";import"./index-C8rR8fZL.js";import"./client-DFM34XNO.js";import"./monetary_value-CGCIrnLJ.js";import"./bigint-Rw5otYDY.js";import"./data-QnfQTY7I.js";import"./tagged_base64-DlPC3yRR.js";import"./base64-Dpbg5EzT.js";import"./skeleton_content-D9B9Vsd-.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-Dq0iPJZS.js";import"./copy_hex-d0DTV1iG.js";import"./array_buffer-DYdk84gS.js";import"./copy_button-yRgUblgX.js";import"./higher_order-T0GH9dDo.js";import"./check_circle_filled-DJQh71hH.js";import"./svg_icon_base-COhmG2Uq.js";import"./copy-CRo-ZtnZ.js";/* empty css               */import"./date_time_text-DR_8S3xN.js";import"./hex_text-CH_nbHML.js";import"./number_text-hxKhlidF.js";import"./data_table-EFbEfsRt.js";import"./text-CEhLEmI-.js";import"./typography-r90yo729.js";import"./chevron_up-BOvwN3J3.js";import"./link-CiXs1UM0.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
