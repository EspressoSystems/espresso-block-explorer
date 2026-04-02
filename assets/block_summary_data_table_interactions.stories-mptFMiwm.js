import{j as o}from"./iframe-CmLG4Pok.js";import{g as m,s as i}from"./data_table_shared-DomwqaDL.js";import{D as s}from"./data_provider-dnPZr8Zm.js";import"./blocks-DE8KvbdO.js";import{P as n}from"./nodes-DZ7P8xPE.js";import{m as p,i as l}from"./functional-CHI4evRY.js";import{B as c}from"./block_summary_data_table-BI4ejncz.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-D07X3gEr.js";import"./index-BgBvZsR8.js";import"./index-CrMXpkeL.js";import"./client-nqOaR84a.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BBaBP7s4.js";import"./assert-BWgKxNW2.js";import"./string-BGbpIfpT.js";import"./data-DkoEaPI0.js";import"./tagged_base64-C1c0MovD.js";import"./base64-D2HwddJb.js";import"./unimplemented_error-BDiuBEcJ.js";import"./missing_element_error-BMmla67R.js";import"./copy_hex-B67tRXyJ.js";import"./array_buffer_hex-2CxW6xhL.js";import"./inline-D3cva4KO.js";import"./now_provider-BYmmDWBX.js";import"./higher_order-aMxBsUlx.js";import"./check_circle_filled-SoXbLKd4.js";import"./svg_icon_base-B57ylFbh.js";import"./copy-CvSJbZKy.js";import"./path_resolver_provider-Txf-h2eU.js";import"./data_table-BhRISOED.js";import"./text-CEhLEmI-.js";import"./chevron_up-BztjpIQ4.js";import"./skeleton_content-CSUHDwQ0.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-CJe08Mxa.js";import"./number_formatters_provider-CF2CsDka.js";import"./locale_provider-Be6w3M1T.js";import"./date_time_text-C2ElyEsL.js";import"./date_time_formatters_provider-DNydhZPZ.js";import"./hex_text-MfxCCN-r.js";/* empty css               */import"./number_text-B1GPWJ_a.js";import"./link-B6ZWobqn.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
