import{j as o}from"./iframe-BvJnvOK3.js";import{g as m,s as i}from"./data_table_shared-B1RwelxN.js";import{D as s}from"./data_provider-D1xrNIUw.js";import"./blocks-BEHlDsni.js";import{P as n}from"./nodes-DZ7P8xPE.js";import{m as p,i as l}from"./functional-CHI4evRY.js";import{B as c}from"./block_summary_data_table-DhUC7u6_.js";import"./preload-helper-PPVm8Dsz.js";import"./react.esm-Co-n7QZo.js";import"./index-BJtIBjVq.js";import"./index-BGnfEnc7.js";import"./client-CkpWhZAq.js";import"./sleep-CW-vxfof.js";import"./monetary_value-BBaBP7s4.js";import"./assert-BWgKxNW2.js";import"./string-BGbpIfpT.js";import"./data-D5p7UK42.js";import"./tagged_base64-C1c0MovD.js";import"./base64-D2HwddJb.js";import"./unimplemented_error-BDiuBEcJ.js";import"./missing_element_error-BMmla67R.js";import"./copy_hex-ECwj22bF.js";import"./array_buffer_hex-2CxW6xhL.js";import"./inline-B5tKv5Rj.js";import"./now_provider-C3aSuMvV.js";import"./higher_order-CzhT3LZz.js";import"./check_circle_filled-D7G7QKj8.js";import"./svg_icon_base-CnwbtYtI.js";import"./copy-CK2Tda-a.js";import"./path_resolver_provider-ITMlBgoH.js";import"./data_table-DXK7Inda.js";import"./text-CEhLEmI-.js";import"./chevron_up-D-AdgxfR.js";import"./skeleton_content-CNMj2q17.js";import"./block_summary-CBGYsBbN.js";import"./byte_size_text-B7UTqo--.js";import"./number_formatters_provider-Cr-dALW7.js";import"./locale_provider-DLWcZiH3.js";import"./date_time_text-DfM-PU1A.js";import"./date_time_formatters_provider-DiFEct46.js";import"./hex_text-Vn-94ioF.js";/* empty css               */import"./number_text-B3D3piOk.js";import"./link-CSf1SuhH.js";const u=t=>o.jsx(s.Provider,{value:t.blockSummaries,children:o.jsx(c,{})}),et={title:"components/Data/Block Summary Data Table/Interactions",component:u,args:{blockSummaries:[]},argTypes:{blockSummaries:{control:"object"}}},e=new n,b=Array.from(p(l(20),t=>({block:t,proposer:[e.fillBytes(20)],transactions:t,size:e.nextRange(1e3,1e5)*10,time:new Date(Date.now()+t*1e3)}))),r={args:{blockSummaries:b},play:async({canvasElement:t,step:a})=>{await a("retrieve the data table element",async()=>{await m(t)}),await a("sort all columns",async()=>{await i(t)})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
