import{j as o}from"./iframe-DERpcsaj.js";import{D as m}from"./loading_provider-DWAOa2Po.js";import"./date_time_formatters_provider-4OV54txv.js";import"./locale_provider-BSCycvT5.js";import"./page_path_provider-CdVsPBlv.js";import"./now_provider-Du-h2Rp4.js";import"./number_formatters_provider-CAdhGcCB.js";import"./path_resolver_provider-yTnYQJl0.js";import{g as i,s}from"./data_table_shared-BEdyb-Il.js";import"./blocks-D-RxNLhz.js";import{P as p}from"./nodes-BGjGUOjj.js";import{m as n,i as l}from"./functional-AkqJadlP.js";import{B as c}from"./block_summary_data_table-CdYtAyMi.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-Bv32e7ki.js";import"./string-BMw5G0Eo.js";import"./assert-B20_bgky.js";import"./unimplemented_error-Bu4XFSEf.js";import"./react.esm-BCrxck9h.js";import"./index-Blc0c5dJ.js";import"./index-BMZNw6o_.js";import"./client-BRIjTmLC.js";import"./monetary_value-DtPxvzZx.js";import"./bigint-D18ZzuZl.js";import"./data-QnfQTY7I.js";import"./tagged_base64-DQyXh8_2.js";import"./base64-CraqfgLB.js";import"./skeleton_content-D1PJ_eX5.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-DPMJnSh0.js";import"./copy_hex-RceDw8c8.js";import"./array_buffer-CQ8t_IxW.js";import"./copy_button-Bml6zmCr.js";import"./higher_order-DzHtQVvV.js";import"./check_circle_filled-DonIuhOn.js";import"./svg_icon_base-BSoegY8q.js";import"./copy-G-i-gDej.js";/* empty css               */import"./date_time_text-xQ32h6XM.js";import"./hex_text-DEE_C5oi.js";import"./number_text-CWqYRbqG.js";import"./data_table-Cz-rzykX.js";import"./text-CEhLEmI-.js";import"./typography-Dj8C4yvB.js";import"./chevron_up-D1pFdZoM.js";import"./link-Ci1XeN4i.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
