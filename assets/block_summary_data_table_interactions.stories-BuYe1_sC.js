import{j as o}from"./iframe-3Z2fgCPY.js";import{D as m}from"./loading_provider-Ur2XoJ-b.js";import"./date_time_formatters_provider-Dd-pwKzP.js";import"./locale_provider-B-1mGrFX.js";import"./page_path_provider-B_tgBqRU.js";import"./now_provider-5ZcTXbz-.js";import"./number_formatters_provider-C17xfnZz.js";import"./path_resolver_provider-BSMezMxn.js";import{g as i,s}from"./data_table_shared-D0Fg6I40.js";import"./blocks-h-zMY_bP.js";import{P as p}from"./nodes-BtP9A9m5.js";import{m as n,i as l}from"./functional-DLuq-Zgx.js";import{B as c}from"./block_summary_data_table-BbB2lA9S.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bky0HlCJ.js";import"./string-DO2hqbbz.js";import"./assert-B20_bgky.js";import"./unimplemented_error-BGJ4_cDZ.js";import"./react.esm-B8zBXy6I.js";import"./index-CBJu0xp2.js";import"./index-E3DUaXpY.js";import"./client-KGSUeVuu.js";import"./monetary_value-CGCIrnLJ.js";import"./bigint-Rw5otYDY.js";import"./data-Cpeha0UW.js";import"./tagged_base64-DlPC3yRR.js";import"./base64-Dpbg5EzT.js";import"./skeleton_content-DOTDChQ8.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-CC4RIhaz.js";import"./copy_hex-BUJvkFZN.js";import"./array_buffer-DYdk84gS.js";import"./copy_button-Ba-sGIOk.js";import"./higher_order-HipsDJR4.js";import"./check_circle_filled-DDgAunYF.js";import"./svg_icon_base-VH6Zm-Te.js";import"./copy-BAAgR512.js";/* empty css               */import"./date_time_text-BcZpdQCq.js";import"./hex_text-UFGP4wTk.js";import"./number_text-BJeOQPuJ.js";import"./data_table-DXuNLSIj.js";import"./text-CEhLEmI-.js";import"./typography-CaQwexFI.js";import"./chevron_up-BTjh4m5r.js";import"./link-B59nsfmY.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
