import{j as o}from"./iframe-BtlXJKZ1.js";import{g as m,s as i}from"./data_table_shared-Dwg62EfB.js";import{D as s}from"./data_provider-DZfionCo.js";import"./blocks-BEHlDsni.js";import{P as n}from"./nodes-DZ7P8xPE.js";import{m as p,i as l}from"./functional-CHI4evRY.js";import{B as c}from"./block_summary_data_table-BFgCNapx.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Bb7ebJnf.js";import"./index-DVf-yhbM.js";import"./index-CzfUxczt.js";import"./client-CdOtE264.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BBaBP7s4.js";import"./assert-BWgKxNW2.js";import"./string-BGbpIfpT.js";import"./data-D5p7UK42.js";import"./tagged_base64-C1c0MovD.js";import"./base64-D2HwddJb.js";import"./unimplemented_error-BDiuBEcJ.js";import"./missing_element_error-BMmla67R.js";import"./copy_hex-BqoEBzmg.js";import"./array_buffer_hex-2CxW6xhL.js";import"./inline-jN5wC3v9.js";import"./now_provider-D29HcoOP.js";import"./higher_order-DrPNsCRC.js";import"./check_circle_filled-xq0CVmDA.js";import"./svg_icon_base-BHrQ2xhA.js";import"./copy-B8AV97Y6.js";import"./path_resolver_provider-DFkOybrh.js";import"./data_table-DguU8lNy.js";import"./text-CEhLEmI-.js";import"./chevron_up-C63lzylG.js";import"./skeleton_content-C3wfAwRT.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text--8CaTQrj.js";import"./number_formatters_provider-uduEK5FV.js";import"./locale_provider-Ghcznv9j.js";import"./date_time_text-DirxX4OA.js";import"./date_time_formatters_provider-C0tfyVOJ.js";import"./hex_text-Cija5FgV.js";/* empty css               */import"./number_text-BdO7pZh2.js";import"./link-tL5mD4Oo.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
