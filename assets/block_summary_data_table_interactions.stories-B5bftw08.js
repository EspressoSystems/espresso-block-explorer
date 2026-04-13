import{j as a}from"./iframe-Da-pRdj_.js";import{g as m,s as i}from"./data_table_shared-DJlthJZK.js";import{D as p}from"./data_provider-DT5b-p5f.js";import"./blocks-36ZEPcvJ.js";import{P as s}from"./nodes-BsbvMhdT.js";import{m as n,i as l}from"./functional-BY4LX4kJ.js";import{B as c}from"./block_summary_data_table-CwXT4DNd.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-D5C08SFq.js";import"./index-Csied5Tc.js";import"./index-CVsL8RUv.js";import"./client-ClnuHdtC.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./assert-B11BgmXM.js";import"./string-DwcMXV6G.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./missing_element_error-BXDBouYu.js";import"./copy_hex-ByA1LlXT.js";import"./array_buffer_hex-Bcc-7BbE.js";import"./inline-C6T91GCY.js";import"./relative_time_since_date_text-dTJLjam_.js";import"./date_time_formatters_provider-Bq_dXrCb.js";import"./locale_provider-Bv2GXKLp.js";import"./higher_order-BliYGj6D.js";import"./x_icon-DUOKCEyJ.js";import"./chevron_up-CA2lC1se.js";import"./twitter_icon-DJH4hGMI.js";import"./vertical_scroll-NWp1kiUw.js";import"./path_resolver_provider-lIT2T7X3.js";import"./data_table-DNqZAqdt.js";import"./text-CEhLEmI-.js";import"./circular_progress_indicator-CmgbbPhU.js";import"./container_loading-Bs_nCWyM.js";import"./skeleton_content-B8Hxs29M.js";import"./byte_size_text-DzPI3Ku4.js";import"./number_formatters_provider-DIxko5iX.js";import"./wallet_address_text-BXyJ1CeJ.js";/* empty css               */import"./date_time_text-B8ynrPRp.js";import"./full_hex_text-DhrOCfLO.js";import"./hex_text-b6On9MuH.js";import"./money_text-DVODtpBJ.js";import"./money_text_full-BBNORgie.js";import"./number_text-By_u4Wjn.js";import"./tagged_base64_text-B_jFbqJ5.js";import"./time_text-BfBn8ExL.js";import"./block_summary-CBGYsBbN.js";import"./link-5-QQNNE3.js";const u=t=>a.jsx(p.Provider,{value:t.blockSummaries,children:a.jsx(c,{})}),bt={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new s,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:o})=>{await o("retrieve the data table element",async()=>{await m(t)}),await o("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const dt=["Interactions"];export{r as Interactions,dt as __namedExportsOrder,bt as default};
