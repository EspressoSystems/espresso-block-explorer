import{j as o}from"./iframe-RrH5notm.js";import{g as m,s as i}from"./data_table_shared-DssNzi8S.js";import{D as s}from"./data_provider-CnI5ffrM.js";import"./blocks-BEHlDsni.js";import{P as n}from"./nodes-DZ7P8xPE.js";import{m as p,i as l}from"./functional-CHI4evRY.js";import{B as c}from"./block_summary_data_table-BsZsaD0p.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-mGbqDEpr.js";import"./index-DyPC3jWh.js";import"./index-B30HYQ58.js";import"./client-opeFtPJh.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BBaBP7s4.js";import"./assert-BWgKxNW2.js";import"./string-BGbpIfpT.js";import"./data-D5p7UK42.js";import"./tagged_base64-C1c0MovD.js";import"./base64-D2HwddJb.js";import"./unimplemented_error-BDiuBEcJ.js";import"./missing_element_error-BMmla67R.js";import"./copy_hex-D3ve7Xy3.js";import"./array_buffer_hex-2CxW6xhL.js";import"./inline-DWYfX2ad.js";import"./now_provider-DTqjxJ47.js";import"./higher_order-Bm-4pUU4.js";import"./check_circle_filled-DPFde0XQ.js";import"./svg_icon_base-n5AH4Zhh.js";import"./copy-xEs8E4tz.js";import"./path_resolver_provider-CGxT658b.js";import"./data_table-CpwQJm7B.js";import"./text-CEhLEmI-.js";import"./chevron_up-DIltLCUC.js";import"./skeleton_content-DmqNHUTV.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-CAONP42e.js";import"./number_formatters_provider-BWToNpc0.js";import"./locale_provider-Cyvsr7cz.js";import"./date_time_text-C_CBnpzd.js";import"./date_time_formatters_provider-DapLe-dN.js";import"./hex_text-DlaINR7Q.js";/* empty css               */import"./number_text-BiMC9TJ3.js";import"./link-DqAZbzMw.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
