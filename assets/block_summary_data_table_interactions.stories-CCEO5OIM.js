import{j as o}from"./iframe-ClKDkTx9.js";import{D as m}from"./loading_provider-BA4zBxyH.js";import"./date_time_formatters_provider-Cf6wYALs.js";import"./locale_provider-DJPVjQlf.js";import"./page_path_provider-ZBtbZN9A.js";import"./now_provider-CbLkKTxk.js";import"./number_formatters_provider-Dzy7g4cY.js";import"./path_resolver_provider-DQmcKCeL.js";import{g as i,s}from"./data_table_shared-DgacbOuN.js";import"./blocks-BRbj-15H.js";import{P as p}from"./nodes-UGwKe3sl.js";import{m as n,i as l}from"./functional-aFFbciHe.js";import{B as c}from"./block_summary_data_table-iSB2dsBy.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-Cykdo6lV.js";import"./index-GLakHcs0.js";import"./index-L2MXTyI-.js";import"./client-CcWLmDfD.js";import"./monetary_value-CBH2RXSq.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./tagged_base64-CLbDmqUB.js";import"./base64-Pz9_wEqE.js";import"./skeleton_content-kY3mGp8K.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-CiN5bTtT.js";import"./copy_hex-BXRMrXt3.js";import"./array_buffer-DJmzCn2r.js";import"./copy_button-DumrgIxC.js";import"./higher_order-DGDN5Dfc.js";import"./check_circle_filled-CuxB0CvJ.js";import"./svg_icon_base-Ik10Mkci.js";import"./copy-CB9E4g7X.js";/* empty css               */import"./date_time_text-BzpapEyn.js";import"./hex_text-B_YXB2ec.js";import"./number_text-CYRmJkvB.js";import"./data_table-CRQlXWgA.js";import"./text-CEhLEmI-.js";import"./typography-BXZmVxaS.js";import"./chevron_up-D7LcXd8N.js";import"./link-L8ZhC1Mm.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
