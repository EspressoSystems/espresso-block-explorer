import{j as o}from"./iframe-CUSUi-ol.js";import{D as m}from"./loading_provider-DxXUP5j3.js";import"./date_time_formatters_provider-VX2lHb9g.js";import"./locale_provider-BxbKA3wd.js";import"./page_path_provider-DlC5aC3g.js";import"./now_provider-DcSrXJuC.js";import"./number_formatters_provider-DmpWQro_.js";import"./path_resolver_provider-B1crnTdb.js";import{g as i,s}from"./data_table_shared-C2gCq_Yc.js";import"./blocks-CHAE2YcB.js";import{P as p}from"./nodes-UGwKe3sl.js";import{m as n,i as l}from"./functional-aFFbciHe.js";import{B as c}from"./block_summary_data_table-CM8zVngy.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-CxCeA-0i.js";import"./index-BslH2gUQ.js";import"./index-BTx48-9-.js";import"./client-TzQjO8Ka.js";import"./monetary_value-B9zIXJUb.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./tagged_base64-CLbDmqUB.js";import"./base64-Pz9_wEqE.js";import"./skeleton_content-BzNMtOGK.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-cKObWzK_.js";import"./copy_hex-BPOODb6-.js";import"./array_buffer-DJmzCn2r.js";import"./copy_button-DSITBYtb.js";import"./higher_order-CE7HgP1S.js";import"./check_circle_filled-CKsYdq35.js";import"./svg_icon_base-HWbYxe0V.js";import"./copy-CKUBvaav.js";/* empty css               */import"./date_time_text-CeEXUMSd.js";import"./hex_text-k2vDmWmO.js";import"./number_text-YBM4-nOg.js";import"./data_table-dcZ5G3R1.js";import"./text-CEhLEmI-.js";import"./typography-1SaDHsys.js";import"./chevron_up-BSdBbTnB.js";import"./link-DJhoy_in.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
