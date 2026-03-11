import{j as o}from"./iframe-Cy4xjHUd.js";import{g as m,s as i}from"./data_table_shared-B_Yog760.js";import{D as s}from"./data_provider-C2a9yIBm.js";import"./blocks-BLRm0qbp.js";import{P as n}from"./nodes-DdUtUYCE.js";import{m as p,i as l}from"./functional-Ci6o84Cp.js";import{B as c}from"./block_summary_data_table-BPcOeL6X.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CpquZluQ.js";import"./index-CNB9H_RB.js";import"./index-CVn5SYyK.js";import"./client-Dx8UaD4v.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./string-DoEjSKSD.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./base64-Bp_idpg2.js";import"./missing_element_error-BOfgw7mk.js";import"./copy_hex-B9wdH9am.js";import"./array_buffer-DMedzaQw.js";import"./inline-BvC8Efrs.js";import"./now_provider-CHx9qqh5.js";import"./higher_order-C1TCJwML.js";import"./check_circle_filled-ZiVLafnM.js";import"./svg_icon_base-B8oaxq1w.js";import"./copy-Dk9pXHjY.js";import"./path_resolver_provider-DY1Q2vvo.js";import"./data_table-yisRrbPa.js";import"./text-CEhLEmI-.js";import"./chevron_up-B-4vqEb2.js";import"./skeleton_content-D6wyLx9C.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-OP0W9Ddj.js";import"./number_formatters_provider-BzZn-8Pb.js";import"./locale_provider-CMdojvOr.js";import"./date_time_text-Dp6lUZ-6.js";import"./date_time_formatters_provider-Cj5Fa5jE.js";import"./hex_text-Z8LWba2j.js";/* empty css               */import"./number_text-9BSNavKf.js";import"./link-CIexkyYy.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
