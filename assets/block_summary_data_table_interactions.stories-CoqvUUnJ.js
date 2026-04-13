import{j as a}from"./iframe-COKd2Os-.js";import{g as m,s as i}from"./data_table_shared-BYDPVGW-.js";import{D as p}from"./data_provider-I8Cq7ni6.js";import"./blocks-36ZEPcvJ.js";import{P as s}from"./nodes-BsbvMhdT.js";import{m as n,i as l}from"./functional-BY4LX4kJ.js";import{B as c}from"./block_summary_data_table-DuNtD0jb.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-D3iyLMaI.js";import"./index-CLIMVHVb.js";import"./index-Dw0SlraX.js";import"./client-mRDDk3Gp.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DqTXp7cz.js";import"./assert-B11BgmXM.js";import"./string-DwcMXV6G.js";import"./bigint-nvMxq-Qk.js";import"./data-DkoEaPI0.js";import"./tagged_base64-CKlPb5jQ.js";import"./base64-CIn2pRZH.js";import"./unimplemented_error-BNblu8WE.js";import"./missing_element_error-BXDBouYu.js";import"./copy_hex-CmMfrrKI.js";import"./array_buffer_hex-Bcc-7BbE.js";import"./inline-0nmcp6QU.js";import"./relative_time_since_date_text-CnpaFYv_.js";import"./date_time_formatters_provider-KQLt3BJr.js";import"./locale_provider-CRfUaY6B.js";import"./higher_order-t8f3m54J.js";import"./x_icon-BdiuL9tT.js";import"./chevron_up-0QfBWqbC.js";import"./twitter_icon-CDA43j3T.js";import"./vertical_scroll-e5WQDJ-j.js";import"./path_resolver_provider-C9PXJtCJ.js";import"./data_table-CWGiaFxK.js";import"./text-CEhLEmI-.js";import"./circular_progress_indicator-BaJ1dg1I.js";import"./container_loading-CS6S1NZO.js";import"./skeleton_content-DpknspYU.js";import"./byte_size_text-B8oLdHc1.js";import"./number_formatters_provider-5P6oMbBj.js";import"./wallet_address_text-DCA28Uqg.js";/* empty css               */import"./date_time_text-CDMhlPwa.js";import"./full_hex_text-DhrOCfLO.js";import"./hex_text-DK79PIUk.js";import"./money_text-C-wrGRGL.js";import"./money_text_full-LCIKV8NP.js";import"./number_text-CAbUHr29.js";import"./tagged_base64_text-VkJW1cYD.js";import"./time_text-hbHHO61s.js";import"./block_summary-CBGYsBbN.js";import"./link-BgrEN8bL.js";const u=t=>a.jsx(p.Provider,{value:t.blockSummaries,children:a.jsx(c,{})}),bt={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new s,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:o})=>{await o("retrieve the data table element",async()=>{await m(t)}),await o("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
