import{j as o}from"./iframe-CMnlNZVY.js";import{D as m}from"./loading_provider-CDQmatE4.js";import"./date_time_formatters_provider-DBEnsNUl.js";import"./locale_provider-BdMkMFD6.js";import"./page_path_provider-BBjnTzQ1.js";import"./now_provider-Bm-WfiXb.js";import"./number_formatters_provider-fXsUJ3gc.js";import"./path_resolver_provider-CM-lLLot.js";import{g as i,s}from"./data_table_shared-Flr5xOHw.js";import"./blocks-5Re1x8yf.js";import{P as p}from"./nodes-UGwKe3sl.js";import{m as n,i as l}from"./functional-aFFbciHe.js";import{B as c}from"./block_summary_data_table-DUGCjE2_.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-BeEbU39k.js";import"./index-6p_kJ8eY.js";import"./index-dWiu48WL.js";import"./client-CXPUPldC.js";import"./monetary_value-B9zIXJUb.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./tagged_base64-CLbDmqUB.js";import"./base64-Pz9_wEqE.js";import"./skeleton_content-Dg5AgUY7.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-CSuCV_Ai.js";import"./copy_hex-IVbeQ5-H.js";import"./array_buffer-DJmzCn2r.js";import"./copy_button-Dd-3RrP9.js";import"./higher_order-CwufDn_N.js";import"./check_circle_filled-CDHiQHIQ.js";import"./svg_icon_base-DLdqNfMl.js";import"./copy-Caz9CDxX.js";/* empty css               */import"./date_time_text-C9NyDmvI.js";import"./hex_text-DzgNJ5W5.js";import"./number_text-D6vdtiOW.js";import"./data_table-CJ5guDsm.js";import"./text-CEhLEmI-.js";import"./typography-3_NTd_7n.js";import"./chevron_up-CxZ6ZQul.js";import"./link-Cr-ardMZ.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
