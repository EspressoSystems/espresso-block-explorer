import{j as o}from"./iframe-BisBQj4b.js";import{g as m,s as i}from"./data_table_shared-BVbvoHPP.js";import{D as s}from"./data_provider-DSZ9Vv_3.js";import"./blocks-DxW4BCgY.js";import{P as n}from"./nodes-DkqQpvmH.js";import{m as p,i as l}from"./functional-6Z2QHHX7.js";import{B as c}from"./block_summary_data_table-gVGkJ_2z.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BWy4QzQt.js";import"./index-CqTTn5wO.js";import"./index-C-IjjtMy.js";import"./client-Dn8PDppJ.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BgU0H56Y.js";import"./assert-B11BgmXM.js";import"./string-DDfX_5jt.js";import"./bigint-CrsQnXJW.js";import"./data-D5p7UK42.js";import"./tagged_base64-ZlJISydJ.js";import"./base64-GdO7PHhr.js";import"./missing_element_error-BIT--q2G.js";import"./copy_hex-CX1dLtJV.js";import"./array_buffer-D3ACJkCk.js";import"./inline-BgAnjhKo.js";import"./now_provider-BADpF5pN.js";import"./higher_order-B_D7TFYJ.js";import"./check_circle_filled-DGfSNt1o.js";import"./svg_icon_base-eIEhIJU_.js";import"./copy-B0isQiaQ.js";import"./path_resolver_provider-CkeKuk75.js";import"./data_table-fwnGyCF7.js";import"./text-CEhLEmI-.js";import"./chevron_up-CC90xocc.js";import"./skeleton_content-BxEnkJYy.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-D02xq_qj.js";import"./number_formatters_provider-BbUevisL.js";import"./locale_provider-Cy9Qu1vd.js";import"./date_time_text-CWBRTMWe.js";import"./date_time_formatters_provider-T4Gwii8n.js";import"./hex_text-ioJdFCKB.js";/* empty css               */import"./number_text-DzPmU_Wm.js";import"./link-C5aiC12C.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
