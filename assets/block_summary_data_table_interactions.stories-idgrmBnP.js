import{j as o}from"./iframe-D4NG4Ygg.js";import{g as m,s as i}from"./data_table_shared-Bb385wYj.js";import{D as s}from"./data_provider-kgUlCSLb.js";import"./blocks-BLRm0qbp.js";import{P as n}from"./nodes-DdUtUYCE.js";import{m as p,i as l}from"./functional-Ci6o84Cp.js";import{B as c}from"./block_summary_data_table-D5G0BtIY.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-C-kTbQMi.js";import"./index-CN5LEFBF.js";import"./index-vB25Cpb6.js";import"./client-jiXVFmGw.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./string-DoEjSKSD.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./base64-Bp_idpg2.js";import"./missing_element_error-BOfgw7mk.js";import"./copy_hex-DZf0gJEE.js";import"./array_buffer-DMedzaQw.js";import"./inline-BdgexMR_.js";import"./now_provider-DEocB4vj.js";import"./higher_order-BVplWATc.js";import"./check_circle_filled-BEqZoCaN.js";import"./svg_icon_base-D3FfKTtS.js";import"./copy-efENwpca.js";import"./path_resolver_provider-T-F4e6m2.js";import"./data_table-dLKW4ONu.js";import"./text-CEhLEmI-.js";import"./chevron_up-DnyZ5qB_.js";import"./skeleton_content-Ot69JtSC.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-CEkXcn-C.js";import"./number_formatters_provider-CV8eEq8L.js";import"./locale_provider-y_w6A6F5.js";import"./date_time_text-fOLyOuvc.js";import"./date_time_formatters_provider-D_NikJXM.js";import"./hex_text-D-eI2otM.js";/* empty css               */import"./number_text-CGho1SjB.js";import"./link-BCQBx_Zl.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
