import{j as o}from"./iframe-C36uQjwe.js";import{D as m}from"./loading_provider-BllPH4wN.js";import"./date_time_formatters_provider-CAjNQyov.js";import"./locale_provider-wQt49r1W.js";import"./page_path_provider-C4TVebhC.js";import"./now_provider-D6WuJJod.js";import"./number_formatters_provider-DywPH02u.js";import"./path_resolver_provider-D1l7Ftg7.js";import{g as i,s}from"./data_table_shared-qA3ZhzF5.js";import"./blocks-Cvf_KKut.js";import{P as p}from"./nodes-UGwKe3sl.js";import{m as n,i as l}from"./functional-aFFbciHe.js";import{B as c}from"./block_summary_data_table-BpduT_Ro.js";import"./preload-helper-PPVm8Dsz.js";import"./missing_element_error-BkHusKs0.js";import"./string-BQNQEiqR.js";import"./assert-B11BgmXM.js";import"./unimplemented_error-C5MN7yCC.js";import"./react.esm-DMHPUCOI.js";import"./index-USsukJ9q.js";import"./index-CuQTq9WB.js";import"./client-NDPkqDfF.js";import"./monetary_value-CBH2RXSq.js";import"./bigint-DtebN9dC.js";import"./data-QnfQTY7I.js";import"./tagged_base64-CLbDmqUB.js";import"./base64-Pz9_wEqE.js";import"./skeleton_content-D1Jtp_i-.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-B4Pvq_Gb.js";import"./copy_hex-GAVk31wC.js";import"./array_buffer-DJmzCn2r.js";import"./copy_button-BiIYGymM.js";import"./higher_order-CfyPS3zu.js";import"./check_circle_filled-DS2y5kq9.js";import"./svg_icon_base-CociR3Gf.js";import"./copy-DFD6qtai.js";/* empty css               */import"./date_time_text-C_B9GWia.js";import"./hex_text-BVK1cUlH.js";import"./number_text-CLzfObOD.js";import"./data_table-CSH7CJYS.js";import"./text-CEhLEmI-.js";import"./typography-DJ4LlwQ2.js";import"./chevron_up-BOTGh5V0.js";import"./link-COgTKsYC.js";const u=t=>o.jsx(m.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),it={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new p,b=Array.from(n(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await i(t)}),await a("sort all columns",async()=>{await s(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const st=["Interactions"];export{r as Interactions,st as __namedExportsOrder,it as default};
