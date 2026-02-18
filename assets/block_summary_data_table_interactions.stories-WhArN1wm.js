import{j as o}from"./iframe-DRi1LiY1.js";import{g as m,s as i}from"./data_table_shared-BONWvbUw.js";import{D as s}from"./data_provider-BEXgs6IU.js";import"./blocks-BLRm0qbp.js";import{P as n}from"./nodes-DdUtUYCE.js";import{m as p,i as l}from"./functional-Ci6o84Cp.js";import{B as c}from"./block_summary_data_table-CHR8aFn2.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-DG3gU5wN.js";import"./index-C93YOJ5V.js";import"./index-CKqPkkhs.js";import"./client-DZXhQAJG.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./string-DoEjSKSD.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./base64-Bp_idpg2.js";import"./missing_element_error-BOfgw7mk.js";import"./copy_hex-C2in0NRI.js";import"./array_buffer-DMedzaQw.js";import"./inline-BkKFNAeD.js";import"./now_provider-DEU80TI-.js";import"./higher_order-DchKpsaa.js";import"./check_circle_filled-D3-wVSyf.js";import"./svg_icon_base-DRus6yG1.js";import"./copy-BKDlVIrr.js";import"./path_resolver_provider-BU3haTZx.js";import"./data_table-DWXjJZWb.js";import"./text-CEhLEmI-.js";import"./chevron_up-CIM7Ene_.js";import"./skeleton_content-D6bR3BKC.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-lB2paboN.js";import"./number_formatters_provider-DrWfDPcd.js";import"./locale_provider-CADKL3Zh.js";import"./date_time_text-Bg02kt8U.js";import"./date_time_formatters_provider-DrMqCwD5.js";import"./hex_text-CnqaSLum.js";/* empty css               */import"./number_text-ohwb6YDX.js";import"./link-w3ej4rcj.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
