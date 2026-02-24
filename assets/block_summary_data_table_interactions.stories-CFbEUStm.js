import{j as o}from"./iframe-DONz925b.js";import{g as m,s as i}from"./data_table_shared-dtFfs00U.js";import{D as s}from"./data_provider-B7hXyE12.js";import"./blocks-BLRm0qbp.js";import{P as n}from"./nodes-DdUtUYCE.js";import{m as p,i as l}from"./functional-Ci6o84Cp.js";import{B as c}from"./block_summary_data_table-CgY5P5VL.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-T7f3m4YS.js";import"./index-BahpNmxe.js";import"./index-DP8VdHF8.js";import"./client-BqS3t1h9.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./string-DoEjSKSD.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./base64-Bp_idpg2.js";import"./missing_element_error-BOfgw7mk.js";import"./copy_hex-B7pQbTHe.js";import"./array_buffer-DMedzaQw.js";import"./inline-C43_HtmX.js";import"./now_provider-BpiTFYMl.js";import"./higher_order-CQdCMXOf.js";import"./check_circle_filled-B3XoOe3O.js";import"./svg_icon_base-DRdIw45a.js";import"./copy-BA4QCH76.js";import"./path_resolver_provider-C4oMFhL0.js";import"./data_table-CChIVYOJ.js";import"./text-CEhLEmI-.js";import"./chevron_up-DcNHN7qS.js";import"./skeleton_content-CmSVOojS.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-CDUWg-fn.js";import"./number_formatters_provider-CWOPNhEp.js";import"./locale_provider-BEGA8X2W.js";import"./date_time_text-ClxFvW6d.js";import"./date_time_formatters_provider-lVIyZ2uI.js";import"./hex_text-Zl0vbyL-.js";/* empty css               */import"./number_text-CTQz255v.js";import"./link-CwgepKMi.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
