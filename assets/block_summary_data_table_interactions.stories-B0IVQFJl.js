import{j as o}from"./iframe-xhuVH5Ih.js";import{g as m,s as i}from"./data_table_shared-BQU5uM8O.js";import{D as s}from"./data_provider-CQiJ9dZf.js";import"./blocks-BLRm0qbp.js";import{P as n}from"./nodes-DdUtUYCE.js";import{m as p,i as l}from"./functional-Ci6o84Cp.js";import{B as c}from"./block_summary_data_table-D2oQNQAj.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-jozmQJqH.js";import"./index-RzCqieok.js";import"./index-CovybvIM.js";import"./client-PzWQms9r.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./string-DoEjSKSD.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./base64-Bp_idpg2.js";import"./missing_element_error-BOfgw7mk.js";import"./copy_hex-CrFWOGaf.js";import"./array_buffer-DMedzaQw.js";import"./inline-MHcNUnUs.js";import"./now_provider-CmyY3F9O.js";import"./higher_order-Bdg3O_St.js";import"./check_circle_filled-p9-uDtAw.js";import"./svg_icon_base-BnZ40IBV.js";import"./copy-DqcgTqb3.js";import"./path_resolver_provider-Cp594lm0.js";import"./data_table-DPP4kqIA.js";import"./text-CEhLEmI-.js";import"./chevron_up-4fkmWFKv.js";import"./skeleton_content-DZ7VSVjZ.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-CFZfsbZU.js";import"./number_formatters_provider-BSQNp_UP.js";import"./locale_provider-CQ3v6PyC.js";import"./date_time_text-DKBOj9dd.js";import"./date_time_formatters_provider-C8B-TsDL.js";import"./hex_text-6uQWwOe5.js";/* empty css               */import"./number_text-YH5W9FSg.js";import"./link-Do9ClAnV.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
