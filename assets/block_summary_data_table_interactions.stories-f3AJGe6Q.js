import{j as o}from"./iframe-BQJVLOru.js";import{D as m}from"./loading_provider-Ch6GRO2a.js";import"./date_time_formatters_provider-BY4kdJV8.js";import"./locale_provider-pDxAzo83.js";import"./page_path_provider-DhmC-klQ.js";import"./now_provider-40HeobFn.js";import"./number_formatters_provider-CsOclp8o.js";import"./path_resolver_provider-DQcp-a-t.js";import{g as i,s}from"./data_table_shared-DvIHuude.js";import"./blocks-CuN_SkNp.js";import{P as p}from"./nodes-BW3vnLyv.js";import{m as n,i as l}from"./functional-CSbS9XJ4.js";import{B as c}from"./block_summary_data_table-DN_AlP7c.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-BnwdB3jq.js";import"./index-CgcV4qXZ.js";import"./index-B0i1z4Ao.js";import"./client-gupz7Hhc.js";import"./monetary_value-CBH2RXSq.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./tagged_base64-CLbDmqUB.js";import"./base64-Pz9_wEqE.js";import"./skeleton_content-Ql-lpo3S.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-albCgYra.js";import"./copy_hex-CyRzHy0E.js";import"./array_buffer-C6cnUoAD.js";import"./copy_button-DcUDNJt9.js";import"./higher_order-CGGGWKBx.js";import"./check_circle_filled-BBNFWEKP.js";import"./svg_icon_base-ClkAJAYe.js";import"./copy-dqXCVCBe.js";/* empty css               */import"./date_time_text-DVcFOhyI.js";import"./hex_text-BTLimRbA.js";import"./number_text-B_bUxGq2.js";import"./data_table-C_bezsQL.js";import"./text-CEhLEmI-.js";import"./typography-BobbvlA3.js";import"./chevron_up-6F1foQVT.js";import"./link-BZb4n-kD.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
