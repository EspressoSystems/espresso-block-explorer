import{j as a}from"./iframe-yFC_6Lkm.js";import{g as m,s as i}from"./data_table_shared-Bd9iC0Hj.js";import{D as p}from"./data_provider-5GKNepRL.js";import"./blocks-BbFMk1LL.js";import{P as s}from"./nodes-DYObZsIN.js";import{m as n,i as l}from"./functional-BN9f4kvo.js";import{B as c}from"./block_summary_data_table-c9pmpsP0.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CEp6g7pp.js";import"./index-BmV5BhIB.js";import"./index-CRsEpIOc.js";import"./client-3rhF3nDV.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./assert-B11BgmXM.js";import"./string-DwcMXV6G.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./missing_element_error-BXDBouYu.js";import"./copy_hex-Cq2_BMIr.js";import"./array_buffer_hex-CckWFzk6.js";import"./inline-CX_CHbw_.js";import"./relative_time_since_date_text-B1-Y__aI.js";import"./date_time_formatters_provider-DcGFks32.js";import"./locale_provider-vvwlyNor.js";import"./higher_order-CjJuNElG.js";import"./x_icon-Cly8TORT.js";import"./chevron_up-DL-aSyib.js";import"./twitter_icon-BSqXgZj9.js";import"./vertical_scroll-ABb2uixh.js";import"./path_resolver_provider-DHnJ8sHv.js";import"./data_table-B_ldztdE.js";import"./text-CEhLEmI-.js";import"./circular_progress_indicator-CXUQmMaZ.js";import"./container_loading-B8wF_9BZ.js";import"./skeleton_content-Cc8wo3D2.js";import"./byte_size_text-Nx3d5HCW.js";import"./number_formatters_provider-zsFhOobu.js";import"./wallet_address_text-C8RpyldE.js";/* empty css               */import"./date_time_text-B_kYN0i8.js";import"./full_hex_text-Cac73Rm0.js";import"./hex_text-BgMrU2_9.js";import"./money_text-H4KdIbGP.js";import"./money_text_full-lyD3UcMj.js";import"./number_text-CypWZRGu.js";import"./tagged_base64_text-vj28S5uH.js";import"./time_text-DWAXCu0U.js";import"./block_summary-CBGYsBbN.js";import"./link--R9F_-TJ.js";const u=t=>a.jsx(p.Provider,{value:t.blockSummaries,children:a.jsx(c,{})}),bt={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new s,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:o})=>{await o("retrieve the data table element",async()=>{await m(t)}),await o("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
