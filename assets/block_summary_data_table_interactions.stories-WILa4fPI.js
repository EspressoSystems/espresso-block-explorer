import{j as o}from"./iframe-tCHaFxbc.js";import{g as m,s as i}from"./data_table_shared-DfqwVFXA.js";import{D as s}from"./data_provider-DMdJRqvD.js";import"./blocks-CTgVmMXl.js";import{P as n}from"./nodes-9I9c2iOF.js";import{m as p,i as l}from"./functional-DT4GooI6.js";import{B as c}from"./block_summary_data_table-BLD61Q2s.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-CWaj5apr.js";import"./index-BZbs2elc.js";import"./index-Cuxb-LnB.js";import"./client-CM43emWd.js";import"./sleep-CW-vxfof.js";import"./monetary_value-CL5YFX4A.js";import"./assert-B11BgmXM.js";import"./string-DoEjSKSD.js";import"./bigint-CAUtzhcw.js";import"./data-D5p7UK42.js";import"./tagged_base64-YfeKLRN5.js";import"./base64-_rmSu-kQ.js";import"./missing_element_error-BOfgw7mk.js";import"./copy_hex-4ZtHRZ8I.js";import"./array_buffer-BGAdkDgu.js";import"./inline-pKsM_oa5.js";import"./now_provider-CXG0hpMO.js";import"./higher_order-DFvPhzqR.js";import"./check_circle_filled-Ca5DCuxR.js";import"./svg_icon_base-DPHHXJOQ.js";import"./copy-DlwEnnyc.js";import"./path_resolver_provider-BBe-WNBo.js";import"./data_table-Dq9o6xGN.js";import"./text-CEhLEmI-.js";import"./chevron_up-CTacPNtY.js";import"./skeleton_content-B2LbE2wz.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-DQ9E5zJV.js";import"./number_formatters_provider-BWiH38Om.js";import"./locale_provider-_bKYlsJ_.js";import"./date_time_text-CKrQdG-h.js";import"./date_time_formatters_provider-sufyA7A-.js";import"./hex_text-xpN-YlgA.js";/* empty css               */import"./number_text--8_8YX8A.js";import"./link-CDJ7miSy.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
