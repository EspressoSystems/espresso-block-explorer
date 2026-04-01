import{j as o}from"./iframe-hejhwxVl.js";import{g as m,s as i}from"./data_table_shared-DjFrUQak.js";import{D as s}from"./data_provider-oqf6yKht.js";import"./blocks-BO0jjecB.js";import{P as n}from"./nodes-DZ7P8xPE.js";import{m as p,i as l}from"./functional-CHI4evRY.js";import{B as c}from"./block_summary_data_table-Di3D5qAG.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CtXjynZ4.js";import"./index-CrNDxhwo.js";import"./index-CogtgnYk.js";import"./client-D6exDgc_.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BBaBP7s4.js";import"./assert-BWgKxNW2.js";import"./string-BGbpIfpT.js";import"./data-D5p7UK42.js";import"./tagged_base64-C1c0MovD.js";import"./base64-D2HwddJb.js";import"./unimplemented_error-BDiuBEcJ.js";import"./missing_element_error-BMmla67R.js";import"./copy_hex-yUIAN5tv.js";import"./array_buffer_hex-2CxW6xhL.js";import"./inline-K76PRVrw.js";import"./now_provider-B6OQbAFu.js";import"./higher_order-W9buzvfY.js";import"./check_circle_filled-5yGenlrM.js";import"./svg_icon_base-C4F1Mj4O.js";import"./copy-Bdipl4NL.js";import"./path_resolver_provider-rWpEttVD.js";import"./data_table-BaNa2ei5.js";import"./text-CEhLEmI-.js";import"./chevron_up-BIXFaApl.js";import"./skeleton_content-DoOnEOVP.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-C5Zd19FW.js";import"./number_formatters_provider-DDCZmzjm.js";import"./locale_provider-B6ewQipp.js";import"./date_time_text-CdO2TmCu.js";import"./date_time_formatters_provider-BEpx9gnS.js";import"./hex_text-DrxXu6v4.js";/* empty css               */import"./number_text-BsE1LgbZ.js";import"./link-Bpr-6faG.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
