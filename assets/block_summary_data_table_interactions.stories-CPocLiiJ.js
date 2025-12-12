import{j as o}from"./iframe-I4yCP4NU.js";import{D as m}from"./loading_provider-CstATCXD.js";import"./date_time_formatters_provider-DnsUBTX8.js";import"./locale_provider-CErGmAbV.js";import"./page_path_provider-FUPkNIoK.js";import"./now_provider-BJMkyC0g.js";import"./number_formatters_provider-B4pMjwPi.js";import"./path_resolver_provider-C7oDnXbF.js";import{g as i,s}from"./data_table_shared-BAKP7gQ-.js";import"./blocks-BWBQzLKI.js";import{P as p}from"./nodes-BW3vnLyv.js";import{m as n,i as l}from"./functional-CSbS9XJ4.js";import{B as c}from"./block_summary_data_table-Saw1CiuZ.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-CxeFvyvM.js";import"./index-CtCr44L0.js";import"./index-C5rye2NI.js";import"./client-CYItMId7.js";import"./monetary_value-CBH2RXSq.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./tagged_base64-CLbDmqUB.js";import"./base64-Pz9_wEqE.js";import"./skeleton_content-D2wyeEsn.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-efmudhUc.js";import"./copy_hex-CMDT5mVd.js";import"./array_buffer-C6cnUoAD.js";import"./copy_button-gUT264g6.js";import"./higher_order-mqQ14nIG.js";import"./check_circle_filled-6vpUhM8E.js";import"./svg_icon_base-FiNyuFYc.js";import"./copy-CF7cLfNz.js";/* empty css               */import"./date_time_text-CI8fzMqk.js";import"./hex_text-B5moOUup.js";import"./number_text-B5Ox6wzX.js";import"./data_table-BjO2HltM.js";import"./text-CEhLEmI-.js";import"./typography-C6Hxzndb.js";import"./chevron_up-COlPGcDD.js";import"./link-BcgA0920.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
