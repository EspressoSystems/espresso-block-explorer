import{j as o}from"./iframe-DVElLztL.js";import{g as m,s as i}from"./data_table_shared-BkcUiyDp.js";import{D as s}from"./data_provider-8bonweiP.js";import"./blocks-BLRm0qbp.js";import{P as n}from"./nodes-DdUtUYCE.js";import{m as p,i as l}from"./functional-Ci6o84Cp.js";import{B as c}from"./block_summary_data_table-WqJm2hnN.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-pmhZ34LS.js";import"./index-CBEmrpSc.js";import"./index-C0xT9PqR.js";import"./client-Dcf09WDq.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./string-DoEjSKSD.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./base64-Bp_idpg2.js";import"./missing_element_error-BOfgw7mk.js";import"./copy_hex-BIDlocjI.js";import"./array_buffer-DMedzaQw.js";import"./inline-C0oXTFN4.js";import"./now_provider-CdcVy4pF.js";import"./higher_order-D3ayJwRx.js";import"./check_circle_filled-BQXSmJgu.js";import"./svg_icon_base-CkxnyFHT.js";import"./copy-DPJqZE1B.js";import"./path_resolver_provider-DBH0FUs2.js";import"./data_table-B4k9tCFn.js";import"./text-CEhLEmI-.js";import"./chevron_up-C0hUPjmj.js";import"./skeleton_content-CFCEKyZq.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-DZn34SsL.js";import"./number_formatters_provider-amKtj06S.js";import"./locale_provider-DQ-ADSEU.js";import"./date_time_text-CvS8iW3y.js";import"./date_time_formatters_provider-cwztD3ji.js";import"./hex_text-BhXF56pB.js";/* empty css               */import"./number_text-Di5ybNHr.js";import"./link-DAHaIVd3.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
