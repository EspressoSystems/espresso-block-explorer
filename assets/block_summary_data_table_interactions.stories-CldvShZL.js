import{j as o}from"./iframe-CVKXv-Cv.js";import{g as m,s as i}from"./data_table_shared-Dg0xXIpH.js";import{D as s}from"./data_provider-DliWLU-N.js";import"./blocks-BLRm0qbp.js";import{P as n}from"./nodes-DdUtUYCE.js";import{m as p,i as l}from"./functional-Ci6o84Cp.js";import{B as c}from"./block_summary_data_table-DUiOrkoQ.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-wIl04LPn.js";import"./index-XY6BT7cC.js";import"./index-Ct7XCo7m.js";import"./client-BhZMZhyV.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./string-DoEjSKSD.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./base64-Bp_idpg2.js";import"./missing_element_error-BOfgw7mk.js";import"./copy_hex-Dc27dp4F.js";import"./array_buffer-DMedzaQw.js";import"./inline-mkqERNbS.js";import"./now_provider-CSo9VQ4G.js";import"./higher_order-CtQuyS7n.js";import"./check_circle_filled-C_5JJyvp.js";import"./svg_icon_base-D4no40oI.js";import"./copy-_svnnwkd.js";import"./path_resolver_provider-CKt_cXiG.js";import"./data_table-CVBUwP1F.js";import"./text-CEhLEmI-.js";import"./chevron_up-DhBANYx5.js";import"./skeleton_content-B49VI20d.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-B0q3c5Ln.js";import"./number_formatters_provider-BU8dGkN7.js";import"./locale_provider-Buk582ED.js";import"./date_time_text-9trY_1aa.js";import"./date_time_formatters_provider-63KZ-fVJ.js";import"./hex_text-BcW-MDwS.js";/* empty css               */import"./number_text-BCP4vfA5.js";import"./link-jutSw9ZD.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
