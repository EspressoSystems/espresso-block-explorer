import{j as o}from"./iframe-DFUTgPQB.js";import{g as m,s as i}from"./data_table_shared-D1NwN3mD.js";import{D as s}from"./data_provider-xp9wZ2A1.js";import"./blocks-BLRm0qbp.js";import{P as n}from"./nodes-DdUtUYCE.js";import{m as p,i as l}from"./functional-Ci6o84Cp.js";import{B as c}from"./block_summary_data_table-D-5MxpMm.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CqlGwNOr.js";import"./index-DaW-g7vb.js";import"./index-hc1MaISu.js";import"./client-BReTPsvU.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./string-DoEjSKSD.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./base64-Bp_idpg2.js";import"./missing_element_error-BOfgw7mk.js";import"./copy_hex-CKVcKBfY.js";import"./array_buffer-DMedzaQw.js";import"./inline-Bm3F58Fg.js";import"./now_provider-DzuFne6J.js";import"./higher_order-DKNKSq1q.js";import"./check_circle_filled-DKHf5ICZ.js";import"./svg_icon_base-CCv-kRqo.js";import"./copy-CXY7jyjd.js";import"./path_resolver_provider-5gBwoeK9.js";import"./data_table-B7WZpwEl.js";import"./text-CEhLEmI-.js";import"./chevron_up-DuX2aDGx.js";import"./skeleton_content-WZfPrkCA.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-mTHFmYMB.js";import"./number_formatters_provider-Dy59aJqz.js";import"./locale_provider-D7-IQ_iJ.js";import"./date_time_text-C6447bpz.js";import"./date_time_formatters_provider-OVkj5-N5.js";import"./hex_text-D_Umho9u.js";/* empty css               */import"./number_text--cH6Scsp.js";import"./link-CgJzIbgO.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
