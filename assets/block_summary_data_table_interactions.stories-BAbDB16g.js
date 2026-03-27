import{j as o}from"./iframe-Cvx6RpPY.js";import{g as m,s as i}from"./data_table_shared-D_GXYoPc.js";import{D as s}from"./data_provider-DuSHNFDm.js";import"./blocks-6yclG0ka.js";import{P as n}from"./nodes-B70Gne2-.js";import{m as p,i as l}from"./functional-DzI6oRAM.js";import{B as c}from"./block_summary_data_table-BrUeBaGk.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-DpAMl9g-.js";import"./index-DV0fPn1x.js";import"./index-CF-oR5Dv.js";import"./client-MqscF9bh.js";import"./sleep-CW-vxfof.js";import"./monetary_value-DXbf4XhX.js";import"./assert-B11BgmXM.js";import"./string-BCb2Pt7Y.js";import"./bigint-DeSLcxHO.js";import"./data-D5p7UK42.js";import"./tagged_base64-B_lPSlUf.js";import"./base64-CqV3gweX.js";import"./missing_element_error-D0dGm0KW.js";import"./copy_hex-CUfuUEtx.js";import"./array_buffer-DFcBajus.js";import"./inline-C4QibOpQ.js";import"./now_provider-C_TnA9uy.js";import"./higher_order-CcpOgoeh.js";import"./check_circle_filled-l-VtYo1v.js";import"./svg_icon_base-CJF1g_tc.js";import"./copy-CUWUjZqu.js";import"./path_resolver_provider-4NfNH-Lz.js";import"./data_table-CdvI3_gP.js";import"./text-CEhLEmI-.js";import"./chevron_up-bnQmtD7Q.js";import"./skeleton_content-DsbU2c_Z.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-NLE3VhrF.js";import"./number_formatters_provider-DSWMRQJW.js";import"./locale_provider-D5aNHbGy.js";import"./date_time_text-plZBolwB.js";import"./date_time_formatters_provider-DcUzUZDq.js";import"./hex_text-ReM3eh9l.js";/* empty css               */import"./number_text-6gO1h8MR.js";import"./link-DLE7hRkE.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
