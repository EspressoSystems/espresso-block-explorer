import{j as o}from"./iframe-BbF3Syj1.js";import{D as m}from"./loading_provider-DEd-giv5.js";import"./date_time_formatters_provider-BCl3flcb.js";import"./locale_provider-De2PuuUV.js";import"./page_path_provider-DFntaqal.js";import"./now_provider-B6bWrODL.js";import"./number_formatters_provider-DOen9m4S.js";import"./path_resolver_provider-rPfG7hHk.js";import{g as i,s}from"./data_table_shared-BEWASsEA.js";import"./blocks-P1waaH9F.js";import{P as p}from"./nodes-DkeEh4bp.js";import{m as n,i as l}from"./functional-CRC6BLve.js";import{B as c}from"./block_summary_data_table-Ti67tndz.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./unimplemented_error-Bu4XFSEf.js";import"./react.esm-Cbvut28h.js";import"./index-8H9Cz35g.js";import"./index-CUKlM6e7.js";import"./client-BQV42wdX.js";import"./monetary_value-DtPxvzZx.js";import"./bigint-D18ZzuZl.js";import"./data-QnfQTY7I.js";import"./tagged_base64-DQyXh8_2.js";import"./base64-CraqfgLB.js";import"./skeleton_content-BRPUJFb-.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-DZp8S5pw.js";import"./copy_hex-CIch3Fzf.js";import"./array_buffer-T9JUf6pH.js";import"./copy_button-XgccnUyj.js";import"./higher_order-P_eSrgQE.js";import"./check_circle_filled-BWA5Es7Z.js";import"./svg_icon_base-BTNiSFJX.js";import"./copy-CKx4zh30.js";/* empty css               */import"./date_time_text-DzqzJcq0.js";import"./hex_text-B6LXlTWD.js";import"./number_text-DFd3FJlE.js";import"./data_table-CEb_xGYK.js";import"./text-CEhLEmI-.js";import"./typography-B0b9ZxV3.js";import"./chevron_up-B0nn2pno.js";import"./link-BuygIwbt.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
