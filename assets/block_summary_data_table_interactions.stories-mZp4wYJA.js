import{j as o}from"./iframe-DI-11s_X.js";import{g as m,s as i}from"./data_table_shared-9Rd_AAgi.js";import{D as s}from"./data_provider-DGnnlGIN.js";import"./blocks-Dw_RhIDq.js";import{P as n}from"./nodes-BcMKYiFz.js";import{m as p,i as l}from"./functional-DsFqNm-o.js";import{B as c}from"./block_summary_data_table-DhkTnuW8.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Ci7yFpSj.js";import"./index-D4jg92GM.js";import"./index-2Qr5b_Ix.js";import"./client-Dz4AeR3J.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B8_AgdSi.js";import"./assert-B11BgmXM.js";import"./string-BsSBvYb_.js";import"./bigint-XOkPApkc.js";import"./data-D5p7UK42.js";import"./tagged_base64-OJExTSEK.js";import"./base64-C9eISNYa.js";import"./missing_element_error-BOXFIEXu.js";import"./copy_hex-4s5YnW7y.js";import"./array_buffer-OWUzmdpG.js";import"./inline-l05htj65.js";import"./now_provider-Cyuty8k3.js";import"./higher_order-CE6OGbq-.js";import"./check_circle_filled-DJShb2x5.js";import"./svg_icon_base-D-9LFK2Z.js";import"./copy-CXF1xCyb.js";import"./path_resolver_provider-CIxFUUvp.js";import"./data_table-BRCUuqRG.js";import"./text-CEhLEmI-.js";import"./chevron_up-vZR5oH8e.js";import"./skeleton_content-BJBzdtyc.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-DEFkBL8V.js";import"./number_formatters_provider-KddJYOdi.js";import"./locale_provider-C8e6pJUg.js";import"./date_time_text-DPkozv3x.js";import"./date_time_formatters_provider-M9CCk0Jh.js";import"./hex_text-CNA63x8l.js";/* empty css               */import"./number_text-BtfPTykZ.js";import"./link-DbE6Ew2K.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
