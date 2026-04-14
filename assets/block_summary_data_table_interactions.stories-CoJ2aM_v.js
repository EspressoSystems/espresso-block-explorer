import{j as a}from"./iframe-mpHEnFNJ.js";import{g as m,s as i}from"./data_table_shared-8zEDrx_R.js";import{D as p}from"./data_provider-CrCMtXFK.js";import"./blocks-BbFMk1LL.js";import{P as s}from"./nodes-DYObZsIN.js";import{m as n,i as l}from"./functional-BN9f4kvo.js";import{B as c}from"./block_summary_data_table-CwGwPAZ5.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-yV1C_LQf.js";import"./index-DcWMdZIP.js";import"./index-CZsTPGzU.js";import"./client-CNthiOje.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./assert-B11BgmXM.js";import"./string-DwcMXV6G.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./missing_element_error-BXDBouYu.js";import"./copy_hex-JZFUdW3Y.js";import"./array_buffer_hex-CckWFzk6.js";import"./inline-C6H2JvvW.js";import"./relative_time_since_date_text-uDiJnjBg.js";import"./date_time_formatters_provider-DzftIXyF.js";import"./locale_provider-CFUFv6Rr.js";import"./higher_order-BSlQmUED.js";import"./x_icon-BLoNJM-C.js";import"./chevron_up-DlQkqxWe.js";import"./twitter_icon-CaKe8i_l.js";import"./vertical_scroll-CLg0oi0m.js";import"./path_resolver_provider-SqaJ-27M.js";import"./data_table-yBmOqmV0.js";import"./text-CEhLEmI-.js";import"./circular_progress_indicator-DomheTJH.js";import"./container_loading-CX5jC8rD.js";import"./skeleton_content-DqloY_f-.js";import"./byte_size_text-Cv4QuSL9.js";import"./number_formatters_provider-OPX5cdf1.js";import"./wallet_address_text-bqe02_aa.js";/* empty css               */import"./date_time_text-cRk5ucDj.js";import"./full_hex_text-Cac73Rm0.js";import"./hex_text-aVTQS5pR.js";import"./money_text-DAJraeQH.js";import"./money_text_full-D2eyImrj.js";import"./number_text-DGs2xjUf.js";import"./tagged_base64_text-B2aws7WV.js";import"./time_text-C3n6I0QM.js";import"./block_summary-CBGYsBbN.js";import"./link-3iULCeS4.js";const u=t=>a.jsx(p.Provider,{value:t.blockSummaries,children:a.jsx(c,{})}),bt={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new s,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:o})=>{await o("retrieve the data table element",async()=>{await m(t)}),await o("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
