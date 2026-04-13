import{j as a}from"./iframe-CRN6ir_k.js";import{g as m,s as i}from"./data_table_shared-DXkFtdCi.js";import{D as p}from"./data_provider-BRUBq0Ii.js";import"./blocks-BbFMk1LL.js";import{P as s}from"./nodes-DYObZsIN.js";import{m as n,i as l}from"./functional-BN9f4kvo.js";import{B as c}from"./block_summary_data_table-CLcoj2bJ.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BoUDZ0HR.js";import"./index-D_J2JNbG.js";import"./index-DmZRm6GY.js";import"./client-bOvuQbJW.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./assert-B11BgmXM.js";import"./string-DwcMXV6G.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./missing_element_error-BXDBouYu.js";import"./copy_hex-DV_9rIaq.js";import"./array_buffer_hex-CckWFzk6.js";import"./inline-C07F2se4.js";import"./relative_time_since_date_text-BvB0wkUr.js";import"./date_time_formatters_provider-CO-VImxK.js";import"./locale_provider-DitRBxok.js";import"./higher_order-BJoFsnsT.js";import"./x_icon-CeOMdX2y.js";import"./chevron_up-BIFMo3iJ.js";import"./twitter_icon-BMz0LQWW.js";import"./vertical_scroll-BFk-ygDy.js";import"./path_resolver_provider-D1HmFeDs.js";import"./data_table-Ckzo1iyL.js";import"./text-CEhLEmI-.js";import"./circular_progress_indicator-D_atp0op.js";import"./container_loading-C9coGMSW.js";import"./skeleton_content-BqOji4jo.js";import"./byte_size_text-Ch1N4NZS.js";import"./number_formatters_provider-CV2JCVAy.js";import"./wallet_address_text-iOdgpcaz.js";/* empty css               */import"./date_time_text-CO7oiG9G.js";import"./full_hex_text-Cac73Rm0.js";import"./hex_text-Dmo4jBH1.js";import"./money_text-Mf2-fP6d.js";import"./money_text_full-CyFzKqQ4.js";import"./number_text-i0V-NKlU.js";import"./tagged_base64_text-C5VDRjcO.js";import"./time_text-CSZWe2p1.js";import"./block_summary-CBGYsBbN.js";import"./link-CUJ-dmn5.js";const u=t=>a.jsx(p.Provider,{value:t.blockSummaries,children:a.jsx(c,{})}),bt={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new s,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:o})=>{await o("retrieve the data table element",async()=>{await m(t)}),await o("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
