import{j as o}from"./iframe-B298lYzW.js";import{g as m,s as i}from"./data_table_shared-Bgoj8wt8.js";import{D as s}from"./data_provider-vKdZeY0D.js";import"./blocks-BLRm0qbp.js";import{P as n}from"./nodes-DdUtUYCE.js";import{m as p,i as l}from"./functional-Ci6o84Cp.js";import{B as c}from"./block_summary_data_table-DleUOE0C.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-BmlWp72S.js";import"./index-CiS3ONPk.js";import"./index-S2HY-myl.js";import"./client-CNu7C4Ux.js";import"./sleep-CW-vxfof.js";import"./monetary_value-krz3zuqt.js";import"./assert-B11BgmXM.js";import"./string-DoEjSKSD.js";import"./bigint-DqPQCubx.js";import"./data-D5p7UK42.js";import"./tagged_base64-CUYa8gnG.js";import"./base64-Bp_idpg2.js";import"./missing_element_error-BOfgw7mk.js";import"./copy_hex-Dxxq2-SW.js";import"./array_buffer-DMedzaQw.js";import"./inline-BRvRflL0.js";import"./now_provider-Bs88lXDN.js";import"./higher_order-B_g3tT7H.js";import"./check_circle_filled-tuFE-8sK.js";import"./svg_icon_base-CuicflMO.js";import"./copy-QJqx3jJn.js";import"./path_resolver_provider-Do-I3vWG.js";import"./data_table-BIdABvSr.js";import"./text-CEhLEmI-.js";import"./chevron_up-D6rlm-BP.js";import"./skeleton_content-CnaMDnBS.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-De1A7VYh.js";import"./number_formatters_provider-CrNZeYmu.js";import"./locale_provider-COLCQzYC.js";import"./date_time_text-DosEKnJD.js";import"./date_time_formatters_provider-4ga6Ydx1.js";import"./hex_text-DRNv1pbD.js";/* empty css               */import"./number_text-PJZIjD72.js";import"./link-C4utITwA.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
