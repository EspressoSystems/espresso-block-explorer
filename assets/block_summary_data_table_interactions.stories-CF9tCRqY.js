import{j as o}from"./iframe-lCBbYCEU.js";import{g as m,s as i}from"./data_table_shared-BXRhLs5m.js";import{D as s}from"./data_provider-JNzMXrDd.js";import"./blocks-XwzhN47T.js";import{P as n}from"./nodes--GPtCQfL.js";import{m as p,i as l}from"./functional-6Z2QHHX7.js";import{B as c}from"./block_summary_data_table-CEeuFy0_.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-DPsyTmJB.js";import"./index-DmtrKp90.js";import"./index-D-VaSj31.js";import"./client-BJ4MhKIH.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BgU0H56Y.js";import"./assert-B11BgmXM.js";import"./string-DDfX_5jt.js";import"./bigint-CrsQnXJW.js";import"./data-D5p7UK42.js";import"./tagged_base64-Beas1ikT.js";import"./base64-Cs6zZcIo.js";import"./missing_element_error-BIT--q2G.js";import"./copy_hex-AZ20H5KO.js";import"./array_buffer-BrH4NOGl.js";import"./inline--kc1kPVO.js";import"./now_provider-BJlCMxdf.js";import"./higher_order-B24NaQsc.js";import"./check_circle_filled-ClNr7Qgn.js";import"./svg_icon_base-K_bknCBI.js";import"./copy-K-9mLOCa.js";import"./path_resolver_provider-BQqhBI_r.js";import"./data_table-CkewT-se.js";import"./text-CEhLEmI-.js";import"./chevron_up-JQFOFxdg.js";import"./skeleton_content-uXbBjkPV.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-DdskNyFJ.js";import"./number_formatters_provider-n3Owoqke.js";import"./locale_provider-CivmyzXf.js";import"./date_time_text-PZluedtG.js";import"./date_time_formatters_provider-D_P0LLFh.js";import"./hex_text-Dq7vbRlC.js";/* empty css               */import"./number_text-C1feg6s_.js";import"./link-BP2mDpKa.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
