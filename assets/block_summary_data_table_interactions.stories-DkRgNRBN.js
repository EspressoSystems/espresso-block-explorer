import{j as o}from"./iframe-uLWYWIdy.js";import{g as m,s as i}from"./data_table_shared-CL5XJtXy.js";import{D as s}from"./data_provider-wCUWR71U.js";import"./blocks-Dw_RhIDq.js";import{P as n}from"./nodes-BcMKYiFz.js";import{m as p,i as l}from"./functional-DsFqNm-o.js";import{B as c}from"./block_summary_data_table-OXJ8oK0W.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-xIgWRSjR.js";import"./index-B2AoEzCK.js";import"./index-DmRnPi0A.js";import"./client-Dc6hmvfU.js";import"./sleep-CW-vxfof.js";import"./monetary_value-B8_AgdSi.js";import"./assert-B11BgmXM.js";import"./string-BsSBvYb_.js";import"./bigint-XOkPApkc.js";import"./data-D5p7UK42.js";import"./tagged_base64-OJExTSEK.js";import"./base64-C9eISNYa.js";import"./missing_element_error-BOXFIEXu.js";import"./copy_hex-bEnQm6jZ.js";import"./array_buffer-OWUzmdpG.js";import"./inline-D4BTx294.js";import"./now_provider-b5eqaHEI.js";import"./higher_order-BV5WAo3w.js";import"./check_circle_filled-CZhl7HxG.js";import"./svg_icon_base-kLW-7jgl.js";import"./copy-DcZzltx3.js";import"./path_resolver_provider-WtzdELai.js";import"./data_table-CtQ5bjYG.js";import"./text-CEhLEmI-.js";import"./chevron_up-BlhLCVww.js";import"./skeleton_content-CXAzo2K4.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-CcmMYnIy.js";import"./number_formatters_provider-BJawDDf5.js";import"./locale_provider-CWIPDalB.js";import"./date_time_text-BPg9gf0T.js";import"./date_time_formatters_provider-DTa7qZb-.js";import"./hex_text-CyJ0gTKK.js";/* empty css               */import"./number_text-DsiwwU3j.js";import"./link-DP5Zd1n-.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
