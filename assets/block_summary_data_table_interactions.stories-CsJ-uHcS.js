import{j as o}from"./iframe-0IiCprxV.js";import{g as m,s as i}from"./data_table_shared-BkouezgV.js";import{D as s}from"./data_provider-CWMfMatq.js";import"./blocks-BLRm0qbp.js";import{P as n}from"./nodes-DdUtUYCE.js";import{m as p,i as l}from"./functional-Ci6o84Cp.js";import{B as c}from"./block_summary_data_table-Dpifoq_C.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Dq9zfbBo.js";import"./index-BeNat70R.js";import"./index-B092DBvd.js";import"./client-VXCbC8Sb.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./string-DoEjSKSD.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./base64-Bp_idpg2.js";import"./missing_element_error-BOfgw7mk.js";import"./copy_hex-B5UTRSDY.js";import"./array_buffer-DMedzaQw.js";import"./inline-Ci-_t6oe.js";import"./now_provider-B36jZJBE.js";import"./higher_order-TwrjIOhv.js";import"./check_circle_filled-CzKT_QrB.js";import"./svg_icon_base-BV-tSSkW.js";import"./copy-CsUs9R1p.js";import"./path_resolver_provider-Cg0EKHki.js";import"./data_table-Cn2tzd49.js";import"./text-CEhLEmI-.js";import"./chevron_up-BbyjN7ne.js";import"./skeleton_content-B8Z0lfuZ.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-DaJ0oTyz.js";import"./number_formatters_provider-CCuGt-nv.js";import"./locale_provider-D_MD1PN6.js";import"./date_time_text-DQ2jkkh7.js";import"./date_time_formatters_provider-CuU_yvyW.js";import"./hex_text-DyI8PbRG.js";/* empty css               */import"./number_text-Dnw2NraI.js";import"./link-DAOUXD10.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
