import{j as o}from"./iframe-ChCxfwos.js";import{g as m,s as i}from"./data_table_shared-CCLNRxh2.js";import{D as s}from"./data_provider-DFHjvLMD.js";import"./blocks-BO0jjecB.js";import{P as n}from"./nodes-DZ7P8xPE.js";import{m as p,i as l}from"./functional-CHI4evRY.js";import{B as c}from"./block_summary_data_table-CM7YkeJD.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Cz0XuZNv.js";import"./index-BgdMPv3v.js";import"./index-BfisTMic.js";import"./client-CG3cgWWz.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BBaBP7s4.js";import"./assert-BWgKxNW2.js";import"./string-BGbpIfpT.js";import"./data-D5p7UK42.js";import"./tagged_base64-C1c0MovD.js";import"./base64-D2HwddJb.js";import"./unimplemented_error-BDiuBEcJ.js";import"./missing_element_error-BMmla67R.js";import"./copy_hex-DBJRdlTr.js";import"./array_buffer_hex-2CxW6xhL.js";import"./inline-C_QQjNOV.js";import"./now_provider-BLPyobGt.js";import"./higher_order-d4YXWLIv.js";import"./check_circle_filled-_3c2nQY8.js";import"./svg_icon_base-BBi7gb5S.js";import"./copy-CKsgcC37.js";import"./path_resolver_provider-RMZHQ9FE.js";import"./data_table-XgBx71M4.js";import"./text-CEhLEmI-.js";import"./chevron_up-BXN0Q57t.js";import"./skeleton_content-BRFTzvsa.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-Cel5U2Hm.js";import"./number_formatters_provider-CYynOyj2.js";import"./locale_provider-5mesaRdn.js";import"./date_time_text-FQcsgJ1N.js";import"./date_time_formatters_provider-BNFT2aGM.js";import"./hex_text-5HGnju8t.js";/* empty css               */import"./number_text-VJGMQbGs.js";import"./link-DK1gVj_6.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
