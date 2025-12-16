import{j as o}from"./iframe-NIO84YtG.js";import{D as m}from"./loading_provider-DKk4mEKX.js";import"./date_time_formatters_provider-DtoU_Lel.js";import"./locale_provider-BToOAThm.js";import"./page_path_provider-BsYrj1YB.js";import"./now_provider-DhUBwSdf.js";import"./number_formatters_provider-Cs1RR9ei.js";import"./path_resolver_provider-ozKsNWj3.js";import{g as i,s}from"./data_table_shared-k7YomRC9.js";import"./blocks-Df0B4e4H.js";import{P as p}from"./nodes-UGwKe3sl.js";import{m as n,i as l}from"./functional-aFFbciHe.js";import{B as c}from"./block_summary_data_table-DEKumhHF.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-CmaPJcyU.js";import"./index-Ck50nEkD.js";import"./index-C4dssNlT.js";import"./client-CQBnCKjl.js";import"./monetary_value-CBH2RXSq.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./tagged_base64-CLbDmqUB.js";import"./base64-Pz9_wEqE.js";import"./skeleton_content-B0jttthw.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-DXlCrlVC.js";import"./copy_hex-DsZ6o7za.js";import"./array_buffer-DJmzCn2r.js";import"./copy_button-BTAuXDSY.js";import"./higher_order-D0pXbT2F.js";import"./check_circle_filled-CLnTTrWr.js";import"./svg_icon_base-BtJbuG48.js";import"./copy-BUB2txhX.js";/* empty css               */import"./date_time_text-CJikdgtU.js";import"./hex_text-DvAz1t7V.js";import"./number_text-B6VPapgb.js";import"./data_table-ChVJ73c8.js";import"./text-CEhLEmI-.js";import"./typography-knZYGk3h.js";import"./chevron_up-DObhM6Sz.js";import"./link-BLp8HdBr.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
