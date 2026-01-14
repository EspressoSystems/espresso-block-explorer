import{j as o}from"./iframe-CCLKIoat.js";import{g as m,s as i}from"./data_table_shared-BUuDOTPB.js";import{D as s}from"./data_provider-BF5QLA6e.js";import"./blocks-Dw_RhIDq.js";import{P as n}from"./nodes-BcMKYiFz.js";import{m as p,i as l}from"./functional-DsFqNm-o.js";import{B as c}from"./block_summary_data_table-I2vPkXcT.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-cZ1DOXl5.js";import"./index-D298oDv-.js";import"./index-BBD36RIg.js";import"./client-CZEMcj29.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B8_AgdSi.js";import"./assert-B11BgmXM.js";import"./string-BsSBvYb_.js";import"./bigint-XOkPApkc.js";import"./data-D5p7UK42.js";import"./tagged_base64-OJExTSEK.js";import"./base64-C9eISNYa.js";import"./missing_element_error-BOXFIEXu.js";import"./copy_hex-iHEKoQ0X.js";import"./array_buffer-OWUzmdpG.js";import"./inline-BG01jBaJ.js";import"./now_provider-B5osc7Mq.js";import"./higher_order-DyFKxQfc.js";import"./check_circle_filled-zCoUuxn4.js";import"./svg_icon_base-BQe2kabo.js";import"./copy-DG2lSR0o.js";import"./path_resolver_provider-C-CQoB0e.js";import"./data_table-UR9ORkGf.js";import"./text-CEhLEmI-.js";import"./chevron_up-DUXgi73a.js";import"./skeleton_content-DNXiQAlC.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-We-dR8lu.js";import"./number_formatters_provider-3ltM0G6e.js";import"./locale_provider-K_0BCaCZ.js";import"./date_time_text-BkX9HxlE.js";import"./date_time_formatters_provider-D0J5X-TW.js";import"./hex_text-CJmdEYz5.js";/* empty css               */import"./number_text-BXbb_2Rl.js";import"./link-Dm9EQTEY.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const mt=["Interactions"];export{r as Interactions,mt as __namedExportsOrder,et as default};
