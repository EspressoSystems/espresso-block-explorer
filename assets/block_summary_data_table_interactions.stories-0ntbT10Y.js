import{j as a}from"./iframe-DaQbwpKg.js";import{g as m,s as i}from"./data_table_shared-KriCJy-N.js";import{D as p}from"./data_provider-Urjmc4oX.js";import"./blocks-BbFMk1LL.js";import{P as s}from"./nodes-DYObZsIN.js";import{m as n,i as l}from"./functional-BN9f4kvo.js";import{B as c}from"./block_summary_data_table-DMImdMbs.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BGTc2wHv.js";import"./index-Bzu4Q9_J.js";import"./index-BMvX1_G5.js";import"./client-DTTjU2yR.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./assert-B11BgmXM.js";import"./string-DwcMXV6G.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./missing_element_error-BXDBouYu.js";import"./copy_hex-Qd87mTkK.js";import"./array_buffer_hex-CckWFzk6.js";import"./inline-DCb1wJgq.js";import"./relative_time_since_date_text-CWZP_ccf.js";import"./date_time_formatters_provider-CEA6JPej.js";import"./locale_provider-D3R0CJI7.js";import"./higher_order-B-9I1gLU.js";import"./x_icon-C35_i0U-.js";import"./chevron_up-C8VviZ1S.js";import"./twitter_icon-Dj6C_0cQ.js";import"./vertical_scroll-CEacRZkh.js";import"./path_resolver_provider-BDMPzd-5.js";import"./data_table-CUbkKUvM.js";import"./text-CEhLEmI-.js";import"./circular_progress_indicator-DEGUc7sM.js";import"./container_loading-CIrdureV.js";import"./skeleton_content-DyjkIHid.js";import"./byte_size_text-ipFt3fsr.js";import"./number_formatters_provider-CcXSIvuI.js";import"./wallet_address_text-CqwLBR2A.js";/* empty css               */import"./date_time_text-CiNBQC5Z.js";import"./full_hex_text-Cac73Rm0.js";import"./hex_text-BAI0PzpF.js";import"./money_text-CNPln5bU.js";import"./money_text_full-fYF8MyIy.js";import"./number_text-BqIrmfNw.js";import"./tagged_base64_text-Mmk-wGJg.js";import"./time_text-DmW55R4T.js";import"./block_summary-CBGYsBbN.js";import"./link-COlrr4wN.js";const u=t=>a.jsx(p.Provider,{value:t.blockSummaries,children:a.jsx(c,{})}),bt={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new s,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:o})=>{await o("retrieve the data table element",async()=>{await m(t)}),await o("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
